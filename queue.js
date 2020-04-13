/**
 * Nomenclature
 * End of queue : rear
 * start of queue : front
 * Enqueue : to insert a new node in the back 
 * Dequeue : to recieve the node from the front
 * 
 * Complexing:
 * Operations: enqueue,dequeue,front,empty : O(1)
 * Read / search : O(n)
 * Insertion / Deletion at front or rear : O(1)
 * 
 * Characteristic: Queue generally has indefinite limit of element in respect of the memory constraint
 * Its add / del operations are time constant but the searching / iterating process are slow.Queue can be
 * overflow when the memory is out of limit or underflow when trying to delete an empty queue.
 * 
 * queue data structure is based on FIFO (first in first out) principle and used to implicate 
 * real world application such as queue in shopping mall or in theatre.
 * 
 * Queue can be implemented via array or Doubly linked list or singly linked list with some
 * tweaks(storing head and tail).
 */
let {
    Node
} = require('./link-list');

class queue {
    constructor() {
        // head = front
        this.head = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(data) {
        let q = this;
        let temp = new Node();
        temp.data = data;
        temp.next = null;
        if (q.head === null && q.rear === null) {
            q.head = q.rear = temp;
            console.log(q.head)
            return;
        }
        q.rear.next = temp; // init pointer
        // move rear pointer to the new node;
        q.rear = temp;
        q.size++;
        return;
    }
    dequeue() {
        let q = this;
        if (q.head === null) return;
        q.head = q.head.next;
        q.size--;
        console.log(q.head)
    }
    front() {
        let q = this;
        console.log(q.head.data)
        return q.head.data;
    }
    reverse() {
        let q = this;
        let current = q.head;
        let prev = null;
        while (current) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        q.head = prev;
    }
    isEmpty() {
        return this.size === 0
    }
    print() {
        let q = this;
        let current = q.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}
// let testqueue = new queue();
// testqueue.enqueue('data')
// testqueue.enqueue('qqq')
// testqueue.enqueue('data')
// testqueue.enqueue('daaaata')
// testqueue.print()
// console.log('################### after reverse:')
// testqueue.reverse()
// testqueue.print()
function reverseEvenNum(head,prev = null) {
    let cur,temp;
    cur = head;
    if(head === null) return null;
    while(cur && cur.data % 2 === 0){
        temp = cur.next;
        cur.next = prev
        prev = cur;
        cur = temp;
    }
    if(cur !== null){
        console.log(cur === head,cur.data,head.data)
    }
    if (cur != head)  
    { 
        head.next = cur; 
        // Recur for the remaining linked list 
        cur = reverseEvenNum(cur, null); 
        return prev; 
    }else{
        head.next = reverseEvenNum(head.next,head);
        return head
    }
}

let intqueue = new queue();
// for (let i = 0; i < 10; i++) {
//     intqueue.enqueue(i * 2)
// }
intqueue.enqueue(4)
intqueue.enqueue(2)
intqueue.enqueue(3)
intqueue.enqueue(6)
intqueue.enqueue(8)
intqueue.enqueue(7)
intqueue.enqueue(10)


console.log(intqueue)
let ouu = reverseEvenNum(intqueue.head);
console.log(ouu)