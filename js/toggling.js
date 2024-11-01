document.addEventListener("DOMContentLoaded", function () {
	const elements_classes = {
		results: [".main__results-item", ".main__results-body"],
	};

	document.addEventListener("click", handleDocumentClick);

	function handleDocumentClick(event) {
		if (window.innerWidth <= 992) {
			const button_reference = event.target.dataset.button_reference;

			if (button_reference) {
				const resultsItems = document.querySelectorAll(".main__results-item");

				resultsItems.forEach((item) => {
					const body = item.querySelector(".main__results-body");
					if (item.contains(event.target)) {
						body.classList.toggle("_active");
					} else {
						if (body) {
							body.classList.remove("_active");
						}
					}
				});
			} else {
				document.querySelectorAll(".main__results-body").forEach((body) => {
					body.classList.remove("_active");
				});
			}
		}
	}
});
