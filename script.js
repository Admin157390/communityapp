function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

const driveLinks = {
  Hindi: "https://drive.google.com/file/d/1SgoowI1bGn1Oe3UEikVITrIzSqbjVVdA/view",
  Marathi: "https://example.com/marathi",
  Maths: "https://example.com/maths",
  English: "https://drive.google.com/file/d/1TqnuP1pjhtpW0hplGjT-N4ZH4ebxsTyb/view",
  Physics: "https://drive.google.com/file/d/1TgQXQe3Mn0AiUl11qxCYX3LL-5NKwJRX/view",
  Chemistry: "https://example.com/chemistry",
  Biology: "https://drive.google.com/file/d/1TYmGx2JkHSDcWX5I71jYgwe7dhKcvwmV/view",
  History: "https://example.com/history",
  Economics: "https://drive.google.com/file/d/1TllLRwr5W7IID_3ynH5cTsAaKvvRKksJ/view",
  Civics: "https://example.com/civics",
  Geography: "https://example.com/geography",
  Computer: "https://drive.google.com/file/d/1U3Nzdss9ccl5iu5j3XdGiSLhnuV4hjEb/view",
  NCC: "https://drive.google.com/file/d/1apSsLdogcK-vFx2spkB9nbzxlBuRyWvg/view"
};

function openDrive(subject) {
  const link = driveLinks[subject];
  if (link) {
    window.open(link, "_blank");
  } else {
    alert("Link not available for " + subject);
  }
}