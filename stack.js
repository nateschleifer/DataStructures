// LIFO, push, pop
// trace history: back-forward, undo
// array with restrictions; use an array but restrict yourself
// push, pop, access are O(1)
// instantiate with: const stack = new Stack();

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length-1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}


