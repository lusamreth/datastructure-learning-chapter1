// actually not work : 

/* parameters: 
 * use index start form 0;
    arr:array
    p:initial
    q:middle
    r:last
*/
function Merge(arr, p, q, r) {
    let n1 = q - p + 1;
    let n2 = r - q;
    let left = [],
        right = [],
        sorted = []
    for (let i = 0; i < n1; i++) {
        left[i] = arr[p + i]
    }
    for (let j = 0; j < n2; j++) {
        right[j] = arr[q + j + 1]
    }
    left[n1] = Infinity;
    right[n2] = Infinity
    let i = j = k = 0;
    // comparing
    for (k = p; k < r + 1 && i < n1 && j < n2; k++) {
        if (left[i] <= right[j]) {
            sorted[k] = left[i];
            i++
        } else {
            sorted[k] = right[j];
            j++
        }
    }
    while (i < n1)
        {arr[k++] = left[i++];}
    while (j < n2)
        {arr[k++] = right[j++];}
    return sorted;
}

function MergeSort(arr, p, r) {
    let sorted = [];
    if(p < r) {
        let m = Math.floor((p + r) / 2);
        console.log(MergeSort(arr, p, m))

        MergeSort(arr, p, m);
        MergeSort(arr, m + 1, r);
        sorted = Merge(arr,p,m,r)
    };
    // return sorted
}

let len5 = [1, 2, 1, -1, 2]
let len10 = [1, 2, -5, 7, 12, -2, 4, 6, 8];
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

MergeSort(unsortedArr, 0, unsortedArr.length - 1)
console.log()