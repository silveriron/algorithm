const selectSort = (arr) => {
    // 시작 포인터(s)와 움직이는 포인터(p)가 필요
    let s = 0;
    let m = 0;

    while (s < arr.length) {
        for (let i = s + 1; i < arr.length; i++) {
            if (arr[m] > arr[i]) {
                m = i
            }
        }
        let temp = arr[s];
        arr[s] = arr[m];
        arr[m] = temp;

        s++;
        m = s;
    }
    // 시작 포인터를 기준으로 움직이는 포인터가 하나씩 움직이면서 각 숫자를 확인
    // 작은 숫자의 인덱스(m)를 찾아내서 저장.
    // 배열의 끝까지 움직이는 포인터가 확인을 마치면, 시작 포인터의 값과 작은 숫자의 값을 바꿈
    // 시작 포인터를 하나 움직이고 움직이는 포인터는 시작 포인터를 기준으로 다시 반복
    return arr
}

selectSort([1,3,6,2,9,5, 10, 17, 12, 8])