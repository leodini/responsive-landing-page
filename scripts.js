//function expression to select elements

const selectElement = (el) => document.querySelector(el);

//open menu on click

selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//close menu
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
