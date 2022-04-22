import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaValidateStep1} from "../../../../helpers/schemasFormValidate";

import {StyledContainer, StyledFooter, StyledText, StyledView} from "./styles";
import TextArea from "../../../../components/TextArea";
import {setData} from "../../../../store/slices/user";
import theme from "../../../../styles/theme";
import InputMask from "../../../../components/InputMask";
import {Masks} from "react-native-mask-input";
import {
	nameValidator,
	passwordValidator,
} from "../../../../helpers/inputValidator";
import {SplitNameType} from "../../../../@types/types";
import CustomAlert from "../../../../components/CustomAlert";

const Step1 = ({...rest}) => {
	const [canContinue, setContinue] = useState<boolean>(true);
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [alertMessage, setAlertMessage] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const dispatch = useDispatch();
	const {
		register,
		setValue,
		getValues,
		watch,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schemaValidateStep1),
	});

	useEffect(() => {
		register("name");
		register("phone");
		register("email");
		register("password");
		register("repeatPassword");
	}, [register]);

	useEffect(() => {
		getValues();
	}, [watch()]);

	useEffect(() => {
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	}, [showAlert]);

	const onSubmit = (data) => {
		const splitName: boolean | SplitNameType = nameValidator(data.name);
		if (!splitName) {
			setAlertMessage("Nome deve ser completo.");
			setShowAlert(true);
			return;
		}
		if (!passwordValidator(data.password)) {
			setAlertMessage(
				"Senha deve ter 8 dígitos, ter mais de 8 caracteres, possuir letras maiúsculas e mínulas."
			);
			setShowAlert(true);
			return;
		}
		if (data.password !== data.repeatPassword) {
			setAlertMessage("Senhas digitadas devem ser iguais.");
			setShowAlert(true);
			return;
		}
		dispatch(
			setData({
				firstName: splitName.firstName,
				lastName: splitName.lastName,
				email: data.email,
				phone: data.phone,
				password: data.password,
			})
		);
		setContinue(false);
	};

	return (
		<StyledContainer
			{...rest}
			onNext={handleSubmit(onSubmit)}
			errors={canContinue}
		>
			<CustomAlert visible={showAlert} message={alertMessage} />
			<StyledView>
				<StyledText>
					Boas vindas! Informe seus dados abaixo para fazermos o seu cadastro.
				</StyledText>
				<StyledText isBold topDistance="28px">
					Nome completo
				</StyledText>
				<TextArea
					returnKeyType="next"
					borderColor={errors.name ? theme.colors.error : theme.colors.success}
					placeholderTextColor={
						errors.name ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={
						errors.name ? errors.name.message : "Insira seu nome e sobrenome"
					}
					label={"name"}
					onChangeText={(text) => setValue("name", text)}
				/>
				<StyledText isBold topDistance="28px">
					Telefone
				</StyledText>
				<InputMask
					returnKeyType="next"
					borderColor={errors.phone ? theme.colors.error : theme.colors.success}
					placeholderTextColor={
						errors.phone ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={errors.phone ? errors.phone.message : "(00) 00000-0000"}
					value={phone}
					label={"phone"}
					keyboardType="number-pad"
					maxLength={15}
					onChangeText={(masked, unmasked) => {
						setPhone(masked);
						setValue("phone", unmasked);
					}}
					mask={Masks.BRL_PHONE}
				/>
				<StyledText isBold topDistance="28px">
					Email
				</StyledText>
				<TextArea
					autoCapitalize="none"
					keyboardType="email-address"
					autoCorrect={false}
					returnKeyType="next"
					borderColor={errors.email ? theme.colors.error : theme.colors.success}
					placeholderTextColor={
						errors.email ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={errors.email ? errors.email.message : "Insira seu email"}
					label={"email"}
					onChangeText={(text) => setValue("email", text)}
				/>
				<StyledText isBold topDistance="28px">
					Defina sua senha
				</StyledText>
				<TextArea
					autoCapitalize="none"
					autoCorrect={false}
					returnKeyType="next"
					borderColor={
						errors.password ? theme.colors.error : theme.colors.success
					}
					placeholderTextColor={
						errors.password ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={
						errors.password
							? errors.password.message
							: "Defina a senha com letra e números"
					}
					secureTextEntry
					label={"password"}
					onChangeText={(text) => setValue("password", text)}
				/>
				<StyledText isBold topDistance="28px">
					Confirmar sua senha
				</StyledText>
				<TextArea
					autoCapitalize="none"
					autoCorrect={false}
					returnKeyType="next"
					borderColor={
						errors.repeatPassword ? theme.colors.error : theme.colors.success
					}
					placeholderTextColor={
						errors.repeatPassword
							? theme.colors.error
							: theme.colors.fuscous_gray
					}
					placeholder={
						errors.repeatPassword
							? errors.repeatPassword.message
							: "Repita a senha definida acima"
					}
					secureTextEntry
					label={"repeatPassword"}
					onChangeText={(text) => setValue("repeatPassword", text)}
					onSubmitEditing={handleSubmit(onSubmit)}
				/>
				<StyledText topDistance="55px">
					Todos os campos são obrigatórios.
				</StyledText>
				<StyledFooter />
			</StyledView>
		</StyledContainer>
	);
};

export default Step1;
