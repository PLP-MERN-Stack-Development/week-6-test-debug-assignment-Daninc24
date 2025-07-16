// Utility functions for server
function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = { formatDate, validateEmail }; 