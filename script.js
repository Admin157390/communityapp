function showSection(id) {  
  // Hide all sections
  const sections = document.querySelectorAll('section');  
  sections.forEach(sec => sec.classList.remove('active'));  

  // Show the selected section
  document.getElementById(id).classList.add('active');  

  // Close sidebar after selecting
  closeSidebar();  
}  

function openSidebar() {  
  document.getElementById("sidebar").style.width = "250px";  
}  

function closeSidebar() {  
  document.getElementById("sidebar").style.width = "0";  
}
