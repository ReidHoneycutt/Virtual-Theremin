import asyncio
from server import SimpleWebSocketServer  # Ensure this module exists and is correct
import cv2
import pyautogui
from cvzone.HandTrackingModule import HandDetector


def init_cap():
    cap = cv2.VideoCapture(0)
    cap.set(3, 1920)  # Set capture width
    cap.set(4, 1080)  # Set capture height
    return cap


def init_detector():
    detector = HandDetector(detectionCon=0.8, maxHands=1)
    return detector


async def move_cursor_and_send(cap, detector, server):
    screenWidth, screenHeight = pyautogui.size()
    while True:
        success, img = cap.read()
        hands, img = detector.findHands(img)
        if hands:
            # hand 1
            x = (hands[0]["lmList"][8][0] * screenWidth / 1920)
            y = (hands[0]["lmList"][8][1] * screenHeight / 1080)
            # hand 2
            x2 = (hands[1]["lmList"][8][0] * screenWidth / 1920)
            y2 = (hands[1]["lmList"][8][1] * screenHeight / 1080)
            if server.client:  # Check if a client is connected
                await server.send(f"{x}@{y}")
            else:
                print("Waiting for a client to connect...")
        await asyncio.sleep(0.1)  # Slight delay to limit message rate


async def main():
    server = SimpleWebSocketServer('127.0.0.1', 8080)
    cap = init_cap()
    detector = init_detector()

    # Start server and move_cursor_and_send as tasks
    server_task = asyncio.create_task(server.start_server())
    cursor_task = asyncio.create_task(move_cursor_and_send(cap, detector, server))

    await asyncio.gather(server_task, cursor_task)


if __name__ == "__main__":
    asyncio.run(main())
