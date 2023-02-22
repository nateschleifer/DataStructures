// non-linear
// In linear data structures, the time required to search is proportional to size
// trees require less time on average to search and access data
// Ex: file system directory structure, DOM, abstract syntax trees
// binary search trees: searching, sorting, lookup tables and priority queues
// instanciate with : const bst = new BinarySearchTree();
class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value){
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) { 
            return false;
        } else {
            if(root.value === value) {
            return true;
            } else if(value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) { // DFS
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) { // DFS
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) { // DFS
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() { // BFS
        // use th optimised queue implementation
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if(!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if(root === null) { // this is recurrent
            return root; // there may be additional nodes above 2/1\3
        }
        if(value < root.value) { // traverse left
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) { // traverse right
            root.right = this.deleteNode(root.right, value);
        } else { // found node with value; 3 scenarios
            if(!root.left && !root.right) { // leaf node
                return null;
            }
            if(!root.left) {
                return root.right;
            }else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right); // reassigns current node to next largest
            root.right = this.deleteNode(root.right, root.value); // deletes node
        }
        return root; // ensure changes/deletions are reflected in BST
    }
}


