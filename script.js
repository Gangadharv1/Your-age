document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const age = parseInt(document.getElementById('age').value);
    const result = document.getElementById('result');

    if (age < 0 || isNaN(age)) {
        result.textContent = "Please enter a valid age.";
        result.style.color = "red";
    } else if (age <= 12) {
        result.textContent = "You are a child.";
        result.style.color = "blue";
    } else if (age <= 19) {
        result.textContent = "You are a teenager.";
        result.style.color = "orange";
    } else if (age <= 64) {
        result.textContent = "You are an adult.";
        result.style.color = "green";
    } else {
        result.textContent = "You are a senior.";
        result.style.color = "purple";
    }
});

// Reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('age').value = '';
    document.getElementById('result').textContent = '';
});