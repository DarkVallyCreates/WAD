let students = [];
let exams = 0;
let results = 0;

function showSection(section) {
    document.querySelectorAll(".section").forEach(s => s.classList.add("d-none"));

    document.getElementById(section + "Section").classList.remove("d-none");
}

function updateDashboard() {
    document.getElementById("students").innerText = students.length;
    document.getElementById("exams").innerText = exams;
    document.getElementById("results").innerText = results;

    document.getElementById("examCount").innerText = exams;
    document.getElementById("resultCount").innerText = results;

    let passCount = students.filter(s => s.result === "pass").length;
    let percent = students.length ? Math.round((passCount / students.length) * 100) : 0;
    document.getElementById("pass").innerText = percent + "%";
}

function addStudent() {
    let name = document.getElementById("studentName").value;
    let result = document.getElementById("studentResult").value;

    if (!name) return alert("Enter name");

    students.push({ name, result });

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = name + " - " + result;

    document.getElementById("studentList").appendChild(li);

    document.getElementById("studentName").value = "";

    updateDashboard();
}

function addExam() {
    exams++;
    updateDashboard();
}

function publishResult() {
    results++;
    updateDashboard();
}

updateDashboard();