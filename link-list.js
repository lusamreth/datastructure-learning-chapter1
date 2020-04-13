
function merge(arr1, arr2) {
   if (!Array.isArray(arr1) || !Array.isArray(arr1)) {
      throw Error('This function only accept array;');
   }
   let merged = arr1.concat(arr2);
   merged.sort((a, b) => a - b);
   return merged;
}
let a1 = [0, 2, 1, 5];
let a2 = [3, 0, 1, 5];

let result = merge(a1, a2);


//class for each node
class Node {
   constructor(data, next = null) { // next null cuz last link point to null
      this.data = data;
      this.next = next;
   }
}

class linklist {
   constructor() {
      this.head = null;
      // this.tail = null;
   }
   insertlast(data) {
      const newnode = new Node(data); /** pre param is auto null */
      let current = this.head; /** first element in the list */
      while (current) {
         current = current.next; // traverse through next pointer
      }
      current = newnode
   }
   insertfront(data) {
      const newnode = new Node(data, this.head);
      this.head = newnode;
   }
   InsertAt(data, index) {
      let newnode = new Node(data);
      let current = this.head;
      let previous = this.AccessAt(index - 1);
      let count = 0;
      while (current) {
         if (count === index) {
            previous.next = newnode;
            newnode.next = current;
            return current;
         }
         current = current.next;
         count++
      }
      return null
   }
   indexOf(data){
      let current = this.head;
      let count = 0;
      let result;
      if(data === null || data === undefined){
         return;
      }
      while(current){
         if(current.data === data){
            result = count;
         }else{
            result = null
         }
         current = current.next;
         count++;
      }
      return result
   }
   AccessAt(index) {
      let current = this.head;
      let count = 0;
      while (current) {
         if (count === index) {
            return current;
         }
         current = current.next;
         count++
      }
      return null;
   }

   getsize() {
      let current = this.head;
      let count = 0;
      while (current) {
         count++
         current = current.next;
      }
      return count;
   }
   // delete operation code blocks
   deletefirst() {
      let current = this.head;
      this.head = current.next; // skip the first element
   }
   deletelast() {
      let length = this.getsize();
      let prior = this.AccessAt(length - 2);
      prior.next = null // point previous element to null
   }
   /*
   -two of these f(x) yeild the same result , except 
   different implementation.
   */ 
   deleteAt(index) {
      let previous = this.AccessAt(index - 1);
      let current = previous.next
      previous.next = current.next;
   }
   delete(index){
      if(index === 0){
         this.deletefirst();
      }
      let prev = this.head;
      for(let i = 0;i<index - 1;i++){
         prev = prev.next;
      }
      let current = prev.next;
      prev.next = current.next;
      return prev;
   }
   // delete operation code blocks
   sorting() {
      let current = this.head;
      let prev;
      while(current){
         current = current.next;
      }
      return current
   }
   Rc_reverse(head){
      // block of fucntion scope //
      let current = head;
      // base case
      if(current.next === null){ 
         return current; // set it to head
      }
      let newnodelist = this.Rc_reverse(current.next);
      let nextelement = current.next;
      nextelement.next = current;
      current.next = null
      // block of function scope
      return newnodelist // result;
   }
   It_reverse(){
      let current = this.head;
      let tempnext;
      let prev = null;
      while(current){
         tempnext = current.next;
         current.next = prev
         prev = current
         current = tempnext
      }
      this.head = prev; // don't foget to attach head
   }
   printList() {
      let current = this.head;
      while (current) {
         console.log(current.data); // access the first data in head / then to the next
         current = current.next; // loop current through the list
      }
   }

}
const list = new linklist();
list.insertfront('4');
list.insertfront('3');
list.insertfront('2');
list.insertfront('1');
list.insertfront('0');
// list.insertfront('First');
console.log('##########################')
// console.log(list.InsertAt('daaa',3));
console.log('##########################')
// console.log(list.delete(4))
console.log('prev : null')
// list.printList()

module.exports = {linklist,Node};