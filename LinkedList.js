// linear O(n) search
// elements can be inserted or deleted without reorganization of the entire list
// instantiate with: const ll = new LinkedList();
TODO: // add iterator to allow for-of loop
class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head); // pushes first/null to n2
        this.size++;
    }
    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        //if empty, make head
        if (!this.head) {
            this.head = node;
        }   else {
                current = this.head;

                while (current.next) {
                    current = current.next;
                }
                current.next = node;
        }
        this.size++;
    }
    // Insert at index
    insertAt(data, index) {
        // If index is out of range
        if(index < 0 || index > this.size -1) {
            console.log("index is out of range");
            return;
        }
        
        // If first index
        if(index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        
        if(index > this.size -1) {
            console.log("index out of range");
            return;
        }

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    // Remove at index
    removeAt(index) {
        if(index < 0 || index > this.size -1) {
            console.log("index out of range");
            return;
        } else {

            let current = this.head;
            let previous;
            let count = 0;

            // Remove first
            if(index === 0) {
                this.head = current.next;
            } else {
                while (count < index) {
                    count++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
        }
    }

    // Search result false or if true then index
    searchList(element) {
        let current = this.head;
        let index = 0;
        let count = [];

        if (this.size === 0) {
            return false;
        } else {
            while (index < this.size) {
                if (current.data === element) {
                    count.push(index);
                }
                current = current.next;
                index++;
            }
            if (count.length !== 0) {
                return count;
            }
        }
        if(count.length === 0) {
            return false;
        }
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    print() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}