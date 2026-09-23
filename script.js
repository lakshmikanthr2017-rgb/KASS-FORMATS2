// Function to dynamically add dynamic family rows
function addFamilyRow() {
    const table = document.getElementById("familyTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="text" placeholder="Relation / ಸಂಬಂಧ"></td>
        <td><input type="text" placeholder="Name / ಹೆಸರು"></td>
        <td><input type="date"></td>
        <td><input type="text" placeholder="Aadhaar No"></td>
        <td><input type="text" placeholder="Income / ಆದಾಯ"></td>
        <td class="no-print"><button type="button" onclick="deleteRow(this)" class="btn-del">X</button></td>
    `;
}

// Function to delete family rows
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Full Editable KASS Application Loaded for LAKSHMIKANTH R");
});
