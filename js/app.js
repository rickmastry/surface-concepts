let showMenu = false;
let navicon = document.querySelector('.nav-icon');
let sidemenu = document.querySelector('.side-nav');
let body = document.querySelector('.change');


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

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
 
  
  if(document.documentElement.scrollTop < 100){
    document.querySelector(".navbar").style.background = " transparent";
    document.querySelector(".navbar-brand").style.background = "url('../img/sc_white.png') no-repeat center center";
    document.querySelector(".navbar-brand").style.backgroundSize = "contain";
   
    
  }else{
    document.querySelector(".navbar").style.background = "rgb(54, 52, 52)";
    document.querySelector(".navbar-brand").style.background = "url('../img/LOGO4.png') no-repeat center center";
    document.querySelector(".navbar-brand").style.backgroundSize = "contain";

  }

 
}


function parallaxScroll(){
  const parallax = document.getElementById('parallax');
  

window.addEventListener("scroll", function(){
    let offset = document.documentElement.scrollTop;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

/*const parallaxTwo = document.getElementById('parallaxTwo');

window.addEventListener("scroll", function(){
    let offset = document.documentElement.scrollTop;
    parallaxTwo.style.backgroundPositionY = offset * 0.7 + 'px';
})*/

}

parallaxScroll();




