
# This is the server class code you provided, saved in websocket_server.py
import asyncio
import websockets

class SimpleWebSocketServer:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.client = None

    async def handle_client(self, websocket, path):
        self.client = websocket
        try:
            async for message in websocket:
                print(f"Received message from client: {message}")
                await self.send(f"Echo: {message}")
        except websockets.ConnectionClosed:
            print("Client has disconnected.")
        finally:
            self.client = None

    async def send(self, message):
        if self.client:
            await self.client.send(message)
        else:
            print("No client is connected.")

    async def start_server(self):
        async with websockets.serve(self.handle_client, self.host, self.port):
            print(f"Server started at ws://{self.host}:{self.port}")
            await asyncio.Future()  # Run forever
