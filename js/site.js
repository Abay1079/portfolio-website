function protectedOpen(path, expectedPassword) {
  var p = prompt('This project is password-protected. Enter password to continue:');
  if (p === null) return false; // user cancelled
  if (p === expectedPassword) {
    // Navigate to the file (encodeURI for paths with spaces)
    window.location.href = encodeURI(path);
  } else {
    alert('Incorrect password. Access denied.');
  }
  return false;
}

function viewResume() {
  if (confirm('View my resume?')) {
    window.location.href = 'resume.html';
  }
  return false;
}
