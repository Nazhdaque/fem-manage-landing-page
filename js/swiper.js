import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
	centeredSlides: true,
	loop: true,
	speed: 1000,
	autoplay: { delay: 2000 },
	// initialSlide: 1,  // autoplay doesn't work with any number except 0
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
