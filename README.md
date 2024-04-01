# Virtual Theremin 
This is a computer instrument which mimics the behavior of the *theremin* using the hand-tracking capabilities of the mediapipe/cvzone framework. 

- The simplest version is the "move-cursor version". The one only does the pitch/frequency hand.
- The "controlling volume and pitch" version has a seperate python server which communicates with the p5js script through a socket. This one incorporates the volume hand.

I coded it this way (mixing python and js) because my main goal was to design it for generality, so one could incorporate input data from a raspberry pi/arduino/another webcam source, etc and take in arbitrary inputs...

Here is my full video tutorial on this project by the way: 
- Part 1: https://www.youtube.com/watch?v=ApDZcRjTxRI
- Part 2: https://www.youtube.com/watch?v=TmKduyYXGz4
