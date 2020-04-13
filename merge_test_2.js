/**
 * 
 *                                              down-->           <--up
 *                                             after-->           <--before
 *      
 *                                   +-------------------- - --------------+
 *                                   |                                     |
 *      +--------------+             V         Head Node        Tail Node  |
 *      |              |         +-------+     +-------+        +-------+  |
 *      |        pHead---------->|/pNext------>| pNext---- - -->| pNext----+
 *      |              |         |///////|     |       |        |       |
 *      |    pNodeLast--->?   +----pPrev/|<------pPrev |<- - -----pPrev |
 *      |              |      |  |///////|     |       |        |       |
 *      |        count |      |  |/pData/|     | pData |     +->| pData |
 *      |              |      |  +-- | --+     +-- | --+     |  +-- | --+
 *      +--------------+      |      |             |         |      |
 *                            |      V             V         |      V
 *                            |     ###           ###        |     ###
 *        //// = Dummy Node   |     ###           ###        |     ###
 *                            |                              |
 *         ### = User Data    +--------------------------- - +
 */
const {
    linklist,
    Node
} = require('./link-list')

function Merge(left, right) {
    let sorted = [];
    let i = j = k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sorted[k++] = left[i++]
        } else {
            sorted[k++] = right[j++]
        }
    }
    // store leftover
    while (i < left.length) {
        sorted[k++] = left[i++]
    }
    while (j < right.length) {
        sorted[k++] = right[j++]
    }
    return sorted
}

function MergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = [],
        right = [],
        q = arr.length - mid;
    for (let i = 0; i < mid; i++) {
        left[i] = arr[i]
    }
    for (let j = 0; j < q; j++) {
        right[j] = arr[j + mid]
    }
    let sorted = Merge(MergeSort(left), MergeSort(right));
    return sorted
}

function mergelist({
    nl,
    nr
}) {
    let left = nl;
    let right = nr;
    let sorted;
    let dummy_head = new Node();
    if (left.data <= right.data) {
        sorted = left;
        left = sorted.next
    } else {
        sorted = right;
        right = sorted.next;
    }
    dummy_head = sorted
    while (right && left) {
        if (left.data <= right.data) {
            sorted.next = left;
            sorted = left;
            left = sorted.next;
        } else {
            sorted.next = right;
            sorted = right;
            right = sorted.next;
        }
    }
    // console.log(dummy_head)
    if (left === null) sorted.next = right;
    if (right === null) sorted.next = left;

    return dummy_head;
    // console.log(left)
}

function len(xhead) {
    let cur = xhead;
    let count = 0;
    while (cur) {
        count++;
        cur = cur.next;
    }
    return count;
}

function Ls_splitter(head) {
    let oldhead = head;
    if (head.next === null) return head;
    let mid = len(head) / 2;
    while (mid - 1 > 0) {
        oldhead = oldhead.next;
        mid--;
    }
    let newhead = oldhead.next;
    oldhead.next = null; // disconnect the link of nxt element
    oldhead = head; // 
    // console.log(oldhead)
    let tx1 = Ls_splitter(oldhead);
    let tx2 = Ls_splitter(newhead);
    let sorted = mergelist({
        nl: tx1,
        nr: tx2
    });
    return sorted;
}

function MergeSort(head) {
    let sorted = Ls_splitter(head);
    let oem = new linklist();
    oem.head = sorted;
    return oem;
}

function printer(ll) {
    let current;
    if (ll.head !== undefined) {
        current = ll.head
    } else if (ll === null) {
        throw Error('linked list is null! cannot read;')
    } else {
        current = ll
    }
    while (current) {
        console.log(current.data);
        current = current.next;
    }
    return null;
}

function genIntlist(len) {
    let newlist = new linklist();
    for (let i = 0; i < len; i++) {
        let random = (Math.random() * 1.5 * 100) + Math.random() * 500 * Math.pow(i, Math.random())
        newlist.insertfront(Math.floor(random))
    }
    return newlist;
}

function IndexMerge(left, right, category) {
    if (left.head !== undefined && right.head !== undefined) {
        left = left.head;
        right = right.head
    }

    if (left === null) return right;
    if (right === null) return left;

    let sorting_pointer;
    let dummy_head = new Node();
    if (left.data[category] < right.data[category]) {
        sorting_pointer = left;
        left = sorting_pointer.next;
    } else {
        sorting_pointer = right;
        right = sorting_pointer.next;
    }
    dummy_head = sorting_pointer;
    while (left && right) {
        if (left.data[category] < right.data[category]) {
            sorting_pointer.next = left;
            sorting_pointer = left;
            left = sorting_pointer.next
        } else {
            sorting_pointer.next = right;
            sorting_pointer = right;
            right = sorting_pointer.next
        }
    }
    if (left === null) sorting_pointer.next = right;
    if (right === null) sorting_pointer.next = left;
    return dummy_head;
}
function NameSort(headlist,name = 'price'){
    let oldhead  = headlist;
    let size = len(headlist);
    let mid = size/2;
    if(headlist.next === null) return headlist;
    while(mid - 1 > 0){
        oldhead = oldhead.next;
        mid--;
    }
    let newhead = oldhead.next;
    oldhead.next = null;
    oldhead = headlist;
    let t1 = NameSort(oldhead,name);
    let t2 = NameSort(newhead,name);
    const result = IndexMerge(t1,t2,name)
    return result; // dont forget to return back the result;
}
let shoppingcart = new linklist();
shoppingcart.insertfront({
    price: genInt(),
    name: 'coconut oil'
})
shoppingcart.insertfront({
    price: genInt(),
    name: 'graphic card'
})

shoppingcart.insertfront({
    price: genInt(),
    name: 'Dog food'
})
shoppingcart.insertfront({
    price: genInt(),
    name: 'banana shake'
})
function genInt(len = 1) {
    let random;
    for (let i = 0; i < len; i++) {
        random = (Math.random() * 1.5 * 100) + Math.random() * 500 * Math.pow(i, Math.random())
    }
    return random
}

let sortt = NameSort(shoppingcart.head);

printer(sortt)
// console.time('hmm how long?')
// let tst = MergeSort(genIntlist(1000000).head);
//     printer(tst)
// console.timeEnd('hmm how long?')
// console.log()