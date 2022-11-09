//Build an unsorted array
var numberArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
document.getElementById("unsortedArray").innerHTML = numberArray;
console.log(numberArray);


// Sort the array in ascending order
numberArray.sort(function(a,b){return a-b});
document.getElementById("ascendingSortedArray").innerHTML = numberArray;
console.log(numberArray);


// Insert 19, 23, 30 into sorted array 
// Inser 19 ,23 at the end of the array
numberArray.push(19,23);
// Inser 30 at the begin of the array
numberArray.unshift(30);
document.getElementById("insertIntoArray").innerHTML = numberArray;
// keep the new array sorted in ascending order
numberArray.sort(function(a,b){return a-b});
document.getElementById("ascendingSortedArrayAfterInsert").innerHTML = numberArray;
console.log(numberArray);


// Remove 8, 31 from the array
numberArray.splice(2,1);
numberArray.splice(10,1);
document.getElementById("removeFromArray").innerHTML = numberArray;
console.log(numberArray);


// Implement the array sequential search algorithm
function sequentialSearch(array, targetValue)
{
    // init the index to a invalid value
    let index = -1;
    for(let i = 0; i < array.length; i++){
        // for each item in array, compare the value with the targetValue
        if(array[i] == targetValue){
            index = i;
            break;
        }
    }
    // return the index
    // index == -1: not found
    // index >= 0: found
    return index;
}


// Call function sequentialSearch(array, targetValue)
function callSequentialSearch()
{
    // get the value I am looking for
    var targetValue = document.getElementById("targetValueSequentialSearch").value;
    targetValue = parseFloat(targetValue);
    // Creat a variable to store the return value
    var indexResult = sequentialSearch(numberArray, targetValue);

    // Show sequential search result
    document.getElementById("sequentialSearchResult").innerHTML = indexResult;
}


// Implement the array binary search algorithm
function binarySearch(array, targetValue)
{
    // init the index to a invalid value
    let index = -1;

    // init the start and end points
    let start = 0; 
    let end = array.length - 1;

    // iterate while start not meets end
    while(start <= end) {
        // find the mid index
        let mid = Math.floor((start + end) / 2);
        // if element is present at mid, return True
        if(array[mid] == targetValue) {
            index = mid;
            break;
        } else if(array[mid] < targetValue) {
            // else look in left or right half accodingly
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    // return the index
    // index == -1: not found
    // index >= 0: found
    return index;
}


// Call function binarySearch(array, targetValue)
function callBinarySearch()
{
    // get the value I am looking for
    var targetValue = document.getElementById("targetValueBinarySearch").value;
    targetValue = parseFloat(targetValue);

    // Creat a variable to store the return value
    var indexResult = binarySearch(numberArray, targetValue);

    // Show sequential search result
    document.getElementById("binarySearchResult").innerHTML = indexResult;
}