import Node from "./node.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next =this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
    }

    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            if (!current.next) this.tail = current;
            this.length--;
        }
    }

    size () {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }
    
    atIndex(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    pop() {
        if (!this.head) return null;
        if (this.head === this.tail) {
            const poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return poppedNode;
        }

        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }

        const poppedNode = this.tail;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return poppedNode;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let current = this.head;
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        return result + 'null';
    }
        
}

export default LinkedList;

