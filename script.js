// Trigger animation
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  box.classList.add('bounce');

  // Stop animation after 3 seconds
  setTimeout(() => {
    box.classList.remove('bounce');
  }, 3000);
});

// Save data to localStorage
const dataForm = document.getElementById('dataForm');
const usernameInput = document.getElementById('username');
const output = document.getElementById('output');

// Display saved name on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('username');
  if (savedName) {
    output.textContent = `Welcome back, ${savedName}!`;
  }
});

// Form submission
dataForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = usernameInput.value.trim();
  if (name) {
    localStorage.setItem('username', name);
    output.textContent = `Saved! Welcome, ${name}.`;
    usernameInput.value = '';
  }
});
