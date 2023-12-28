let showMenu = false;
let navicon = document.querySelector('.nav-icon');
let sidemenu = document.querySelector('.side-nav');



navicon.addEventListener('click', toggleMenu, false);

function toggleMenu(event){
   if(!showMenu){
     if(sidemenu.style.width = '300px');
    
       //Set Menu state
       showMenu = true;  
       sidemenu.style.display = 'block'
   }else{
    
     sidemenu.style.width = '0px';
       //Set Menu State
       showMenu = false;
       sidemenu.style.display = 'hidden'
      
   }
}

let closed = document.querySelector('.btn-close');
closed.addEventListener("click", toggleBtn);


function toggleBtn(event){
  
    sidemenu.style.width = '0px';
    showMenu = false;
}





const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const imgContainer = document.querySelector('.img-container')


left.addEventListener('mouseenter', () => {
    container.classList.add("hover-left")
    /*imgContainer.style.visibility = 'hidden'*/
    function fadeOut() {
        var opacity = 1; // Initial opacity
        var interval = setInterval(function() {
           if (opacity > 0) {
              opacity -= 0.1;
              imgContainer.style.opacity = opacity;
           } else {
              clearInterval(interval); // Stop the interval when opacity reaches 0
              imgContainer.style.visibility = 'visible'; // Hide the element
           }
        }, 50);
     }
     fadeOut(imgContainer);
})
left.addEventListener('mouseleave', () => {
    container.classList.remove("hover-left")
    /*imgContainer.style.visibility = 'visible'*/
    function fadeIn() {
        var opacity = 0; // Initial opacity
        var interval = setInterval(function() {
           if (opacity == 0) {
              opacity += 1;
              imgContainer.style.opacity = opacity;
           } else {
              clearInterval(interval); // Stop the interval when opacity reaches 0
              imgContainer.style.visibility = 'visible'; // Hide the element
           }
        }, 50);
     }
     fadeIn(imgContainer);
   
})
right.addEventListener('mouseenter', () => {
    container.classList.add("hover-right")
    /*imgContainer.style.visibility = 'hidden'*/
    function fadeOut() {
        var opacity = 1; // Initial opacity
        var interval = setInterval(function() {
           if (opacity > 0) {
              opacity -= 0.1;
              imgContainer.style.opacity = opacity;
           } else {
              clearInterval(interval); // Stop the interval when opacity reaches 0
              imgContainer.style.visibility = 'visible'; // Hide the element
           }
        }, 50);
     }
     fadeOut(imgContainer);
})
right.addEventListener('mouseleave', () => {
    container.classList.remove("hover-right")
    /*imgContainer.style.visibility = 'visible'*/
    function fadeIn() {
        var opacity = 0; // Initial opacity
        var interval = setInterval(function() {
           if (opacity == 0) {
              opacity += 1;
              imgContainer.style.opacity = opacity;
           } else {
              clearInterval(interval); // Stop the interval when opacity reaches 0
              imgContainer.style.visibility = 'visible'; // Hide the element
           }
        }, 50);
     }
     fadeIn(imgContainer);
})

