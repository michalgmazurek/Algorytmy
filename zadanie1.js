const findLongestIntegerGap = (number) => {
  const binary = number.toString(2);
  console.log('--------------------------------');
  console.log(binary, ' => Binary representation of : ' + number);
  console.log('--------------------------------');

  let longestGap = 0;
  let currentGap = 0;

  for (let i = 0; i < binary.length; i++) {
    // console.log(i + ' i')
    // console.log(binary[i] + ' binary[i]')
    // console.log(longestGap + 'longestGap');
    // console.log(currentGap + 'currentGap');
    
    if (binary[i] === '0') {
      currentGap++;
    } else if (binary[i] === '1') {
      if (currentGap > longestGap) {
        longestGap = currentGap;
      }
      currentGap = 0;
    }
  }
  console.log(longestGap + ' => The longest gap');
}

findLongestIntegerGap(9132);
