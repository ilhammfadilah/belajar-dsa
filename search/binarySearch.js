function binarySearch(n) {
  const target = [-5, 2, 4, 6, 10];
  const middle = Math.floor(target.length / 2);
  
  if(target[middle] === n) {
    return n;
  }

  if(n < target[middle]) {
    for(let i = middle; i >= 0; i--) {
      if(target[i] === n) {
        return i;
      }
    }
  }

  if(n > target[middle]) {
    for(let i = middle; i < target.length; i++) {
      if(target[i] === n) {
        return i;
      }
    }
  }

  return -1;
}

console.log(binarySearch(-5));
console.log(binarySearch(2));
console.log(binarySearch(10));
console.log(binarySearch(20));
