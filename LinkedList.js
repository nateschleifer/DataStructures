// linear O(n) search
// elements can be inserted or deleted without reorganization of the entire list
// elements are not hashed; they must be searched
// same applications as stacks and queues; slide show
// instantiate with: const ll = new LinkedList();
//TODO: // add iterator to allow for-of loop
        //sort; change pointers(next)
        // removeAllValue(value)
class Node {
    constructor(value, next=null) {
        this.value = value;
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

    // Insert first node O(1)
    prepend(value) {
        this.head = new Node(value, this.head); // pushes first/null to n2
        this.size++;
    }
    // Insert last node O(n)
    append(value) {
        const node = new Node(value);
        let prev;

        //if empty, make head
        if (this.isEmpty()) {
            this.head = node;
        }   else {
                prev = this.head;

                while (prev.next) {
                    prev = prev.next;
                }
                prev.next = node;
        }
        this.size++;
    }
    // Insert at index
    insert(value, index) {
        // If index is out of range
        if(index < 0 || index > this.size) {
            console.log("index is out of range");
            return;
        }
        
        // If first index
        if(index === 0) {
            this.prepend(value);
            return; // prepend() increments size
        } else {
            const node = new Node(value); // create new node outside of list

            //Set prev points to head
            let prev = this.head;
            let i = 0;

            while(i < index-1) {
                prev = prev.next; // advance prev to before insertion index
                i++;
            }

            node.next = prev.next; // new node points to node at current index
            prev.next = node; // prev node points to new node closing list
            this.size++;
        }
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
                console.log(current.value);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    // Remove at index
    removeAt(index) {
        if(index < 0 || index >= this.size) {
            return null;
        } 
        let remv;
        if(index === 0) {
            remv = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            let i = 1;
            while (i < index) {
                prev = prev.next;
                i++;      
            }
            remv = prev.next;
            prev.next = remv.next;
        }
        this.size--;
        return remv.value;
    }

    removeValue(value) {
        if(this.isEmpty()) {
            return null;
        }
        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while(prev.next !== null && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next) {
                const remv = prev.next;
                prev.next = remv.next;
                this.size--;
                return value;
            } 
            return null;
        }
    }
    // Search for value; return first index
    search(value) {
        if(this.isEmpty()) {
            return -1;
        }
        let index = 0;
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        } 
        return -1;
    }
    // Search for all indexes of value
    searchAll(value) {
        let current = this.head;
        let index = 0;
        const count = [];

        if(this.isEmpty()) {
            return -1;
        } else {
            while (index < this.size) {
                if (current.value === value) {
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
            return -1;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list value
    print() {
        if(this.isEmpty()) {
            console.log("Linked list is empty");
        }
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}