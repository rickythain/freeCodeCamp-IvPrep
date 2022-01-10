function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = (item) => {
    this.collection.push(item);
    this.collection.sort((x, y) => {
      return x[1] - y[1];
    })
  }

  this.dequeue = () => this.collection.shift()[0];

  this.size = () => this.collection.length;

  this.front = () => this.collection[0][0];

  this.isEmpty = () => (this.collection.length) ? false : true;
  // Only change code above this line
}
