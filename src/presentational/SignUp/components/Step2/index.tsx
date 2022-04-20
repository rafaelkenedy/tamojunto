import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaValidateStep2} from "../../../../helpers/schemasFormValidate";

import {
	StyledCheckBox,
	StyledContainer,
	StyledText,
	StyledView,
	StyledRowView,
	StyledFooter,
} from "./styles";
import TextArea from "../../../../components/TextArea";
import {setData} from "../../../../store/slices/user";
import theme from "../../../../styles/theme";
import Select from "../../../../components/Select";
import {businessType} from "../../../../helpers/businessType";
import InputMask from "../../../../components/InputMask";
import {Masks} from "react-native-mask-input";

const Step2 = ({...rest}) => {
	const [canContinue, setContinue] = useState<boolean>(true);
	const [responsible, setResponsible] = useState<boolean>(false);
	const [terms, setTerms] = useState<boolean>(false);
	const [privacy, setPrivacy] = useState<boolean>(false);
	const [cnpj, setCnpj] = useState<string>("");
	const dispatch = useDispatch();
	const {
		register,
		setValue,
		getValues,
		watch,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schemaValidateStep2),
	});

	useEffect(() => {
		register("businessName");
		register("cnpj");
		register("businessTypeId");
	}, [register]);

	useEffect(() => {
		getValues();
	}, [watch()]);

	const onSubmit = (data) => {
		if (!responsible || !terms || !privacy) return;
		dispatch(setData(data));
		setContinue(false);
	};

	return (
		<StyledContainer
			{...rest}
			onNext={handleSubmit(onSubmit)}
			errors={canContinue}
		>
			<StyledView>
				<StyledText>
					Agora, por favor insira os dados da sua empresa (você precisa ter um
					CNPJ ativo).
				</StyledText>
				<StyledText isBold textSize="16px" topDistance="16px">
					Nome Fantasia
				</StyledText>
				<TextArea
					returnKeyType="next"
					borderColor={
						errors.businessName ? theme.colors.error : theme.colors.success
					}
					placeholderTextColor={
						errors.businessName ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={
						errors.businessName
							? errors.businessName.message
							: "Nome que seus clientes conhecem"
					}
					label={"businessName"}
					onChangeText={(text) => setValue("businessName", text)}
				/>
				<StyledText isBold textSize="16px" topDistance="16px">
					CNPJ
				</StyledText>
				<InputMask
					returnKeyType="next"
					borderColor={errors.cnpj ? theme.colors.error : theme.colors.success}
					placeholderTextColor={
						errors.cnpj ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={errors.cnpj ? errors.cnpj.message : "00.000.000/0000-00"}
					value={cnpj}
					label={"cnpj"}
					keyboardType="number-pad"
					maxLength={18}
					onChangeText={(masked, unmasked) => {
						setCnpj(masked);
						setValue("cnpj", unmasked);
					}}
					mask={Masks.BRL_CNPJ}
				/>
				<StyledText isBold textSize="16px" topDistance="16px">
					Ramo de atuação
				</StyledText>
				<Select
					label={"businessTypeId"}
					items={businessType}
					selectedValue={getValues("businessTypeId")}
					onValueChange={(text) => setValue("businessTypeId", text)}
				/>
				<StyledRowView topDistance="24px">
					<StyledCheckBox
						value={responsible}
						onValueChange={(value) => setResponsible(value)}
					/>
					<StyledText textSize="16px">
						Declaro que sou responsável legal pela empresa.
					</StyledText>
				</StyledRowView>
				<StyledRowView topDistance="16px">
					<StyledCheckBox
						value={terms}
						onValueChange={(value) => setTerms(value)}
					/>
					<StyledText textSize="16px">
						Concordo com os Termos e Condições do tamojunto.
					</StyledText>
				</StyledRowView>
				<StyledRowView topDistance="16px">
					<StyledCheckBox
						value={privacy}
						onValueChange={(value) => setPrivacy(value)}
					/>
					<StyledText textSize="16px">
						Concordo com a Política de Privacidade do tamojunto.
					</StyledText>
				</StyledRowView>
				<StyledFooter />
			</StyledView>
		</StyledContainer>
	);
};

export default Step2;
