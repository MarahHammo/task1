let modal = document.getElementById("modal");
let addUserBtn = document.getElementById("addUserBtn");
let closeModal = document.getElementById("closeModal");
let saveUser = document.getElementById("saveUser");
let usernameInput = document.getElementById("usernameInput");
let userTableBody = document.getElementById("userTableBody");

// show modal
addUserBtn.onclick = () => {
    modal.style.display = "flex";
};

// hide modal
closeModal.onclick = () => {
    modal.style.display = "none";
};

// hide modal if clicked outside
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// Add user to table
saveUser.onclick = () => {
    let name = usernameInput.value.trim();

    if (name !== "") {
        let rowCount = userTableBody.rows.length + 1;

        let newRow = `
            <tr>
                <td>${rowCount}</td>
                <td>${name}</td>
            </tr>
        `;

        userTableBody.innerHTML += newRow;
        usernameInput.value = "";
        modal.style.display = "none";
    }
};