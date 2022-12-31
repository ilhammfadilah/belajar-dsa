function linearSearch(n) {
  const target = [-5, 2, 10, 4, 6];
  for(i = 0; i < target.length; i++) {
    if(target[i] === n) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(-5));
console.log(linearSearch(2));
console.log(linearSearch(10));
console.log(linearSearch(5));
