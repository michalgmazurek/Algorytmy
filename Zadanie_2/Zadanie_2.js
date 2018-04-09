const findUnpairedArrayElements = (arr) => {
  console.log(arr, " - array");
  let pairs = [];
  let unpaired = [];
  arr.forEach(elem => {
    // console.log(pairs.indexOf(elem), " - pairs.indexOf(elem) - elem = " + elem)
    if (unpaired.indexOf(elem) < 0 && pairs.indexOf(elem) < 0) {
        unpaired.push(elem);
        // console.log("Bez pary - " + elem);
        // console.log(unpaired + " - unpaired")
    } else if (unpaired.indexOf(elem) > -1) {
      // console.log("elem to splice = " + elem + " And indexOf = " + pairs.indexOf(elem) )
      pairs.push(elem);
      unpaired.splice(unpaired.indexOf(elem), 1)
      // console.log(pairs + "pairs")
    }
  });
  console.log(unpaired + " - unpaired elements in array");
}

const array = [1,2,33,69,3,4,5,6,12,9999,22,2,3,4,5,6,2,1,2,12,999,33,22,5,4,2,999,999,999,999,1];

findUnpairedArrayElements(array);
