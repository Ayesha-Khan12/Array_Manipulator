let myarray = [];

function displayArray() {
    const para = document.getElementById('para');
    para.innerHTML = "";
    for (let i = 0; i < myarray.length; i++) {
        const element = document.createElement("div");
        element.className = 'box-item';
        element.textContent = myarray[i];
        para.appendChild(element);
    }
}

function addToArray() {
    const arrayInput = document.getElementById('input').value;
    if (arrayInput) {
        myarray.push(arrayInput);
        displayArray();
        document.getElementById('input').value = "";
    }
}

function pushToArray() {
    const value = prompt("Enter a value to push:");
    if (value) {
        myarray.push(value);
        displayArray();
        updateResult(`push() added "${value}" to the array.`);
    }
}

function popFromArray() {
    const removed = myarray.pop();
    displayArray();
    updateResult(removed ? `pop() removed "${removed}" from the last.` : "The array is empty, nothing to remove.");
}

function shiftFromArray() {
    const removed = myarray.shift();
    displayArray();
    updateResult(removed ? `shift() removed "${removed}" from the start.` : "The array is empty, nothing to remove.");
}

function unshiftToArray() {
    const value = prompt("Enter a value to unshift:");
    if (value) {
        myarray.unshift(value);
        displayArray();
        updateResult(`unshift() added "${value}" to the start of the array.`);
    }
}

function sliceArray() {
    const start = parseInt(prompt("Enter the start index for slice:"), 10);
    const end = parseInt(prompt("Enter the end index for slice:"), 10);
    const sliced = myarray.slice(start, end);
    updateResult(`slice(${start}, ${end}) result: [${sliced.join(", ")}]`);
}

function spliceArray() {
    const index = parseInt(prompt("Enter the index for splice:"), 10);
    const count = parseInt(prompt("Enter the number of elements to remove:"), 10);
    const value = prompt("Enter a value to add (leave empty if not adding):");
    const removed = value ? myarray.splice(index, count, value) : myarray.splice(index, count);
    displayArray();
    updateResult(`splice(${index}, ${count}) removed: [${removed.join(", ")}] and added "${value}".`);
}

function updateResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}
