document.addEventListener("DOMContentLoaded", function () {
	const link_boxes = document.querySelectorAll(".scrolling-link-box");

	link_boxes.forEach((box) => {
		box.addEventListener("click", handleBoxClick);
	});

	function handleBoxClick(event) {
		const targetLink = event.target.closest(".scrolling-link");
		if (targetLink) {
			event.preventDefault(); // Prevent default link behavior

			const href = targetLink.getAttribute("href");
			const block = document.querySelector(`#${href}`); // Assuming your sections have IDs that match the href values

			if (block) {
				block.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}
	}
});
