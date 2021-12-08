const updateInventory = (arr1, arr2) => {
    // Loop throw the current inventory 
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        console.log(element);
        
    }
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

updateInventory(curInv, newInv);