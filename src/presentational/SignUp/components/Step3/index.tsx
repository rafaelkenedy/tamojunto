import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaValidateStep3} from "../../../../helpers/schemasFormValidate";

import {
	StyledButton,
	StyledContainer,
	StyledFooter,
	StyledIcon,
	StyledText,
	StyledView,
} from "./styles";
import TextArea from "../../../../components/TextArea";
import {useSelector} from "react-redux";
import InputMask from "../../../../components/InputMask";
import theme from "../../../../styles/theme";
import {Masks} from "react-native-mask-input";

const Step3 = ({...rest}) => {
	const [canContinue, setContinue] = useState<boolean>(true);
	const [zipcode, setZipcode] = useState<string>("");
	const user = useSelector((handleUserChoices) => handleUserChoices);
	const {
		register,
		setValue,
		getValues,
		watch,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schemaValidateStep3),
	});

	useEffect(() => {
		register("cep");
		register("address");
		register("number");
		register("complement");
		register("state");
		register("city");
	}, [register]);

	useEffect(() => {
		getValues();
	}, [watch()]);

	const onSubmit = (data) => {
		console.log(data);
		return;
		setContinue(false);
	};

	return (
		<StyledContainer
			{...rest}
			onSubmit={handleSubmit(onSubmit)}
			errors={canContinue}
		>
			<StyledView>
				<StyledText>
					Para te ajudar a encontrar outros empreendedores próximos, por favor
					informe o endereço do seu negócio.
				</StyledText>
				<StyledText isBold topDistance="16px">
					CEP
				</StyledText>
				<InputMask
					returnKeyType="next"
					borderColor={errors.cnpj ? theme.colors.error : theme.colors.success}
					placeholderTextColor={
						errors.cnpj ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={errors.cnpj ? errors.cnpj.message : "00000-000"}
					value={zipcode}
					label={"cnpj"}
					keyboardType="number-pad"
					maxLength={9}
					onChangeText={(masked, unmasked) => {
						setZipcode(masked);
						setValue("cnpj", unmasked);
					}}
					mask={Masks.ZIP_CODE}
				/>
				<StyledButton>
					<StyledIcon
						source={require("../../../../assets/icons/iconoir_search.png")}
					/>
				</StyledButton>
				<StyledText isBold topDistance="16px">
					Endereço
				</StyledText>
				<TextArea placeholder="Insira o endereço" />
				<StyledText isBold topDistance="16px">
					Número
				</StyledText>
				<TextArea placeholder="Insira o número" />
				<StyledText isBold topDistance="16px">
					Complemento
				</StyledText>
				<TextArea placeholder="Insira o complemento" />
				<StyledText isBold topDistance="16px">
					Estado
				</StyledText>
				<TextArea placeholder="Defina a senha com letra e números" />
				<StyledText isBold topDistance="16px">
					Munícipio
				</StyledText>
				<TextArea placeholder="Defina a senha com letra e números" />
				<StyledFooter />
			</StyledView>
		</StyledContainer>
	);
};

export default Step3;
