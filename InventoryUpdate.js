const updateInventory = (arr1, arr2) => {

    for(var i = 0; i< arr2.length; i++){
        //check to see if inventory currently exist in the curInv
        var inventoryExist = arr1.every(function(e){
            return arr2[i][1] != e[1]
        })
        if(inventoryExist){ // add if doesn't exist
            arr1.push(arr2[i]); 
        } else{
            // iterate where this item exist and finds the index of same item
            var indexVal = arr1.findIndex(function(e){
                return e[1] === arr2[i][1];
            })
            arr1[indexVal][0] += arr2[i][0];
        }
    }
    return arr1.sort(function(a,b){return a[1] <b[1] ? -1:1;});
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

console.log(updateInventory(curInv, newInv));