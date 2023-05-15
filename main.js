import "./css/main.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import JustValidate from "just-validate";

const validator = new JustValidate("#main-footer__form", {
	errorLabelCssClass: "invalid",
});
validator.addField("#email", [
	{ rule: "required" },
	{ rule: "email", errorMessage: "Please insert a valid email" },
]);

class mobileMenu {
	constructor() {
		this.btn = document.querySelector(".hamburger");
		this.nav = document.querySelector(".main-header__nav-panel");
		this.icon = document.querySelector(".hamburger-icon");
		this.links = document.querySelectorAll(".main-header__nav-links .nav-link");
	}

	toggleNav = () => this.nav.classList.toggle("visible");
	disableNav = () => this.nav.classList.remove("visible");
	toggleMobile = () => this.nav.classList.toggle("mobile");
	togglePosFixed = () => this.btn.classList.toggle("close");
	changeIcon = () => {
		let path = this.icon.getAttribute("src");
		path.includes("icon-hamburger")
			? (path = path.replace("icon-hamburger", "icon-close"))
			: (path = path.replace("icon-close", "icon-hamburger"));
		this.icon.setAttribute("src", path);
	};

	handleClick = () => {
		this.toggleNav();
		this.togglePosFixed();
		this.changeIcon();
	};

	handleEsc = event => {
		if (this.nav.classList.contains("visible") && event.code === "Escape") {
			this.disableNav();
			this.togglePosFixed();
			this.changeIcon();
		}
	};

	setState = isMobile => {
		this.toggleMobile();
		if (isMobile) {
			this.btn.addEventListener("click", this.handleClick);
			window.addEventListener("keydown", this.handleEsc);
			this.links.forEach(link =>
				link.addEventListener("click", this.handleClick)
			);
		} else {
			this.btn.removeEventListener("click", this.handleClick);
			window.removeEventListener("keydown", this.handleEsc);
			this.links.forEach(link =>
				link.removeEventListener("click", this.handleClick)
			);
		}
	};

	checkState = breakpoint =>
		window.innerWidth <= breakpoint && this.setState(true);

	toggleState = isMobileSize =>
		isMobileSize ? this.setState(true) : this.setState(false);

	watchState = breakpoint => {
		const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);
		mediaQueryList.addEventListener("change", event =>
			this.toggleState(event.matches)
		);
	};

	initMobileMenuOn = breakpoint => {
		navPanel.checkState(breakpoint);
		navPanel.watchState(breakpoint);
	};
}

const navPanel = new mobileMenu();
navPanel.initMobileMenuOn(992);

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
