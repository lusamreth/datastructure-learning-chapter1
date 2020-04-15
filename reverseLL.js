const {
    linklist,
    Node
} = require('./link-list')

function push(head, data) {
    if (head === undefined) {
        head = new linklist();
    }
    head.insertfront(data)
}

function Stk_reverse(head) {
    let tmpStk = [];
    let mainnode = new linklist();
    let cur = head;
    while (cur) {
        tmpStk.push(cur.data);
        cur = cur.next;
    }
    let len = tmpStk.length;
    for (let i = 0; i < len; i++) {
        let se = tmpStk.pop();
        push(mainnode, se)
    }
    head = mainnode;
    console.log(head)
    return head;
}

function It_reverse(head){
    let cur = head;
    let prev = null;
    let temp;
    while(cur !== null){
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    console.log(cur)
    return prev;
}
function Rc_reverse(head){
    let cur = head;
    if(cur.next === null) return cur;
    let newnode = Rc_reverse(cur.next);
    cur.next.next = head;
    cur.next = null;
    console.log('aa',cur)
    return newnode;
}
function hmmm(head) {
    let cur = head;
    let stk = [],
        ggo = [];
    while (cur) {
        stk.push(cur.data)
        cur = cur.next;
    }
    let t = [],
        arrmap = [];
    for (let i = 0; i < stk.length; i++) {
        if (stk[i] % 2 === 0) {
            arrmap.push(`even`);
            ggo.push(stk[i])
        } else {
            arrmap.push(stk[i]);
            while (ggo.length != 0) {
                t.push(ggo[ggo.length - 1]);
                ggo.pop()
            }
        }
    }
    console.log('ggo odd len',ggo.length)

    // find the last even pair or element;
    while (ggo.length != 0) {
        t.push(ggo[ggo.length - 1]);
        ggo.pop()
    }
    let i = 0,
        x = 0;
    while (i < arrmap.length) {
        if (arrmap[i] === 'even') {
            arrmap[i] = t[x]
            x++
        }
        i++
    }
    let newList = new linklist();
    for(let k = arrmap.length - 1;k>=0;k--){
        newList.insertfront(arrmap[k])
    }
    head = newList
    return head
}

let testlink = new linklist();
testlink.insertfront(4) //last
testlink.insertfront(9)
testlink.insertfront(8)
testlink.insertfront(8)
testlink.insertfront(12)
testlink.insertfront(3)
testlink.insertfront(2)
testlink.insertfront(10) //first

console.log('original list')
testlink.printList()
console.log('after-reverse')
// RevEven(testlink.head)
console.log(testlink.head)
let reversedeven = hmmm(testlink.head);
console.log('####')
console.log(reversedeven.printList())
let ahha = Rc_reverse(testlink.head)
console.log(ahha)