function myFunction() {
  const x = document.getElementsByClassName("menu")[0];
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
