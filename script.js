const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('li');
    
     //Toggle Nav
    burger.addEventListener('click', () => {
       nav.classList.toggle('nav-active');
         //animate Links 
       navLinks.forEach((link, index) => {
            if (link.style.animation){
            link.style.animation = '';
            }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
      });
      //burger animation
burger.classList.toggle('toggle');

    });
  


}  
navSlide(); 


var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,4000);
  
}

changeSlide();