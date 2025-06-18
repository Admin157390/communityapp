
const allowedUsers = ["Kartik", "Rohan", "Vedant", "Ansh", "Malhar", "Krishan", "Chinmay", "Siddharth", "Rudransh", "Pranav", "Mithilesh"];

function login() {
  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("loginMessage");
  if (allowedUsers.includes(username)) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    message.textContent = "";
  } else {
    message.textContent = "❌ Username is banned by admin.";
  }
}
function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("username").value = "";
}
function openSection(name) {
  document.querySelector(".options").classList.add("hidden");
  document.getElementById("contentSection").classList.remove("hidden");
  document.getElementById("sectionContent").innerHTML = "<p>Section: " + name + "</p>";
}
function goBack() {
  document.querySelector(".options").classList.remove("hidden");
  document.getElementById("contentSection").classList.add("hidden");
}
setInterval(() => {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}, 1000);
