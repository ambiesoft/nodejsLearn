/*
process.nextTick => process.nextTick queue
Promise.then() => promises microtask queue
setTimeout, setImmediate => microtask queue

Event loop executes tasks in process.nextTick queu first,
and then executes promises microtask queu, and then executes
microtask queue.
*/

const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
    console.log('start');
    setImmediate(baz);
    new Promise((resolve, reject) => {
        console.log('Promise ctor-passed func', resolve, reject);
        resolve('bar');
    }).then(resolve => {
        console.log('Promise then func');
        console.log(resolve);
        process.nextTick(zoo);
    });
    console.log('After create promise');
    process.nextTick(foo);
};

start();