function validateField(fieldId) {
  const value = document.getElementById(fieldId).value.trim();
  let errorMessage = '';

  switch (fieldId) {
    case 'fullName':
      if (value.length < 5) {
        errorMessage = 'Name must be at least 5 characters long.';
      }
      break;

    case 'email':
      if (!value.includes('@') || value.indexOf('@') === 0 || value.indexOf('@') === value.length - 1) {
        errorMessage = 'Enter a valid email address.';
      }
      break;

    case 'phone':
      if (value === '1234567890' || value.length !== 10 || isNaN(value)) {
        errorMessage = 'Enter a valid 10-digit phone number.';
      }
      break;

    case 'password':
      if (value.length < 8 || value.toLowerCase() === 'password' || value === document.getElementById('fullName').value) {
        errorMessage = 'Password must be at least 8 characters long, not be "password", and not be the same as your name.';
      }
      break;

    case 'confirmPassword':
      if (value !== document.getElementById('password').value) {
        errorMessage = 'Passwords do not match.';
      }
      break;
  }

  document.getElementById(fieldId + 'Error').textContent = errorMessage;

  // Apply border color based on validation
  document.getElementById(fieldId).style.borderColor = errorMessage ? '#e74c3c' : '#ddd';
}

function validateForm() {
  let isValid = true;
  const requiredFields = ['fullName', 'email', 'phone', 'password', 'confirmPassword'];

  for (let field of requiredFields) {
    validateField(field);
    if (document.getElementById(field + 'Error').textContent !== '') {
      isValid = false;
    }
  }

  return isValid;
}
