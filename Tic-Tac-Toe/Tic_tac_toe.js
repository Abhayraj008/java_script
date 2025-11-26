const element = document.getElementById("container");
const arr =
    [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const winning = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];

var val = "X";  // X = left user, 0 = right user

const para = document.getElementById("para");

// Get user images
const leftUser = document.querySelector(".left img");
const rightUser = document.querySelector(".right img");

// Get all boxes
const boxes = document.querySelectorAll(".box");


// ⭐ Update active user image
function updateUser() {
    if (val === "X") {
        leftUser.classList.add("activeUser");
        rightUser.classList.remove("activeUser");
    } 
    else {
        rightUser.classList.add("activeUser");
        leftUser.classList.remove("activeUser");
    }
}
updateUser(); // Initially X ki baari


// ⭐ Winner check function
function checkresult() {
    for (let [index0, index1, index2] of arr) {
        if (winning[index0] != 'E' && winning[index0] == winning[index1] && winning[index1] == winning[index2]) {
            return 1;
        }
    }
    return 0;
}


// ⭐ Box Hover Logic
boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        if (winning[box.id] === "E") {
            if (val === "X") box.classList.add("user1Hover");
            else box.classList.add("user2Hover");
        }
    });

    box.addEventListener("mouseleave", () => {
        box.classList.remove("user1Hover");
        box.classList.remove("user2Hover");
    });
});


// ⭐ Box Click Logic
element.addEventListener('click', (event) => {
    event.preventDefault();
    const id = Number(event.target.id);
    if (isNaN(id)) return;

    const cell = document.getElementById(id);

    if (winning[id] === "E") {

        // Set value
        cell.textContent = val;
        winning[id] = val;

        // Check winner
        const rs = checkresult();
        if (rs === 1) {
            para.textContent = `Winner is ${val}`;
            return;
        }

        // Switch Player
        val = (val === "X") ? "0" : "X";

        // Update highlight
        updateUser();
    }
});


const btn = document.getElementById("btn");

const resetBtn = document.getElementById("btn");

resetBtn.addEventListener("click", () => {

    // 1. Empty all boxes
    boxes.forEach(box => {
        box.textContent = "";
        box.classList.remove("user1Hover");
        box.classList.remove("user2Hover");
    });

    // 2. Reset winning array
    for (let i = 0; i < 9; i++) {
        winning[i] = "E";
    }

    // 3. Reset turn to X
    val = "X";

    // 4. Clear winner text
    para.textContent = "";

    // 5. Update user highlight
    updateUser();
});
