function binarySearch(searchList, target) {
  let arrayPath = [];
  let halfArr = [];
  let midIdx = Math.floor(searchList.length / 2) - 1;
  let value = searchList[midIdx];

  // check if searchList contains target
  if(searchList.includes(target)) {
    // create a half array based on comparison between target and middle value
    if (target > value) {
        halfArr = halfArr.concat(searchList.splice(midIdx + 1));
    } else if (target < value) {
        halfArr = halfArr.concat(searchList.splice(0, midIdx + 1));
    }

    // call this function if half array has more than one elements
    if(halfArr.length > 1) { 
      let returned = binarySearch(halfArr, target);
      arrayPath.push(value);
      arrayPath = arrayPath.concat(returned);
    } else {
      arrayPath.push(value);
    }

  } else {
    arrayPath = "Value Not Found";
  }

  // console.log(arrayPath);
  return arrayPath;
}

// binarySearch([
//   0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 49, 70
// ], 6)