import "./css/main.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const toggleMobile = document.querySelector(".hamburger");
const navPanel = document.querySelector(".main-header__nav-panel");
const toggleImg = document.querySelector(".hamburger > img");
const navPanelLinks = document.querySelectorAll(".main-header__nav-links a");

// const API_KEY = "4a344ddb464e43fca5f9502ba6142607";
// const API_URL = "https://emailvalidation.abstractapi.com/v1/?api_key=" + API_KEY;

// const footerForm = document.querySelector(".main-footer__form");
// footerForm.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	const emailAddress = document.querySelector("#email").value;
// 	const sendValidationRequest = async (emailAddress) => {
// 		try {
// 			const fullURL = API_URL + "&email=" + emailAddress;
// 			const apiResponse = await fetch(fullURL);
// 			const data = await apiResponse.json();
// 			const isValid = data.is_valid_format.value;
// 			console.log(isValid);
// 		} catch (error) {
// 			throw new Error("Unable to validate email");
// 		}
// 	};
// 	sendValidationRequest(emailAddress);
// });

// const setMobile = () => {
// 	navPanel.classList.add("mobile");
// 	navPanelLinks.forEach((link) => {
// 		link.addEventListener("click", handleClick);
// 	});
// };
// const delMobile = () => {
// 	navPanel.classList.remove("mobile");
// 	navPanelLinks.forEach((link) => {
// 		link.removeEventListener("click", handleClick);
// 	});
// };
// const showHideNav = () => navPanel.classList.toggle("visible");
// const switchMobile = (isMobileSize) => (isMobileSize ? setMobile() : delMobile());
// const mobileWidthMediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
// const checkMobile = () => window.innerWidth <= mobileBreakpoint && setMobile();
// const watchMobile = () => mobileWidthMediaQuery.addEventListener("change", (event) => switchMobile(event.matches));
// const setToggleImg = (src) => {
// 	src === "./assets/images/icon-hamburger.svg"
// 		? toggleImg.setAttribute("src", "./assets/images/icon-close.svg")
// 		: toggleImg.setAttribute("src", "./assets/images/icon-hamburger.svg");
// };
// const handleClick = (event) => {
// 	const src = toggleImg.getAttribute("src");
// 	showHideNav();
// 	setToggleImg(src);
// };

// checkMobile();
// watchMobile();

// const switchState = () => toggleMobile.addEventListener("click", handleClick);
// switchState();

class mobileMenu {
	constructor(mobileBreakpoint) {
		this.mobileBreakpoint = mobileBreakpoint;
		this.toggleMobile = document.querySelector(".hamburger");
		this.navPanel = document.querySelector(".main-header__nav-panel");
		this.toggleImg = document.querySelector(".hamburger > img");
		this.navPanelLinks = document.querySelectorAll(".main-header__nav-links a");
		this.mobileWidthMediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
	}

	setMobile = () => {
		this.navPanel.classList.add("mobile");
		this.navPanelLinks.forEach((link) => link.addEventListener("click", this.handleClick));
	};

	delMobile = () => {
		navPanel.classList.remove("mobile");
		navPanelLinks.forEach((link) => link.removeEventListener("click", this.handleClick));
	};

	showHideNav = () => navPanel.classList.toggle("visible");

	switchMobile = (isMobileSize) => (isMobileSize ? this.setMobile() : this.delMobile());

	checkMobile = () => window.innerWidth <= this.mobileBreakpoint && this.setMobile();

	watchMobile = () =>
		this.mobileWidthMediaQuery.addEventListener("change", (event) => this.switchMobile(event.matches));

	setToggleImg = (src) => {
		src === "./assets/images/icon-hamburger.svg"
			? toggleImg.setAttribute("src", "./assets/images/icon-close.svg")
			: toggleImg.setAttribute("src", "./assets/images/icon-hamburger.svg");
	};

	handleClick = (event) => {
		const src = toggleImg.getAttribute("src");
		this.showHideNav();
		this.setToggleImg(src);
	};

	switchState = () => toggleMobile.addEventListener("click", this.handleClick);
}

const headerNavMenu = new mobileMenu(992);
headerNavMenu.checkMobile();
headerNavMenu.watchMobile();
headerNavMenu.switchState();

const swiper = new Swiper(".swiper", {
	centeredSlides: true,
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3000,
	},
	spaceBetween: 20,
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
