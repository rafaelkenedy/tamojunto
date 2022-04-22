import React, {useEffect} from "react";

import {StyledContainer, StyledFooter, StyledText, StyledView} from "./styles";
import Header from "../../components/Header";
import TextArea from "../../components/TextArea";
import RedGreenButton from "../../components/RedGreenButton";
import Select from "../../components/Select";
import {businessType} from "../../helpers/businessType";
import {statesId} from "../../helpers/states";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {schemaValidateEditProfile} from "../../helpers/schemasFormValidate";

const EditProfile = () => {
	const {
		register,
		setValue,
		getValues,
		watch,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schemaValidateEditProfile),
	});

	useEffect(() => {
		register("name");
		register("phone");
		register("email");
		register("businessName");
		register("cnpj");
		register("businessTypeId");
		register("zipcode");
		register("address");
		register("number");
		register("complement");
		register("stateId");
		register("cityId");
		register("oldPassword");
		register("newPassword");
		register("repeatPassword");
	}, [register]);

	useEffect(() => {
		getValues();
	}, [watch()]);

	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<StyledText marginTop="25px">
					Edite os dados desejados e clique em salvar.
				</StyledText>
				<StyledText isBold marginTop="25px">
					Dados pessoais e da empresa:
				</StyledText>
				<StyledText isBold marginTop="16px">
					Nome completo
				</StyledText>
				<TextArea placeholder="Insira o nome completo" />
				<StyledText isBold marginTop="16px">
					Telefone
				</StyledText>
				<TextArea placeholder="Insira o telefone" />
				<StyledText isBold marginTop="16px">
					E-mail
				</StyledText>
				<TextArea placeholder="Insira o E-mail" />
				<StyledText isBold marginTop="16px">
					Nome fantasia
				</StyledText>
				<TextArea placeholder="Insira o Nome fantasia" />
				<StyledText isBold marginTop="16px">
					CNPJ
				</StyledText>
				<TextArea placeholder="Insira o CNPJ" />
				<StyledText isBold marginTop="16px">
					Ramo de atuação
				</StyledText>
				<Select
					label={"businessTypeId"}
					items={businessType}
					selectedValue={getValues("businessTypeId")}
					onValueChange={(text) => setValue("businessTypeId", text)}
				/>
				<StyledText isBold marginTop="16px">
					Endereço:
				</StyledText>
				<StyledText isBold marginTop="16px">
					CEP
				</StyledText>
				<TextArea placeholder="Insira o CEP" />
				<StyledText isBold marginTop="16px">
					Endereço
				</StyledText>
				<TextArea placeholder="Insira o endereço" />
				<StyledText isBold marginTop="16px">
					Número
				</StyledText>
				<TextArea placeholder="Insira o número" />
				<StyledText isBold marginTop="16px">
					Complemento
				</StyledText>
				<TextArea placeholder="Insira o complemento" />
				<StyledText isBold marginTop="16px">
					Estado:
				</StyledText>
				<Select
					label={"stateId"}
					items={statesId}
					selectedValue={getValues("stateId")}
					onValueChange={(text) => {
						setValue("stateId", text);
					}}
				/>
				<StyledText isBold marginTop="16px">
					Cidade:
				</StyledText>
				<TextArea placeholder="Insira o " />
				<StyledText isBold marginTop="16px">
					Senha:
				</StyledText>
				<StyledText marginTop="16px">
					Para proteger a sua conta tamojunto, tenha certeza que a sua senha:
				</StyledText>
				<StyledText marginTop="8px">• Possui mais de 7 caracteres.</StyledText>
				<StyledText>
					• Não contém seu nome de usuário, por exemplo: “meusuario123”.
				</StyledText>
				<StyledText>
					• Contenha letras, números e caracteres especiais.
				</StyledText>
				<StyledText isBold marginTop="16px">
					Insira sua senha atual
				</StyledText>
				<TextArea placeholder="Insira a senha atual" />
				<StyledText isBold marginTop="16px">
					Insira a nova senha
				</StyledText>
				<TextArea placeholder="Insira a nova senha" />
				<StyledText isBold marginTop="16px">
					Repita a nova senha
				</StyledText>
				<TextArea placeholder="Repita a nova senha" />
				<StyledFooter />
				<RedGreenButton redTitle="CANCELAR" greenTitle="SALVAR" />
			</StyledContainer>
		</StyledView>
	);
};

export default EditProfile;
