document.addEventListener("DOMContentLoaded", function () {
	const items = document.querySelectorAll(".main__roles-link");

	items.forEach((item) => {
		item.addEventListener("mouseenter", () => {
			items.forEach((i) => {
				if (i !== item) {
					i.classList.add("hovered");
				}
			});
		});

		item.addEventListener("mouseleave", () => {
			items.forEach((i) => {
				i.classList.remove("hovered");
			});
		});
	});
});
