
function sym(args) {
  let unique = [];

  // loop through arguments
  for(let i = 0; i < arguments.length; i++){
    // remove duplicate items 
    let currentArray = arguments[i].filter(onlyUnique);
    
    // loop through array
    for(let j = 0;j < currentArray.length; j++) {
      if(!unique.includes(currentArray[j])) {
        // add item into array if item does not match any array item
        unique.push(currentArray[j]);
      } else {
        // else, remove item from array
        let index = unique.indexOf(currentArray[j]);
        unique.splice(index, 1);
      }
    }
  }

  // returns a sorted array
  return unique.sort();
}

// returns true if no duplicates in array
function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

sym([1, 2, 3, 3], [5, 2, 1, 4])