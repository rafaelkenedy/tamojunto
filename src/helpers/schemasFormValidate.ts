import * as Yup from "yup";

const schemaValidateStep1 = Yup.object().shape({
	name: Yup.string().required("Nome é obrigatório"),
	email: Yup.string().email().required("Email é obrigatório"),
	password: Yup.string().min(8, 'Senha deve ter 8 digítos').required("Senha é obrigatório"),
	repeatPassword: Yup.string().min(8, 'Senha deve ter 8 digítos').required("Confirmar senha é obrigatório"),
});

export {schemaValidateStep1};
