function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = (item) => collection.push(item);

  this.dequeue = () => collection.shift();

  this.front = () => collection[0];

  this.size = () => collection.length;
  
  this.isEmpty = () => (collection.length) ? false : true;
  // Only change code above this line
}