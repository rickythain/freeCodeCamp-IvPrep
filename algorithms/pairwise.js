function pairwise(arr, arg) {
  let pairs = []

  // loop every element
  arr.forEach((element, index) => {
    // loop every element after the current element
    for(let i = index + 1; i < arr.length; i++) {
      // assign the index and value of two elements
      let pair = [{index: index, value: element}, {index:i, value:arr[i]}];
      
      if(pair[0]['value'] + pair[1]['value'] === arg) {
        let lastPairs = Object.values(pairs);
        pairs.push(pair);

        // remove pair if element of similar index has been taken
        lastPairs.forEach((e) => {
          if(e[0]['index'] === pair[0]['index']) pairs.pop();
          if(e[1]['index'] === pair[1]['index']) pairs.pop();
          if(e[1]['index'] === pair[0]['index']) pairs.pop();
        });
      }
    }
  });

  // get sum of indices
  let sumIndices = 0;
  pairs.forEach((element) => {
    element.forEach((value) => {
      sumIndices += value['index'];
    })
  })
  
  return sumIndices;
}

pairwise([1, 1, 1], 2)