function solution(A) {
  var unpaired = [];
  A.forEach(elem => {
    if (unpaired.indexOf(elem) < 0) {
      unpaired.push(elem);
    } else if (unpaired.indexOf(elem) > -1) {
      unpaired.splice(unpaired.indexOf(elem), 1);
    }
  });
  return unpaired[0];
}

console.log(solution([1,2,3,4,5,6,7,6,5,4,3,2,1]));
