document.addEventListener("DOMContentLoaded", function () {
	const gridContainers = document.querySelectorAll(".main__results-list"); // Select all grid containers

	function adjustLastItem(gridContainer) {
		const gridItems = gridContainer.querySelectorAll(".main__results-item");
		const itemCount = gridItems.length;
		const filledColumns = Array.from(gridItems).filter(
			(item) => item.style.display !== "none",
		).length; // Count filled items
		const totalColumns = 3; // Number of columns in the grid
		const emptyColumns = totalColumns - (filledColumns % totalColumns);

		gridItems.forEach((item) => item.classList.remove("span-full"));

		const lastItem = gridItems[itemCount - 1];

		if (emptyColumns > 0 && filledColumns > 0 && window.innerWidth > 750) {
			lastItem.classList.add("span-full");
			lastItem.style.gridColumn = `span ${emptyColumns + 1}`;
		} else {
			lastItem.style.gridColumn = `auto`;
		}
	}

	// Adjust last item for each grid container
	gridContainers.forEach((container) => adjustLastItem(container));

	let resizeTimeout;
	window.addEventListener("resize", function () {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			gridContainers.forEach((container) => adjustLastItem(container));
		}, 50); // Adjust timeout as needed
	});
});
