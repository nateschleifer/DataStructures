// FIFO, enqueue(push), dequeue(shift)
// O(n): dequeue, O(1): enqueue
// process orderly: CPU task schedule, printer
// to instantiate: const queue = new Queue();

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        } else return null
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}



