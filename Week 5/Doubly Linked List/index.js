class Node {
    constructor (data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// H,T
// [1]

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        // Create a new node for linked list
        const newNode = new Node(data);
        // If the linked list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

        //                             C
    // [10] <-> [20] <-> [30] <-> [40]
    // Print the linked list.
    // Can we do this recursively ?
    printForward() {
        let current = this.head;
        let str = 'null <->';
        while(current) {

            console.log(current, 'current');
            str = str + current.data + ' <-> '
            current = current.next;
        }

        console.log(str + ' null');
    }
//  Console 1 -> 2 -> 3 -> 4 -> 
    // [1] -> [2] -> [3] -> [4] -> null
    printForwardWithRecursion(node) {
        if (!node) { // Base Case
            return;
        }

        console.log(node.data + ' ->');
        this.printForwardWithRecursion(node.next);
    }
        //                       C
    // [1] -> [2] -> [3] -> [4]

    // Console 4 -> 3 -> 2 -> 1
    printBackwardsWithRecursion(node) {
        if (!node) { // Base Case
            return;
        }

        this.printForwardWithRecursion(node.next);
        console.log(node.data + ' ->');
    }

    // Algo not the actual solution (You can give it a try)
    printBackwardsWithWhile(node) {
        // C --> T

        while(current) {
            current = current.next;
        }

        while(current) {
            console.log(current.data);
            current = current.prev;
        }
    }
        //                C
    // [10] <-> [20] <-> [40]
    removeAt(position) {
        if (position < 0) {
            return false;
        }

        let current = this.head;
        let index = 0;

        if (position === 0 && current) {
            this.head = current.next;

            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }

            this.size--;
            return true;
        }

        while (current) {
            if (index === position) {
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                if (current.prev) {
                    current.prev.next = current.next;
                }

                this.size--;
                return true;
            }

            current = current.next;
            index++;
        }

        return false;
    }


    //  [10] <-> [20] <-> [30] <-> [40], position  = 1, newData = 15
    updateAt(position, newData) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (index === position) {
                current.data = newData;
                return true;
            }

            current = current.next;
            index++;
        }

        return false;
    }

    search(data) {
        let current = this.head;

        while(current) {
            if (current.data === data) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    searchWithRecursion(data, node) {
        if (!node) { return false; }

        if (node.data === data) { return true; }

        return this.searchWithRecursion(data, node.next);
    }

    
}
// [10] <-> [20]
const doubleLinkedList1 = new DoublyLinkedList();
doubleLinkedList1.append(10);
doubleLinkedList1.append(20);
doubleLinkedList1.append(30);
doubleLinkedList1.append(40);

doubleLinkedList1.printForward();