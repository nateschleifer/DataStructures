// FIFO, enqueue(push), dequeue(shift)
// O(1): enqueue, O(n): dequeue
// process orderly: CPU task schedule, printer
// to instantiate: const queue = new Queue();
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        return this.rear - this.front;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is empty. Nothing to dequeue!");
        } else {
          const item = this.items[this.front];
          delete this.items[this.front];
          this.front++;
          return item;
        }
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        if(this.isEmpty()) {
            return "Queue is empty.";
        } else {
            return this.items[this.front];
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log("Queue is Empty.");
        } else {
            for(const value of Object.values(this.items)) 
              console.log(value);
        }
    }
}


