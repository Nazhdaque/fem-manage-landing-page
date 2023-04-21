import "./css/main.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import JustValidate from "just-validate";

const validator = new JustValidate("#main-footer__form", {
	errorLabelCssClass: "invalid",
});
validator.addField("#email", [
	{
		rule: "required",
	},
	{
		rule: "email",
		errorMessage: "Please insert a valid email",
	},
]);

class mobileMenu {
	constructor(mobileBreakpoint) {
		this.mobileBreakpoint = mobileBreakpoint;
		this.toggleMobile = document.querySelector(".hamburger");
		this.navPanel = document.querySelector(".main-header__nav-panel");
		this.toggleImg = document.querySelectorAll(".hamburger-icon");
		this.navPanelLinks = document.querySelectorAll(".main-header__nav-links a");
		this.mobileWidthMediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
	}

	setMobile = (isMobile) => {
		if (isMobile) {
			this.navPanel.classList.add("mobile");
			this.navPanelLinks.forEach((link) => link.addEventListener("click", this.handleClick));
		} else {
			this.navPanel.classList.remove("mobile");
			this.navPanelLinks.forEach((link) => link.removeEventListener("click", this.handleClick));
		}
	};
	showHideNav = () => this.navPanel.classList.toggle("visible");
	switchMobile = (isMobileSize) => (isMobileSize ? this.setMobile(true) : this.setMobile(false));
	switchToggleImg = () => this.toggleImg.forEach((img) => img.classList.toggle("hidden"));
	handleClick = () => {
		this.showHideNav();
		this.switchToggleImg();
	};
	checkMobile = () => window.innerWidth <= this.mobileBreakpoint && this.setMobile(true);
	watchMobile = () =>
		this.mobileWidthMediaQuery.addEventListener("change", (event) => this.switchMobile(event.matches));
	switchState = () => this.toggleMobile.addEventListener("click", this.handleClick);
	workMobile = () => {
		headerNavMenu.checkMobile();
		headerNavMenu.watchMobile();
		headerNavMenu.switchState();
	};
}

const headerNavMenu = new mobileMenu(992);
headerNavMenu.workMobile();

const swiper = new Swiper(".swiper", {
	centeredSlides: true,
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3000,
	},
	spaceBetween: 30,
	direction: "horizontal",
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 2,
		invert: true,
	},
	grabCursor: true,
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
		enabled: true,
	},
	breakpoints: {
		576: {
			slidesPerView: 1.7,
			pagination: {
				enabled: false,
			},
		},
		992: {
			slidesPerView: 2.7,
		},
	},
});
