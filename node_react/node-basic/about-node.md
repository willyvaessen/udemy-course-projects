## Node JS asynchronous programming

Node.JS user a single threaded, non-blocking I/O model.
Even though it is single threaded, it is efficient because it uses a non-locking
event loop and keeps the events in a stack.
They will be executed one by one without waiting for any one of these to complete.
Instead, the will be executed and completed as the process is running other callbacks.


## Secrets of understanding node.js

JavaScript environment browser/server
Understanding functions / callback functions
Event loop
Asynchronous (non-blocking) vs synchronous (blocking)