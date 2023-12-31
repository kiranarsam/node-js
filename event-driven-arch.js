/**
 * In this example, an `EventEmitter` class is created to illustrate
 *  the basic concepts of an event-driven architecture.
 *  Components can register listeners for specific events and emit events
 *  when certain actions occur.
 */

// Event emitter
class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    emit(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(listener => listener(data));
        }
    }
}

// Example usage
const emitter = new EventEmitter();

emitter.on('userClick', data => {
    console.log('User clicked:', data);
});

emitter.emit('userClick', { target: 'Button' });

/**
 * Event-driven architecture (EDA) is a software design pattern that emphasizes
 *  the production, detection, consumption, and reaction to events.
 * In an event-driven architecture, the flow of the program is determined by events
 *  such as user actions, sensor outputs, or messages from other programs or threads.
 * The system responds to events by invoking the appropriate event handlers
 *  or callback functions.
 *
 * Key characteristics of event-driven architecture include:
 *
 * 1. **Events:**
 *    - Events are occurrences or happenings within a system that may trigger a
 *  response. Events can be generated by various sources, such as user interactions,
 *  external systems, or internal processes.
 *
 * 2. **Event Handlers:**
 *    - Event handlers are functions or methods that are executed in response
 *  to a specific event. They define how the system should react when a
 *  particular event occurs.
 *
 * 3. **Asynchronous Execution:**
 *    - Event-driven systems often operate asynchronously.
 *  This means that the program does not wait for a specific event to complete
 *  before moving on to the next task. Instead, it registers event handlers,
 *  and when an event occurs, the corresponding handler is executed.
 *
 * 4. **Event Loop:**
 *    - An event loop is a central component of event-driven systems.
 *  It continuously listens for events and dispatches them to the appropriate
 *  event handlers. The event loop allows the system to be responsive to
 *  multiple events concurrently.
 *
 * 5. **Loose Coupling:**
 *    - Event-driven architectures often result in loosely coupled systems.
 *  Components or modules can communicate through events without direct
 *  dependencies on each other. This loose coupling enhances flexibility
 *  and maintainability.
 *
 * 6. **Scalability:**
 *    - Event-driven architectures are inherently scalable.
 *  As events are processed asynchronously, systems can efficiently
 *  handle a large number of concurrent events without being blocked.
 *
 * 7. **Real-time Responsiveness:**
 *    - The asynchronous and non-blocking nature of event-driven systems
 *  makes them well-suited for real-time applications. They can respond quickly
 *  to user interactions, sensor data, or external changes.
 *
 * 8. **Publish-Subscribe (Pub/Sub) Pattern:**
 *    - The Pub/Sub pattern is often used in event-driven architectures.
 *  Components (subscribers) subscribe to receive events from other
 *  components (publishers). When a publisher generates an event,
 *  it is broadcasted to all interested subscribers.
 *
 * Examples of event-driven architectures include graphical user interfaces (GUIs),
 *  web applications, messaging systems, and many types of server applications.
 *  In web development, front-end frameworks like
 *  React and back-end frameworks like Node.js are based on
 *  an event-driven architecture.
 *
 */
