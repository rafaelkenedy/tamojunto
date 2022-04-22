import * as Yup from "yup";

const schemaValidateStep1 = Yup.object().shape({
	name: Yup.string().required("Por favor insira seu nome"),
	phone: Yup.string()
		.min(10, "Telefone deve ter 10 dígitos")
		.required("Por favor insira seu telefone"),
	email: Yup.string()
		.email("Por favor insira um email válido")
		.required("Por favor insira seu email"),
	password: Yup.string()
		.min(8, "Senha deve ter 8 dígitos")
		.required("Senha é obrigatório"),
	repeatPassword: Yup.string()
		.min(8, "Senha deve ter 8 dígitos")
		.required("Confirmar senha é obrigatório"),
});

const schemaValidateStep2 = Yup.object().shape({
	businessName: Yup.string().required("Por favor insira nome fantasia"),
	cnpj: Yup.string()
		.min(13, "CNPJ deve ter 13 dígitos")
		.required("Por favor insira CNPJ válido"),
});

const schemaValidateStep3 = Yup.object().shape({
	zipcode: Yup.string().required("Por favor insira seu cep"),
	address: Yup.string().required("Por favor insira seu endereço"),
	number: Yup.string().required("Por favor insira seu número"),
	complement: Yup.string().notRequired(),
	stateId: Yup.string().notRequired(),
	cityId: Yup.string().notRequired(),
});

const schemaValidateEditProfile = Yup.object().shape({
	name: Yup.string().required("Por favor insira seu nome"),
	phone: Yup.string()
		.min(10, "Telefone deve ter 10 dígitos")
		.required("Por favor insira seu telefone"),
	email: Yup.string()
		.email("Por favor insira um email válido")
		.required("Por favor insira seu email"),
	businessName: Yup.string().required("Por favor insira nome fantasia"),
	cnpj: Yup.string()
		.min(13, "CNPJ deve ter 13 dígitos")
		.required("Por favor insira CNPJ válido"),
	businessTypeId: Yup.string().notRequired(),
	zipcode: Yup.string().required("Por favor insira seu cep"),
	address: Yup.string().required("Por favor insira seu endereço"),
	number: Yup.string().required("Por favor insira seu número"),
	complement: Yup.string().notRequired(),
	stateId: Yup.string().notRequired(),
	cityId: Yup.string().notRequired(),
	oldPassword: Yup.string().notRequired(),
	newPassword: Yup.string().notRequired(),
	repeatPassword: Yup.string().notRequired(),
});

export {
	schemaValidateStep1,
	schemaValidateStep2,
	schemaValidateStep3,
	schemaValidateEditProfile,
};
