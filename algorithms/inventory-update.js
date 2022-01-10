function updateInventory(arr1, arr2) {
    let curItems = {};
    let newItems = {};
    let curInv = [];

    // convert arrays to objects
    arr1.forEach((value) => curItems[value[1]] = value[0]);
    arr2.forEach((value) => newItems[value[1]] = value[0]);

    // update value or add item in the current items object
    for(let item in newItems) curItems[item] = newItems[item] + (curItems[item] ? curItems[item] : 0);

    // populate current inventory array with curItems object's attrs
    for(let item in curItems) curInv.push([curItems[item], item]);

    // sort array based on item name
    curInv.sort((a,b) => {
        if(a[1] > b[1]) return 1;
        else return -1;
    })

    return curInv;
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
