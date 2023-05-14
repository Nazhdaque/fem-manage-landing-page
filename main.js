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
	constructor(breakpoint) {
		this.breakpoint = breakpoint;
		this.btn = document.querySelector(".hamburger");
		this.nav = document.querySelector(".main-header__nav-panel");
		this.icon = document.querySelector(".hamburger-icon");
		this.links = document.querySelectorAll(".main-header__nav-links .nav-link");
		this.mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);
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

	toggleOnClick = () => {
		this.btn.addEventListener("click", this.handleClick);
	};

	closeOnEsc = () => {
		window.addEventListener("keyup", event => {
			if (this.nav.classList.contains("visible") && event.key === "Escape") {
				this.disableNav();
				this.togglePosFixed();
				this.changeIcon();
			}
		});
	};

	interactWith = () => {
		this.toggleOnClick();
		this.closeOnEsc();
	};

	setState = isMobile => {
		this.toggleMobile();
		isMobile
			? this.links.forEach(link =>
					link.addEventListener("click", this.handleClick)
			  )
			: this.links.forEach(link =>
					link.removeEventListener("click", this.handleClick)
			  );
	};

	checkState = () =>
		window.innerWidth <= this.breakpoint && this.setState(true);

	toggleState = isMobileSize =>
		isMobileSize ? this.setState(true) : this.setState(false);

	watchState = () =>
		this.mediaQueryList.addEventListener("change", event =>
			this.toggleState(event.matches)
		);

	initMobileMenu = () => {
		navPanel.checkState();
		navPanel.watchState();
		navPanel.interactWith();
	};
}

const navPanel = new mobileMenu(992);
navPanel.initMobileMenu();

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
