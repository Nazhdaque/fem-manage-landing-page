import "./css/main.css";
import "./js/swiper.js";
import "./js/validator.js";
import { MobileNav } from "./js/mobile-nav.js";
import { FetchWrapper } from "./js/fetchwrapper.js";
import { html, render } from "lit-html";

const navPanel = new MobileNav();
navPanel.initOn(992);

const API = new FetchWrapper("");
API.get("slider-data.json").then(data => {
	const slider = document.querySelector(".swiper-wrapper");
	const slides = [];

	data.forEach(entry => {
		const name = entry.person;
		const text = entry.text;
		const firstName = name.split(" ")[0].toLowerCase();
		const pathname = `images/avatar-${firstName}.png`;

		const slide = (pathname, name, text) => html`<div class="swiper-slide">
			<img class="slide-avatar" src="${pathname}" alt="${name} avatar" />
			<div class="slide-text-wrapper">
				<h3 class="slide-header title-sm">${name}</h3>
				<blockquote>
					<p class="text-regular">“${text}”</p>
				</blockquote>
			</div>
		</div>`;

		slides.push(slide(pathname, name, text));
	});

	const duplex = slides.concat(slides);
	render(duplex, slider);
});

console.log(
	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque",
	"background: #222; color: chartreuse; font-size: 1.25rem"
);
