document.addEventListener("DOMContentLoaded", handleDomeLoaded);

function handleDomeLoaded() {
	const elements_classname = {
		header: [".header__navigation"],
		suggestion: [".main__services-selects"],
	};

	const burger = new Burger(elements_classname);
	burger.handleActivation();
}

class Burger {
	constructor(classnames) {
		this.classnames = classnames;
		this.burger_for = undefined;
		this.burgers = [];
		this.elements = {};
	}

	handleActivation() {
		const burger_container = document.querySelectorAll(".burger");
		this.burgers = [...burger_container];

		burger_container.forEach((burger) => {
			const burger_for = burger.dataset.burger_for;

			burger.onclick = () => {
				this._toggleBurger(burger, burger_for);
			};
		});
	}

	_removeActiveClassFromBurgers() {
		this.burgers.forEach((burger) => {
			burger.classList.remove("active");
		});
	}

	_toggleBurger(burger, burger_for) {
		const isActive = burger.classList.contains("active");

		if (this.burger_for && this.burger_for !== burger_for) {
			this._resetPreviousElements();
			this._removeActiveClassFromBurgers();
		}

		burger.classList.toggle("active");

		if (!isActive) {
			this.burger_for = burger_for;
		} else {
			this.burger_for = undefined;
		}

		this._activateElements(burger_for);
	}

	_activateElements(burger_for) {
		if (!this.elements[burger_for]) {
			this._getAllElements();
		}

		this.elements[burger_for].forEach((element) => {
			element.classList.toggle("active");
		});

		this._checkBurgerState();
	}

	_resetPreviousElements() {
		if (this.burger_for) {
			this.elements[this.burger_for].forEach((element) => {
				element.classList.remove("active");
			});
		}

		const anyActive = Object.keys(this.elements).some((key) =>
			this.elements[key].some((element) =>
				element.classList.contains("active"),
			),
		);

		if (!anyActive) {
			document.documentElement.classList.remove("active");
		}
	}

	_checkBurgerState() {
		const anyActive = this.elements[this.burger_for]?.some((element) =>
			element.classList.contains("active"),
		);

		if (anyActive && this.burger_for === "header") {
			document.documentElement.classList.add("active");
		} else {
			const hasOtherActive = Object.keys(this.elements).some((key) =>
				this.elements[key].some((element) =>
					element.classList.contains("active"),
				),
			);

			if (!hasOtherActive) {
				document.documentElement.classList.remove("active");
			}
		}
	}

	_getAllElements() {
		this.elements[this.burger_for] = [];

		this.classnames[this.burger_for].forEach((classname) => {
			const element = document.querySelector(classname);
			if (element) {
				this.elements[this.burger_for].push(element);
			}
		});
	}
}
