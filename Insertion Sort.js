const insertSort = (arr) => {
    let j
    for (let i = 1; i < arr.length; i++) {
       let val = arr[i]
        for (j = i -1; j >= 0 && arr[j] > val; j--) {
            arr[j+1] = arr[j];            
        }
        arr[j+1] = val;
    }
    return arr;
}

insertSort([1,8,3,6,0,5])