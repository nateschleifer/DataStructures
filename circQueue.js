// fixed size block of memory; first element connected to last element
// circular buffer FIFO, clock, streaming data, traffic lights
// instantiate with: const circ = new CircQueue(5);
class CircQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear =  -1;
        this.front = -1;
    }
    isFull() {
        return this.currentLength - this.capacity === 0;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        } else {
            console.log("Queue is full. Cannot add to full queue.")
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        } else {
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength--;
            if (this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
            return item;
        }
    }
    
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        } else {
            return this.items[this.front];
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
        } else {
            for (let i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
                console.log(this.items[i]);
            }
            console.log(this.items[this.rear]);
        }
       
    }
}

