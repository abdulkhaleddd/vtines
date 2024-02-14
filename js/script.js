const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");

const moveNoButton = () => {
  var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.transition = "transform 0.4s ease";
  noButton.style.transform = `translate(${x}px, ${y}px) rotate(360deg)`;

  var x = Math.random() * 10;
  var y = Math.random() * 10;

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
};

yesButton.addEventListener("click", () => {
  window.location.assign("yes.html");
});

noButton.addEventListener("click", moveNoButton);
noButton.addEventListener("mouseenter", moveNoButton);
