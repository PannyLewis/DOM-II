// Your code goes here

// MOUSEOVER AND MOUSELEAVE
const changeImg = document.querySelector(".intro img");
changeImg.addEventListener("mouseover", (e) => {
  changeImg.src = "img/vengabus.jpg";
});
changeImg.addEventListener("mouseleave", (e) => {
  changeImg.src = "img/fun-bus.jpg";
});

// KEYDOWN
const errorMessage = document.querySelector("body");
// console.log(errorMessage);
errorMessage.addEventListener("keydown", () => {
  alert("YOU HAVE PRESSED AN INCORRECT KEY!");
});

// ZOOM
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);
  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector(".img-content");
el.onwheel = zoom;
el.addEventListener("wheel", zoom);
// to return the image back to the intial scale, add a mouse leave

// RESIZE
const newImgWhenResized = document.querySelector(".content-destination img");
// see link in slack from Josiah Roa to learn how to find width and height to use logic to return the image when resized.
window.addEventListener("resize", () => {
  newImgWhenResized.src =
    "https://img.gta5-mods.com/q95/images/yellow-jack-party-bus/ee0c79-NEW%20Edit%20on%20Wasted%20text.png";
});

// SCROLL
const changeColorWhenScroll = document.querySelector("body");
// console.log(changeColorWhenScroll);
window.addEventListener("scroll", () => {
  changeColorWhenScroll.style.backgroundColor = "#e6ffff";
});

// FOCUS
const focusInput = document.querySelectorAll("input");
focusInput.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.style.backgroundColor = "pink";
  });
});

// DOUBLECLICK
const doubleClickingParagraph = document.querySelectorAll("p");
console.log(doubleClickingParagraph);
doubleClickingParagraph.forEach((paragraph) => {
  paragraph.addEventListener("dblclick", (e) => {
    paragraph.style.color = "red";
  });
});

// SELECT
// const selectText = document.querySelector("textArea");
// selectText.addEventListener("select", (e) => {
//   e.target.style.color = "red";
// });

// LOAD
window.addEventListener("load", (event) => {
  alert("page is fully loaded");
});

//PREVENT DEFAULT
const stopTheLink = document.querySelectorAll("a");
stopTheLink.forEach((anchors) => {
  anchors.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// CLICK
// const body = document.querySelector("body");
// body.addEventListener("click", (event) => {
//  do something esle like change color );
// });

// const contentSection = document.querySelector(".container");
// contentSection.addEventListener("click", (event) => {
//   alert("Clicked on contents!");
//   event.stopPropagation();
// });

const contentText = document.querySelector(".text-content");
contentText.addEventListener("click", (event) => {
  alert("Clicked on paragraph!");
  event.stopPropagation();
});

gsap.to(".logo-heading", { duration: 1, x: 100 });
gsap.from("img", { duration: 3, x: 300, opacity: 0, scale: 0.5 });
gsap.to(".btn", { duration: 3, rotation: 360, scale: 0.5 });
