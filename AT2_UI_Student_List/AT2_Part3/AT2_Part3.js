let initStudentList = [
    {studentID: "St0001", firstName: "Tom", lastName: "Willow", qualification: "Certificate 4"},
    {studentID: "St0011", firstName: "Steven", lastName: "Kin", qualification: "Certificate 3"},
    {studentID: "St0008", firstName: "Kate", lastName: "Gorden", qualification: "Certificate 4"},
    {studentID: "St0002", firstName: "Alex", lastName: "Garden", qualification: "Certificate 3"},
    {studentID: "St0005", firstName: "George", lastName: "Green", qualification: "Certificate 3"},
    {studentID: "St0007", firstName: "Rose", lastName: "Tim", qualification: "Certificate 4"},
    {studentID: "St0004", firstName: "Monica", lastName: "Galler", qualification: "Certificate 4"},
    {studentID: "St0003", firstName: "Joy", lastName: "Adams", qualification: "Certificate 3"},
    {studentID: "St0009", firstName: "Rob", lastName: "Lewis", qualification: "Certificate 4"},
    {studentID: "St0010", firstName: "Harry", lastName: "Potter", qualification: "Certificate 3"}
];
var studentList = new StudentList("list", initStudentList);

function searchClick(){
    let formElements = document.getElementById("form-list-control").elements;
    let studentID = formElements["search-string"].value;
    studentList.search(studentID)
}

function refreshClick(){
    studentList.refresh()
}

function addClick(){
    let formElements = document.getElementById("form-add").elements;
    let studentID = formElements["student ID"].value;
    let firstName = formElements["first name"].value;
    let lastName = formElements["last name"].value;
    let qualification = formElements["qualification"].value;
    studentList.add(studentID, firstName, lastName, qualification);
}

