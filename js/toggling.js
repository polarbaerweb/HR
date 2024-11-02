document.addEventListener("DOMContentLoaded", function () {
	const elementsClasses = {
		results: {
			parent: ".main__results-item",
			child: ".main__results-body",
			button: ".main__faq-button",
		},
		faq: {
			parent: ".main__faq-item",
			child: ".main__faq-text",
			button: ".main__faq-button",
		},
	};

	document.addEventListener("click", handleDocumentClick);

	function handleDocumentClick(event) {
		const buttonReference = event.target.dataset.button_reference;

		const isWithinResults = event.target.closest(
			elementsClasses.results.parent,
		);

		const isWithinFaq = event.target.closest(elementsClasses.faq.parent);

		if (buttonReference && elementsClasses[buttonReference]) {
			const { parent, child, button } = elementsClasses[buttonReference];
			const parentContainers = document.querySelectorAll(parent);
			let clickedChildElement;

			const clickedParent = event.target.closest(parent);
			if (clickedParent) {
				clickedChildElement = clickedParent.querySelector(child);
			}

			parentContainers.forEach((element) => {
				const childElement = element.querySelector(child);
				const buttonElement = button ? element.querySelector(button) : null; // Only query if button is defined

				if (childElement && childElement !== clickedChildElement) {
					childElement.classList.remove("_active");
					if (buttonElement) {
						buttonElement.classList.remove("_active");
					}
					element.style.marginBottom = "0"; // Reset height when closed
				}
			});

			if (clickedChildElement) {
				const isActive = clickedChildElement.classList.toggle("_active");

				if (button) {
					const buttonElement = clickedParent.querySelector(button);
					if (buttonElement) {
						buttonElement.classList.toggle("_active", isActive);
					}
				}

				if (isActive) {
					const clickedChildElementHeight = clickedChildElement.scrollHeight;
					if (clickedParent.dataset.height) {
						clickedParent.style.marginBottom = `${clickedChildElementHeight}px`;
					}
				} else {
					clickedParent.style.marginBottom = "0";
				}
			}
		}

		if (!isWithinResults && !isWithinFaq) {
			const allBodies = document.querySelectorAll(
				".main__results-body, .main__faq-text",
			);

			const allButtons = [".main__faq-button"];

			allBodies.forEach((body) => {
				body.classList.remove("_active");
				body.parentElement.style.marginBottom = "0"; // Reset height of parent when closing
			});

			allButtons.forEach((button) => {
				const buttons = document.querySelectorAll(button);

				buttons.forEach((element) => {
					element.classList.remove("_active");
				});
			});
		}
	}
});
