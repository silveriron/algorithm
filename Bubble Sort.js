const bubbleSort = (arr) => {
    let notSort
    for (let i = arr.length; i > 0; i--) {
        notSort = false
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                notSort = true
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }           
        }
        if (notSort) {
            return arr
        }
    }
    return arr
}

bubbleSort([1,5,3,5,3,2,4,7])

