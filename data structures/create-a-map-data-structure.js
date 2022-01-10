var Map = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => this.collection[key] = value;

  this.remove = (key) => delete this.collection[key];

  this.get = (key) => this.collection[key];

  this.has = (key) => Object.keys(this.collection).includes(key);

  this.values = () => Object.values(this.collection);

  this.size = () => Object.keys(this.collection).length;

  this.clear = () => this.collection = {};
  // Only change code above this line
};
