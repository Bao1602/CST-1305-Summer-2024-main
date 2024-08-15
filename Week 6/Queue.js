class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow';
        }

        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return 'No Elements in queue';
        }

        return this.items[0];
    }
} 