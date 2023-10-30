/**
 * Node.js is an open-source, cross-platform JavaScript runtime environment
 *  built on Chrome's V8 JavaScript engine. It allows developers to execute
 *  JavaScript code server-side, outside the context of a web browser.
 * Node.js is designed to be scalable and efficient, making it well-suited
 *  for building server-side applications.
 *
 * Key features and concepts of Node.js include
 * 1. Non-blocking I/O:
 *      Node.js is known for its event-driven, non-blocking I/O model.
 *  This means that it can handle a large number of concurrent connections without
 *  the need for threading. Asynchronous operations in Node.js use callbacks to
 *  manage concurrency.
 *
 * 2. Event-Driven Architecture:
 *      Node.js is built around an event-driven architecture.
 *  It uses an event loop to handle asynchronous operations. Events are emitted
 *  when certain conditions are met, and listeners (callbacks) respond to those events.
 *
 * 3. NPM (Node Package Manager):
 *      NPM is the package manager for Node.js, providing a vast ecosystem of
 *  open-source libraries and tools. Developers can easily install, share,
 *  and manage dependencies using NPM.
 *
 * 4. Single-threaded, Event Loop:
 *      While Node.js is single-threaded, it uses an event loop to efficiently
 *  handle multiple concurrent operations. This allows Node.js to handle a
 *  large number of simultaneous connections with low overhead.
 *
 * 5. Cross-Platform:
 *      Node.js is designed to run on various operating systems, including
 *  Windows, macOS, and Linux. This cross-platform compatibility makes it
 *  suitable for a wide range of applications.
 *
 * 6. Server-Side Development:
 *      Node.js is commonly used for building server-side applications, such as
 *  web servers, APIs, and real-time applications. Popular frameworks
 *  like Express.js make it easy to build web applications in Node.js.
 *
 * 7. Scalability:
 *      Node.js applications can be easily scaled horizontally by adding
 *  more instances or nodes to a network. This scalability is particularly
 *  beneficial for handling a large number of concurrent connections.
 *
 */

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


/**
 * The distinction between method and product.
 * This is accomplished through the use of nextTick() and setImmediate().
 *
 * nextTick():
 * nextTick() postpones the execution of action until the next pass around the event loop, or
 * it simply calls the callback function once the event loop's current execution is complete.
 *
 * setImmediate():
 * setImmediate() executes a callback on the next cycle of the event loop and returns control
 * to the event loop for any I/O operations.
 *
 */