const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //This toggles the nav bar in mobile mode
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        
        //This animates the nav-links 
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });


}

const callMe = ()=>{
    navSlide();
}

callMe();
