import JustValidate from "just-validate";

const validator = new JustValidate("#main-footer__form", {
	errorLabelCssClass: "invalid",
});
validator.addField("#email", [
	{ rule: "required" },
	{ rule: "email", errorMessage: "Please insert a valid email" },
]);
