/* linked list is a linear-data-structure which mean data only flows one way;
 it allows the pointer to be traversed back and forth 
 This data set normally consits of 2 parts , the first is the actual data and the second
 is the address which is used map the squential node;
 
 It also have both head(first element) and tail(last element);
    head point to the first item in the list
    tail point to null;
 if the list is empty then the head should also point to null therefore it return null;

 *Memory Allocation:
    Link list doesn't require contigous flow of memory which mean pieces of data could be stored in
    chunk of memory scattered through different places.This allow the size of memory to be dynamic, inflate or shrink
    according to the list;
 There are 3 types of linked list:
    1.singly linked-list (single link)
    2.double linked-list (double back and forth link)
    3.circular linked-list (The last element also point to the first element);
    
 */
/**  head -> 1 -> 2 -> 3 -> ... -> null (terminate)
 *   1 -> 2 -> 3 -> ... -> head
 * traverse from bottom to top
*/



/*
   Hash Table: is a type of data structure that is used to index and search large data.It uses hash function or algorithm to perform calculation and derive location from a given data.
   -Hash Table characteristic(theoritical assumptions):
   -Average Insertion / Deletion / Retrieval : O(1)
   -Worst case scenario : O(n)
   
   Due to its average constant lookup time, Hasing is used in database indexing, password authentication,compiler,caching and more;

   General algorithms:
   To determine the position of the key of the map, We need to sum all the component inside a map then divide it by the total length of the array and return the remainder; That remainder is the final position.  
   Character key : (sum of ASCII of each character)  mod (avialable addresses)
   Numerical key : (Total num) mod (avialable addresses)
   mod = modulo : to take the remainder of something;
   ASCII = American Standard Code for Information Interchange;
   For eg: len(arr) = 8;
      Apple => A p p l e => ASCII = 65 + 112 + 112 + 73 + 101 = 463
      => key = 463 % 8 = 7 therefore postion of 'Apple' is index 7;
      653 => key = 653 % 8 = 5
   hash table is built on top of Associative array or dictionary; it divides each key into a 'bucket';
   The theory is that it can access each element in array with a constant time thanks to the nature of random access memory and combine with the hashing function it can yeild great result for data indexing. 
   To fully implement hash function, we need to deal with something call collision;Collision is when the result of the key from the hash function itself conflict with the previous position of the bucket;Therefore we cannot place the different item in the same position but there are workarounds for this issue;
*/
398 + 65 = 463