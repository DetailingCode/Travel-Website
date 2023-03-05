const navActive = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	navActive.classList.toggle("nav--active");
	navBars.classList.remove('black-bars-color')
	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navActive.classList.remove("nav--active");
		});
	});
	handleNavItemAnimation();
};

const handleNavItemAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};



const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {

		if (section.classList.contains('white-section') 
		&& section.offsetTop <= currentSection + 60) 
		{
			navBars.classList.add('black-bars-color')
		}else if (!section.classList.contains('white-section') 
		&& section.offsetTop <= currentSection + 60)
		{
			navBars.classList.remove('black-bars-color')
		}

	})
}

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
};






handleCurrentYear();
navBtn.addEventListener("click", handleNav);
window.addEventListener('scroll', handleObserver)