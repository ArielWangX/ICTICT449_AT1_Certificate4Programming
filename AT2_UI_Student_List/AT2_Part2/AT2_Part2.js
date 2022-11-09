// Define student class
class Student {
    constructor(studentID, firstName, lastName, qualification) {
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification;
    }
}


// Create an array of 10 students with mock values
let studentList = [
    new Student ("St0001", "Tom", "Willow", "Certificate 4"),
    new Student ("St0011", "Steven", "Kin", "Certificate 3"),
    new Student ("St0008", "Kate", "Gorden", "Certificate 4"),
    new Student ("St0002", "Alex", "Garden", "Certificate 3"),
    new Student ("St0005", "George", "Green", "Certificate 3"),
    new Student ("St0007", "Rose", "Tim", "Certificate 4"),
    new Student ("St0004", "Monica", "Galler", "Certificate 4"),
    new Student ("St0003", "Joy", "Adams", "Certificate 3"),
    new Student ("St0009", "Rob", "Lewis", "Certificate 4"),
    new Student ("St0010", "Harry", "Potter", "Certificate 3"),
]
console.log(studentList);


// Sort array by Student ID in ascending order
studentList.sort((a,b) => {
    return a.studentID.slice(2) - b.studentID.slice(2);
});
console.log(studentList);
// Display the sorted studentList on webpages
function displayStudentList()
{
    let str = "";
    for(let i = 0, len = studentList.length; i < len; i++) 
        str += i + ": " + JSON.stringify(studentList[i]) + "<br />";
    document.getElementById("ascendingSortedArray").innerHTML = str;
}


// Implement sequential search algorithm
function sequentialSearch(array, targetValue)
{
    // init the index to a invalid value
    let str = "The student object not found.";
    for(let i = 0; i < array.length; i++){
        // for each item in array, compare the value with the targetValue
        if(array[i].studentID.localeCompare(targetValue) == 0){
            str = i + ": " + JSON.stringify(studentList[i]) + "<br />";
            break;
        }
    }
    // return the str
    // str return "The student object not found." : not found
    // str return student object found : found
    return str;
}


// Call function sequentialSearch(array, targetValue)
function callSequentialSearch()
{
    // get the studentID I am looking for
    var studentID = document.getElementById("targetValueSequentialSearch").value;
    studentID = studentID.toString();
    // Creat a variable to store the return value
    var strResult = sequentialSearch(studentList, studentID);

    // Show sequential search result
    document.getElementById("sequentialSearchResult").innerHTML = strResult;
}