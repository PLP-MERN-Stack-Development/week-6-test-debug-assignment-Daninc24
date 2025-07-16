// Utility functions for client
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US');
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} 