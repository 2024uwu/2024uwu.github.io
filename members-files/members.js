let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".navbutton");

console.log(darkMode);
const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}
