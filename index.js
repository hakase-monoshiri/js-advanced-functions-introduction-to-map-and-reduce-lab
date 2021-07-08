// Your code here
function mapToNegativize(sourceArray) {
    let newArray = [];

    for (const e of sourceArray) {
     newArray.push(0 - e) 
 }
 return newArray
};

function mapToNoChange(sourceArray) {
    let newArray = [];

    for (const e of sourceArray) {
     newArray.push(e) 
 }
 return newArray
};
function mapToDouble(sourceArray) {
    let newArray = [];

    for (const e of sourceArray) {
     newArray.push(2 * e) 
 }
 return newArray
};
function mapToSquare(sourceArray) {
    let newArray = [];

    for (const e of sourceArray) {
     newArray.push(e * e) 
 }
 return newArray
};
function reduceToTotal(sourceArray, startingPoint = 0) {
    let runningTotal = startingPoint
    for (const e of sourceArray) {
        runningTotal = runningTotal + e
    }
    return runningTotal
};
function reduceToAllTrue(sourceArray) {
    let test = true
    for (const e of sourceArray) {
        if (!e) {
            test = false
        }
    }
    return test
};
function reduceToAnyTrue(sourceArray) {
    let test = false
    for (const e of sourceArray) {
        if (e) {
            test = true
        }
    }
    return test
}; 