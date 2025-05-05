const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/flow-cat-oscar.png") {
    myImage.setAttribute("src", "images/flow-cat-oscar-mirrored.png");
  } else {
    myImage.setAttribute("src", "images/flow-cat-oscar.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello there, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello there, ${storedName}!`;
}
myButton.addEventListener("click", () => {
  setUserName();
});