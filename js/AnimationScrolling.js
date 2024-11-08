document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				} else {
					entry.target.classList.remove("visible");
				}
			});
		},
		{ threshold: 0.3 },
	);

	const elements = document.querySelectorAll(".scroll-animated");

	elements.forEach((element) => {
		observer.observe(element);
	});
});
