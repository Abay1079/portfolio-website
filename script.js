// bom
// add for page on load
  window.onload = function() {
    console.log("Welcome to my portfolio site!");

// Automatically update the year
  document.getElementById("year").textContent = new Date().getFullYear();
    
// dom
// back to top
    function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
