
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element) {
        const node = new Node(element);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if (isEmpty()) {
            return 'Stack is Empty';
        }
        const value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is Empty';
        }
        return this.top.value;
    }
}