class Stack {
    constructor() {
        this.items = []; // By Default my stack is empty
    }

    push(...element) { // [1,2,3,4] // Rest operator
        this.items.push(...element); // spread operator
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }

        this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items[this.items.length - 1 ]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    printStack() {
        console.log(this.items.join(' '));
    }
}


let stack1 = new Stack();

stack1.push(1,2,3);

stack1.printStack();