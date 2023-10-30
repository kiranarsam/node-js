/**
 * EventEmitter:
 *
 * EventEmitter is a class that holds all the objects that can emit events.
 * Whenever an object from the EventEmitter class throws an event,
 *  all attached functions are called upon synchronously
 *
 */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occured!');
});

myEmitter.emit('event');