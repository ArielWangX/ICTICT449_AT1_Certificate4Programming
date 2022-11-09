class StudentList {
    constructor(rootId, students) {
        this.rootId = rootId;
        this.studentList = students;
        this.refresh();
    }

    // generate one row
    studentString(studentID, firstName, lastName, qualification) {
        return `<div class="row">${studentID} -- ${firstName} ${lastName} -- ${qualification} </div>`;
    }

    // generate all rows
    studentListString(students) {
        let html = ``;
        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            html += this.studentString(student.studentID, student.firstName, student.lastName, student.qualification);
        }
        return html;
    }

    // search by student ID string
    search(studentID) {
        let shortList = [];
        for (let student of this.studentList) {
            if (student.studentID.includes(studentID)) {
                shortList.push(student);
            }
        }

        // refresh the list with the short list
        // if found, the list of student information will be displayed.
        let elementString = this.studentListString(shortList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;

        // if not found, “0 result” information will be displayed
        if (shortList.length === 0) {            
            document.getElementById("no-result").innerHTML = "0 result"; 
        }        
    }

    // refresh the whold list in HTML
    refresh() {
        let elementString = this.studentListString(this.studentList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
        
        // if list view is diplayed "0 result", clear it
        document.getElementById("no-result").innerHTML = "";

        // clear input field on refresh button click
        document.getElementById("searchInput").value = "";         
    }

    // add one to the end of the list
    add(studentID, firstName, lastName, qualification) {
        // add a new item to the end
        this.studentList.push(
            { studentID: studentID, firstName: firstName, lastName: lastName, qualification: qualification }
        );
        // refresh the view
        this.refresh();
        // clear input fields on submit button click
        document.getElementById("studentID").value = "";  
        document.getElementById("firstName").value = "";  
        document.getElementById("lastName").value = "";  
        document.getElementById("qualification").value = "";  
    }

}