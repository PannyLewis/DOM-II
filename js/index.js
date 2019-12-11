// Your code goes here


const changeImg = document.querySelector(".intro img");
changeImg.addEventListener("mouseover", (e) => {
    changeImg.src="http://quiltingonthebeach.com/wp-content/uploads/2018/08/Quilt-show.png";
})
changeImg.addEventListener("mouseleave", (e) => {
    changeImg.src="img/fun-bus.jpg";
})

const errorMessage = document.querySelector("body");
// console.log(errorMessage);
errorMessage.addEventListener("keydown", () => {
    // setInterval(() => {
    //     errorMessage.style.background = "red";        
        
    // }, 1000);

    // setInterval(() => {
    //     errorMessage.style.background = "white";        
        
    // }, 1500);
    //     errorMessage.style.background = "red";     
    // setTimeout(() => {
    //     errorMessage.style.background = "white";
    // }, 1000);
    alert("YOU HAVE PRESSED AN INCORRECT KEY!");

})


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }

let scale = 1;
const el = document.querySelector(".img-content");
el.onwheel = zoom;
el.addEventListener('wheel', zoom);


const newImgWhenResized = document.querySelector(".content-destination img");
window.addEventListener("resize", () => {
    newImgWhenResized.src="https://img.gta5-mods.com/q95/images/yellow-jack-party-bus/ee0c79-NEW%20Edit%20on%20Wasted%20text.png";
})


const changeColorWhenScroll = document.querySelector("body");
// console.log(changeColorWhenScroll);
window.addEventListener("scroll", () => {
    changeColorWhenScroll.style.backgroundColor = 'green';
})



const focusInput = document.querySelectorAll("input");
    focusInput.forEach( (input) => {
        input.addEventListener("focus", (e) => {
        e.target.style.backgroundColor = "pink";
    })

})


const doubleClickingParagraph = document.querySelectorAll("p");
// console.log(doubleClickingParagraph);
doubleClickingParagraph.forEach( (paragraph) => {
    paragraph.addEventListener("dblclick", (e) => {
        e.target.style.color = "red";
    })
    
})

const selectText = document.querySelector("textarea");

        selectText.addEventListener("select", (e) => {
            e.target.style.color = "red";
        })


    window.addEventListener('load', (event) => {
        alert('page is fully loaded');
      });


      const stopTheLink = document.querySelectorAll('a');
        stopTheLink.forEach((anchors) => {
          anchors.addEventListener("click", (e) => {
            alert('Stopping the link!');        
            if (true === false) {
              e.preventDefault(); 
            }
        })
      })

const body = document.querySelector('body');
body.addEventListener('click', (event) => {
  alert('Clicked body!');
})

const contentSection = document.querySelector('.container');
contentSection.addEventListener('click', (event) => {
  alert('Clicked on contents!');
  event.stopPropagation();
})

const contentText = document.querySelector('.text-content');
contentText.addEventListener('click', (event) => {
  alert('Clicked on paragraph!');
  event.stopPropagation();
})