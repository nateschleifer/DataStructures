const LinkedList = require('./LinkedList');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        return this.list.prepend(value);
    }

    pop() {
        return this.list.removeAt();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}
