// Elements can be added or removed without reorganization of entire structure
// O(n) access time
// elements can be inserted or deleted without reallocation or reorganization of entire structure
// same applications as stacks and queues; slide show, undo/redo, etc.
// instantiate with: const ll = new LinkedList();
// TODO: add iterator for allow for...of loop, sort, removeAllValues(value)
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

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // Insert first node
    prepend(data) {
        this.head = new Node(data, this.head); // pushes first/null to n2
        this.size++;
    }
    // Insert last node
    append(data) {
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
            this.prepend(data);
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
        
        if(index >= this.size || index < 0) {
            console.log("index out of range");
            return;
        }

        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    // Remode at index
    removeAt(index) {
        if(index < 0 || index >= this.size) {
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
    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    reverseList() {
        let current = this.head;
        let previous = null;
        let nxt = null;

        while(current) {
            nxt = current.next;
            current.next = previous; // 
            previous = current;
            current = nxt;
        }

        this.head = previous;
    }
}

const ll = new LinkedList();
ll.append(200);
ll.append(300);
ll.append(400);
ll.append(500);
// ll.printListData();

const ll2 = new LinkedList();
ll2.append(100);
ll2.append(200);
ll2.append(300);
ll2.append(600);
ll2.append(700);
ll2.append(800);
// ll2.printListData();


function mergeTwoLinkedLists(l1, l2) {
    let merged = new LinkedList();
    let current1 = l1.head;
    let current2 = l2.head;

    while(current1 && current2) {
        if(current1.data < current2.data) {
            merged.append(current1.data);
            current1 = current1.next;
        } else {
            merged.append(current2.data);
            current2 = current2.next;
        }
    }

    while(current1) {
        merged.append(current1.data);
        current1 = current1.next;
    }

    while(current2) {
        merged.append(current2.data);
        current2 = current2.next;
    }

    return merged;
    
}

mergeTwoLinkedLists(ll, ll2).printListData();
