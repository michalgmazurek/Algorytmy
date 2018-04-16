function solution(A) {
  let total = (A.length + 1) * (A.length + 2) / 2;
  for (let i = 0; i < A.length; i++) {
    total -= A[i];
  }
  return total;
}

console.log(solution([2,3,1,5]))
