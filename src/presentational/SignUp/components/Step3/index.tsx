import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaValidateStep3} from "../../../../helpers/schemasFormValidate";

import {StyledContainer, StyledFooter, StyledText, StyledView} from "./styles";
import TextArea from "../../../../components/TextArea";
import {useSelector} from "react-redux";
import InputMask from "../../../../components/InputMask";
import theme from "../../../../styles/theme";
import {Masks} from "react-native-mask-input";
import {getZipCodeData} from "../../../../services/searchZipCode";
import Select from "../../../../components/Select";
import {statesId} from "../../../../helpers/states";
import {getCities} from "../../../../services/locations";
import {postUser} from "../../../../services/users";
import {ReduxType} from "../../../../@types/types";

const Step3 = ({...rest}) => {
	const [canContinue, setContinue] = useState<boolean>(true);
	const [cities, setCities] = useState<{value: string; label: string}[]>([]);
	const [zipcode, setZipcode] = useState<string>("");
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;
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
		register("zipcode");
		register("address");
		register("number");
		register("complement");
		register("stateId");
		register("cityId");
	}, [register]);

	useEffect(() => {
		getValues();
	}, [watch()]);

	useEffect(() => {
		getCity();
	}, [watch("stateId")]);

	const onSubmit = async (data) => {
		const response = await postUser({
			email: user.register.email,
			password: user.register.password,
			firstName: user.register.firstName,
			lastName: user.register.lastName,
			businessName: user.register.businessName,
			cnpj: user.register.cnpj,
			phone: user.register.phone,
			businessTypeId: user.register.businessTypeId,
			cityId: data.cityId,
			stateId: data.stateId,
		});
		console.log(response);
		return;
		setContinue(false);
	};

	const getCity = async () => {
		const result = await getCities(getValues("stateId"));
		let citiesMap: {value: string; label: string}[] = [];
		if (!result) return;
		if (result.length <= 1) return;
		result.cities.map((city) => {
			citiesMap.push({value: city.id, label: city.name});
		});
		setCities(citiesMap);
	};

	const fillZipcode = async (zipcode: string) => {
		if (zipcode.length === 8) {
			const result = await getZipCodeData(zipcode);
			const stateValue = statesId.find((state) => state.uf === result.uf);
			setValue("address", result.logradouro + ", " + result.bairro);
			setValue("stateId", stateValue?.value);
		}
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
					label={"zipcode"}
					keyboardType="number-pad"
					maxLength={9}
					onChangeText={(masked, unmasked) => {
						setZipcode(unmasked);
						fillZipcode(unmasked);
						setValue("zipcode", unmasked);
					}}
					mask={Masks.ZIP_CODE}
				/>
				<StyledText isBold topDistance="16px">
					Endereço
				</StyledText>
				<TextArea
					returnKeyType="next"
					borderColor={
						errors.address ? theme.colors.error : theme.colors.success
					}
					placeholderTextColor={
						errors.address ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={
						errors.address ? errors.address.message : "Insira o endereço"
					}
					value={getValues("address")}
					onChangeText={(text) => setValue("address", text)}
					label={"address"}
				/>
				<StyledText isBold topDistance="16px">
					Número
				</StyledText>
				<TextArea
					returnKeyType="next"
					borderColor={
						errors.number ? theme.colors.error : theme.colors.success
					}
					placeholderTextColor={
						errors.number ? theme.colors.error : theme.colors.fuscous_gray
					}
					placeholder={
						errors.number ? errors.number.message : "Insira o número"
					}
					onChangeText={(text) => setValue("number", text)}
					label={"number"}
				/>
				<StyledText isBold topDistance="16px">
					Complemento
				</StyledText>
				<TextArea
					returnKeyType="next"
					placeholder={"Insira o complemento"}
					onChangeText={(text) => setValue("complement", text)}
					label={"complement"}
				/>
				<StyledText isBold topDistance="16px">
					Estado
				</StyledText>
				<Select
					label={"stateId"}
					items={statesId}
					selectedValue={getValues("stateId")}
					onValueChange={(text) => {
						setValue("stateId", text);
					}}
				/>
				<StyledText isBold topDistance="16px">
					Munícipio
				</StyledText>
				<Select
					label={"cityId"}
					items={cities}
					selectedValue={getValues("cityId")}
					onValueChange={(text) => setValue("cityId", text)}
				/>
				<StyledFooter />
			</StyledView>
		</StyledContainer>
	);
};

export default Step3;
