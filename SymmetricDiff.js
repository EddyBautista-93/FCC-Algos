// create a function that handles two arrays and checks if symmetric 
const symOfTwo = (arr1, arr2) => {
    const output = [];
    for(const element of arr1){
        if(!output.includes(element) && !arr2.includes(element)){
            output.push(element);
        }
    }
    for(const element of arr2){
      if(!output.includes(element) && !arr1.includes(element)){
          output.push(element);
      }
  }
    return output;
}

const sym = (args) => {

    // arguments is an Array -like object accessible inside function that contain
    // the value of the arguments passed to the function.
    const arrOfArrs = [...arguments]
    let output = arrOfArrs[0];
    for (let i = 1; i < arrOfArrs.length; i++) {
        output = symOfTwo(output, arrOfArrs[i]); 
    }
    return output.sort((a,b) => a - b);
  }



console.log(sym([1,2,3], [5,2,1,4]));
// console.log(symOfTwo([1,2,3], [5,2,1,4]));