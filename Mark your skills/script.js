let skillsContainer = document.getElementById("skillsContainer");
skillsContainer.classList.add("p-5");

let skillListContainer = document.getElementById("skillListContainer");

let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];


function onMarkSkill(labelID) {
    let labelElement = document.getElementById(labelID);
    labelElement.classList.toggle("selected");
}

function createAndAppendSkill(skill) {

    let checkboxId = "checkbox" + skill.uniqueNo;
    let labelID = "label" + skill.uniqueNo;

    let skillElement = document.createElement("li");
    skillElement.classList.add("p-1");
    skillListContainer.appendChild(skillElement);

    let checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.id = checkboxId;
    checkboxElement.onclick = function() {
        onMarkSkill(labelID);
    }
    skillElement.appendChild(checkboxElement);

    let labelElement = document.createElement("label");
    labelElement.textContent = skill.skillName;
    labelElement.classList.add("check-box-label");
    labelElement.setAttribute("for", checkboxId)
    labelElement.id = labelID;
    skillElement.appendChild(labelElement);

}

for (let skill of skillList) {
    createAndAppendSkill(skill)
}