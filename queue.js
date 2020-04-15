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

function reverseEvenNum(head, prev) {
    let cur, temp;
    cur = head;
    if (head === null) return null;
    // only execute one
    while (cur && cur.data % 2 === 0) {
        temp = cur.next;
        cur.next = prev
        prev = cur;
        // this only print even numbers
        cur = temp;
    }
    // cur is already at the end
    if(head != cur){
        head.next = cur;
        cur =  (cur,null)
        return prev
    }
    else{
        //iterate over the odd number
        head.next = reverseEvenNum(head.next,head);
    }
    
  
}
function printer(head){
    let cur = head;
    while(cur){
        console.log(cur.data)
        cur = cur.next;
    }
    return
}
let intqueue = new queue();
/**
 * reverse :
prev -> (
    2
    4 <- head
)
cur -> (3,20,6,8,7,10)
+when the first two element got reversed:
while(cur !=head) 
    head.next = cur;
    cur = reverse(cur,null);
    return prev
prev - > (2,4, 3 <- cur pointer ) * because 3 is not even number so the current pointer stop there
 */

intqueue.enqueue(4)
intqueue.enqueue(2)
// freezed becuze 3 is not even num
intqueue.enqueue(10) 
intqueue.enqueue(3)
intqueue.enqueue(6)
intqueue.enqueue(8)
//paired
intqueue.enqueue(7)
intqueue.enqueue(10)

intqueue.print()
console.log('#########rv#######')
let ouu = reverseEvenNum(intqueue.head);
printer(ouu)