// javascript freezer function
function stack(stacksize = 3) {
    let stackcount = 0;
    let stack = [];
    let full;

    function push(item) {
        stack[stackcount] = item;
        stackcount++;
        return stack;
    }

    function isEmpty() {
        return stackcount === 0;
    }

    function reverse() {
        let reverseArr = []
        for (let i = stackcount - 1; i >= 0; i--) {
            reverseArr.push(stack[i])
        }
        return reverseArr;
    }

    function view(item) {
        if (item) {
            let foundstack = [];
            for (let i = 0; i < stackcount; i++) {
                if (stack[i] === item) {
                    foundstack.push(i);
                }
            }
            return foundstack;
        } else {
            return stack;
        }
    }

    function pop() {
        if (stackcount === 0) {
            return undefined;
        }
        stackcount--;
        var result = stack[stackcount];
        delete stack[stackcount];
        return result;
    }

    return Object.freeze({
        push,
        view,
        reverse,
        pop
    });

}
let mystack = new stack();
mystack.push('1')
mystack.push('2')
mystack.push('3')
mystack.push('4')
mystack.push('5')
console.log(mystack.pop())
console.log(`location(indexes) of duplicate : ${mystack.view()}`)
let arraya = new Array(3)
//  console.log(mergesort(ax))

function MergeSort(param) {
    if (param.length < 2) return param;
    let mid = Math.floor(param.length / 2);
    let left = param.slice(0, mid);
    let right = param.slice(mid);
    return Merge(MergeSort(left), MergeSort(right))
}

function Merge(left, right) {
    let unsorted = [];
    let leftindex = 0;
    rightindex = 0;
    while (leftindex < left.length && rightindex < right.length) {
        if (left[leftindex] < right[rightindex]) {
            unsorted.push(left[leftindex++])
        } else {
            unsorted.push(right[rightindex++])
        }
    }
    while(leftindex < left.length){
        unsorted.push(left[leftindex++])
    }
    while(rightindex < right.length){
        unsorted.push(right[rightindex++])
    }
    let result = unsorted.concat(left.slice(leftindex)).concat(right.slice(rightindex))
    return result;
}

let l = [2, 3, 1, 3];
let r = [-1, 3, 4, 5];
let ax = [4, 3, 3, 4, 1, 2, 11];

function genNum(seed) {
    let random, factor
    let aunu = []
    for (let i = 0; i < seed; i++) {
        factor = (Math.random() * seed) / (Math.log(seed - i))
        random = factor * i + seed - i ^ i
        aunu.push(random)
    }
    return aunu;
}
let testArr = genNum(4000000)
function sorter(param){
    return param.sort((a,b) => a-b)
}
function gettime(func,param) {
    console.time('function processing time')
    func(param)
    console.timeEnd('function processing time')
}

gettime(MergeSort,testArr);
gettime(sorter,testArr)
console.log(sorter(testArr))