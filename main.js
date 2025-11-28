function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function orderNow(item) {
  alert("You ordered: " + item + " ☕");
}

function sendMessage(e) {
  e.preventDefault();
  alert("Your message has been sent! ❤️");
}
