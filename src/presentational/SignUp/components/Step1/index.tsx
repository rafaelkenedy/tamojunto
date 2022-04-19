import React, {useEffect, useState} from "react";
import {StyledContainer, StyledText, StyledView} from "./styles";
import TextArea from "../../../../components/TextArea";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaValidateStep1} from "../../../../helpers/schemasFormValidate";
import theme from '../../../../styles/theme';

const Step1 = ({...rest}) => {
	const [canContinue, setContinue] = useState<boolean>(true);
	const {register,
		setValue,
		handleSubmit,
		formState: {errors}
	} = useForm({
		resolver: yupResolver(schemaValidateStep1),
	});

	useEffect(() => {
		register("name");
		register("email");
		register("password");
		register("repeatPassword");
	}, [register]);

	console.log(errors);

	const onSubmit = (data) => {
		if (data.password !== data.repeatPassword) return;
		setContinue(false);
		console.log(data);
	};

	return (
		<StyledContainer
			{...rest}
			onNext={handleSubmit(onSubmit)}
			errors={canContinue}
		>
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
					placeholder={errors.name ? errors.name.message : "Insira seu nome e sobrenome"}
					label={"name"}
					onChangeText={(text) => setValue("name", text)}
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
					borderColor={errors.password ? theme.colors.error : theme.colors.success}
					placeholder={errors.password ? errors.password.message : "Defina a senha com letra e números"}
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
					borderColor={errors.repeatPassword ? theme.colors.error : theme.colors.success}
					placeholder={errors.repeatPassword ? errors.repeatPassword.message : "Repita a senha definida acima"}
					secureTextEntry
					label={"repeatPassword"}
					onChangeText={(text) => setValue("repeatPassword", text)}
					onSubmitEditing={handleSubmit(onSubmit)}
				/>
				{errors && (
					<StyledText topDistance="55px">
						Todos os campos são obrigatórios.
					</StyledText>
				)}
			</StyledView>
		</StyledContainer>
	);
};

export default Step1;
