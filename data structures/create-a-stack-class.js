function Stack() {
  var collection = [1,2,4];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  this.push = (item) => {
    collection.push(item);
  }

  this.pop = (item) => {
    return collection.pop(item);
  }

  this.peek = () => {
    return collection[collection.length - 1];
  }

  this.isEmpty = () => {
    return !collection.length ? 'true': 'false';
  }

  this.clear = () => {
    collection = [];
  }
  // Only change code above this line
}

