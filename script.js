const searchInput = document.querySelector(".menu input");
const menuItems = document.querySelectorAll(".menu li");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  menuItems.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(value) ? "" : "none";
  });
});

