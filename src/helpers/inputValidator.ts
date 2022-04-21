export const passwordValidator = (text: string) => {
	const regexUpperCase = RegExp(/^(?=.*[A-Z]).+$/);
	const regexLowerCase = RegExp(/^(?=.*[a-z]).+$/);
	const regexNumber = RegExp(/^(?=.*[0-9]).+$/);
	const length = text.length >= 8;
	return (
		regexUpperCase.test(text) &&
		regexLowerCase.test(text) &&
		regexNumber.test(text) &&
		length
	);
};

export const nameValidator = (name: string) => {
	const fullName = name.split(" ");
	if (fullName.length === 1) {
		return false;
	} else {
		return {
			firstName: fullName[0],
			lastName: fullName[fullName.length - 1],
		};
	}
};
