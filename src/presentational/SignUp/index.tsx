import React, {useState} from 'react';

import {StatusBar} from 'react-native';
import {ProgressSteps, ProgressStep} from '../../components/ProgressSteps';
import {
	StyledView,
	StyledContainer,
	StyledText,
	StyledTermsWrap,
} from './styles';
import TextArea from '../../components/TextArea';
import CheckBox from '@react-native-community/checkbox';

export function SignUp() {
	const [isformComplete, setFormComplete] = useState(true);
	const [email, setEmail] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passConfirmation, setPassConfirmation] = useState<string>('');
	const [checked, setChecked] = useState<boolean>(false);
	const [fantasyName, setFantasyName] = useState<string>('');
	const [cnpj, setCnpj] = useState<string>('');
	const [ramoAtuacao, setRamoAtuacao] = useState<string>('');
	const [toggleCheckBox, setToggleCheckBox] = useState(false);
	const [cep, setCep] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [addressNum, setAddressNum] = useState<string>('');
	const [addressComplement, setAddressComplement] = useState<string>('');

	return (
		<StyledContainer
			source={require('../../assets/images/background_variation.png')}>
			<StatusBar hidden />

			<ProgressSteps
				progressBarColor="#827E75"
				completedProgressBarColor="#0D4A4E"
				activeStepNumColor="#827E75"
				completedStepIconColor="#0D4A4E"
				labelColor="#827E75"
				activeStepIconBorderColor="#0D4A4E"
				activeLabelColor="#0D4A4E"
				labelFontSize={18}
				disabledStepIconColor="#827E75">
				<ProgressStep label="Passo 1" nextBtnText="Próximo" errors={false}>
					<StyledView>
						<StyledText topDistance="10px">
							{
								'Boas vindas! Informe os dados abaixo para fazermos seu cadastro.'
							}
						</StyledText>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Nome completo:'}
						</StyledText>

						<TextArea
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder="insira nome e sobrenome"
							value={userName}
							onChangeText={(text) => setUserName(text)}
							blurOnSubmit={false}							
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'E-mail:'}
						</StyledText>

						<TextArea
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder="email@email.com"
							value={email}
							onChangeText={(text) => setEmail(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Defina sua senha'}
						</StyledText>
						<TextArea
							autoCapitalize="none"
							secureTextEntry
							value={password}
							onChangeText={(text) => setPassword(text)}
							placeholder="defina sua senha com letras e números"
						/>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Confirme sua senha'}
						</StyledText>
						<TextArea
							autoCapitalize="none"
							secureTextEntry
							value={passConfirmation}
							onChangeText={(text) => setPassConfirmation(text)}
							placeholder="repita a senha definida acima"
						/>

						{!userName && (
							<StyledText topDistance="10px">
								{'Todos os campos são obrigatórios.'}
							</StyledText>
							
						)}
						
						
						
						
					</StyledView>
				</ProgressStep>

				<ProgressStep
					label="Passo 2"
					nextBtnText="Próximo"
					previousBtnText="Anterior">
					<StyledView>
						<StyledText topDistance="10px">
							{
								'Agora, por favor insira os dados da sua empresa (você precisa ter um CNPJ ativo).'
							}
						</StyledText>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Nome Fantasia'}
						</StyledText>

						<TextArea
							placeholder="Nome que seus clientes conhecem"
							value={fantasyName}
							onChangeText={(text) => setFantasyName(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'CNPJ'}
						</StyledText>

						<TextArea
							placeholder="00.000.000/0000-00"
							value={cnpj}
							onChangeText={(text) => setCnpj(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Ramo de atuação'}
						</StyledText>
						<TextArea
							value={ramoAtuacao}
							onChangeText={(text) => setRamoAtuacao(text)}
							placeholder="Restaurante"
						/>
						<StyledTermsWrap>
							<CheckBox
								disabled={false}
								value={toggleCheckBox}
								onValueChange={(newValue) => setToggleCheckBox(newValue)}
							/>
							<StyledText textSize="16px">
								{'Declaro que sou responsável legal pela empresa'}
							</StyledText>
						</StyledTermsWrap>
						<StyledTermsWrap>
							<CheckBox
								disabled={false}
								value={toggleCheckBox}
								onValueChange={(newValue) => setToggleCheckBox(newValue)}
							/>
							<StyledText textSize="16px">
								{'Concordo com os temos e condições do tamo junto'}
							</StyledText>
						</StyledTermsWrap>
						<StyledTermsWrap>
							<CheckBox
								disabled={false}
								value={toggleCheckBox}
								onValueChange={(newValue) => setToggleCheckBox(newValue)}
							/>
							<StyledText textSize="16px">
								{'Concordo com a política de privacidade do tamojunto.'}
							</StyledText>
						</StyledTermsWrap>
					</StyledView>
				</ProgressStep>

				<ProgressStep
					label="Passo 3"
					finishBtnText="Finalizar"
					previousBtnText="Anterior">
					<StyledView>
						<StyledText topDistance="10px">
							{
								'Para te ajudar a encontrar outros empreendedores próximos, por favor informe o endereço do seu negócio.'
							}
						</StyledText>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'CEP'}
						</StyledText>

						<TextArea
							autoCapitalize="none"
							placeholder="00000-000"
							value={cep}
							onChangeText={(text) => setCep(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Endereço:'}
						</StyledText>

						<TextArea
							autoCapitalize="none"
							placeholder="Rua Fulana de Tal"
							value={address}
							onChangeText={(text) => setAddress(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Número'}
						</StyledText>
						<TextArea
							value={addressNum}
							onChangeText={(text) => setAddressNum(text)}
							placeholder="XX"
						/>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Complemento'}
						</StyledText>
						<TextArea
							autoCapitalize="none"
							secureTextEntry
							value={addressComplement}
							onChangeText={(text) => setAddressComplement(text)}
							placeholder="Loja XX"
						/>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Estado'}
						</StyledText>
						<TextArea
							autoCapitalize="none"
							secureTextEntry
							value={password}
							onChangeText={(text) => setPassword(text)}
							placeholder="Estado"
						/>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Município'}
						</StyledText>
						<TextArea
							autoCapitalize="none"
							secureTextEntry
							value={password}
							onChangeText={(text) => setPassword(text)}
							placeholder="Município"
						/>
					</StyledView>
				</ProgressStep>
			</ProgressSteps>
		</StyledContainer>
	);
}
