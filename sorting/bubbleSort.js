function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped)
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);
// console.log(bubbleSort([-6, 20, 8, -2, 4]));
// console.log(bubbleSort([-20, 2, 1, 30, 5, 7, 9]));
// console.log(bubbleSort([4, 3, 2, 1]));
