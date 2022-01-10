class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // Only change code below this line
  union(secondSet) {
    // get values from second set
    let values = Object.values(secondSet['dictionary']);
    // create new Set instance
    let newSet = new Set();
    // initialize the new Set instance
    this.values().forEach((element) => newSet.add(element));
    values.forEach((element) => {
      if(!newSet.has(element)) newSet.add(element);
    });
    
    return newSet;
  }
  // Only change code above this line
}