function quickSort(arr) {
  // base case recurtion
  if (arr.length < 2) {
    return arr;
  }

  // inisialiasi variable
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  //pisahkan array
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recurtion
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr));
quickSort(arr);
console.log(arr);
