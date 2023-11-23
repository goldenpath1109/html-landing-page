// //custom accordion

// const accordions = document.querySelectorAll(".accordion");

// accordions.forEach((accordion) => {
// 	accordion.addEventListener("click", (e) => {
// 		const parentId = accordion.getAttribute("id");
// 		if (e.target.getAttribute("data-parent") === parentId) {
// 			let btnContainer = [];
// 			let contentContainer = [];
// 			const accordionBtns = Array.from(
// 				e.target.closest(".accordion").children
// 			).forEach((accBtn) => btnContainer.push(accBtn.children[0]));
// 			const accordionContents = Array.from(
// 				e.target.closest(".accordion").children
// 			).forEach((accCont) => contentContainer.push(accCont.children[1]));
// 			contentContainer;
// 			if (
// 				e.target.classList.contains("accordion-button") &&
// 				e.target.classList.contains("active")
// 			) {
// 				contentContainer.forEach((accCont) => accCont.classList.add("hide"));
// 				btnContainer.forEach((accBtn) => accBtn.classList.remove("active"));
// 			} else if (e.target.classList.contains("accordion-button")) {
// 				contentContainer.forEach((accCont) => accCont.classList.add("hide"));
// 				btnContainer.forEach((accBtn) => accBtn.classList.remove("active"));
// 				e.target.nextElementSibling.classList.toggle("hide");
// 				e.target.classList.toggle("active");
// 			}
// 		}
// 	});
// });

//custom accordion

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	accordion.addEventListener("click", (e) => {
		const parentId = accordion.getAttribute("id");
		if (
			e.target.closest(".accordion-button").getAttribute("data-parent") ===
			parentId
		) {
			let btnContainer = [];
			let contentContainer = [];
			const accordionBtns = Array.from(
				e.target.closest(".accordion").children
			).forEach((accBtn) =>
				btnContainer.push(accBtn.querySelector(".accordion-button"))
			);
			const accordionContents = Array.from(
				e.target.closest(".accordion").children
			).forEach((accCont) =>
				contentContainer.push(accCont.querySelector(".accordion-content"))
			);
			contentContainer;
			if (e.target.closest(".accordion-button").classList.contains("active")) {
				contentContainer.forEach((accCont) => accCont.classList.add("hide"));
				btnContainer.forEach((accBtn) => accBtn.classList.remove("active"));
			} else if (e.target.closest(".accordion-button")) {
				contentContainer.forEach((accCont) => accCont.classList.add("hide"));
				btnContainer.forEach((accBtn) => accBtn.classList.remove("active"));
				e.target
					.closest(".accordion-button")
					.nextElementSibling.classList.toggle("hide");
				e.target.closest(".accordion-button").classList.toggle("active");
			}
		}
	});
});
