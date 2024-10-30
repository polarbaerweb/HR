document.addEventListener("DOMContentLoaded", function () {
	const inputs = document.querySelectorAll(".main__form-input");

	inputs.forEach((input) => {
		const label = input.previousElementSibling;

		input.addEventListener("focus", () => {
			if (input.id !== "file-upload") {
				label.style.opacity = 0;
				label.style.transform = "translateY(-1.25rem)";
			}
		});

		input.addEventListener("blur", () => {
			if (!input.value && input.id !== "file-upload") {
				label.style.opacity = 1;
				label.style.transform = "translateY(-50%)";
			}
		});
	});

	const labels = document.querySelectorAll(".main__form-block-title");

	labels.forEach((label) => {
		label.addEventListener("click", () => {
			const input = label.nextElementSibling;
			if (input.id !== "file-upload") {
				input.focus();
				label.style.opacity = 0;
				label.style.transform = "translateY(-1.25rem)";
			}
		});
	});
});
