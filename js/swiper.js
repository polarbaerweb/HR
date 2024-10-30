const blogs = new Swiper(".main__blogs-swiper", {
	direction: "horizontal",
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 20,
	autoplay: {
		delay: 1000,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	freeMode: true,
	grabCursor: true,

	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 10,
			navigation: {
				nextEl: null,
				prevEl: null,
			},
		},

		768: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 3,
		},
	},
});
