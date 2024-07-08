function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');

    if (!dob) {
        result.textContent = 'Please enter your date of birth.';
        result.className = 'error';
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    if (dobDate > today) {
        result.textContent = 'The date of birth cannot be in the future. Please re-enter your date of birth.';
        result.className = 'error';
        return;
    }

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
    result.className = 'result';
}
