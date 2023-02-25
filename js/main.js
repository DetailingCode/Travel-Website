const navActive = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
	navActive.classList.toggle("nav--active");

    allNavItems.forEach(item=> {
        item.addEventListener('click', ()=> {
            navActive.classList.remove('nav--active')
        })
    })
};

 
navBtn.addEventListener("click", handleNav);
 
