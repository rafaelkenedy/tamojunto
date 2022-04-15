import React, {useState} from 'react';

import {StatusBar} from 'react-native';
import {ProgressSteps, ProgressStep} from '../../components/ProgressSteps';
import {StyledView, StyledContainer, StyledText} from './styles';
import TextArea from '../../components/TextArea';


export function SignUp() {
	const [isformComplete, setFormComplete] = useState(true);
	const [email, setEmail] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [checked, setChecked] = useState<boolean>(false);

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
				<ProgressStep label="Passo 1" nextBtnText="Próximo">
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
							value={password}
							onChangeText={(text) => setPassword(text)}
							placeholder="repita a senha definida acima"
						/>

						<StyledText topDistance="10px">
							{'Todos os campos são obrigatórios.'}
						</StyledText>
						{/* <LoadButton buttonTitle="Continuar" /> */}
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
							value={userName}
							onChangeText={(text) => setUserName(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'CNPJ'}
						</StyledText>

						<TextArea
							placeholder="00.000.000/0000-00"
							value={email}
							onChangeText={(text) => setEmail(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Ramo de atuação'}
						</StyledText>
						<TextArea
							value={password}
							onChangeText={(text) => setPassword(text)}
							placeholder="Restaurante"
						/>

						
					</StyledView>
				</ProgressStep>

				< ProgressStep
					label="Passo 3"
					finishBtnText="Enviar"
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
							keyboardType="email-address"
							placeholder="00000-000"
							value={userName}
							onChangeText={(text) => setUserName(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Endereço:'}
						</StyledText>

						<TextArea
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder="Rua Fulana de Tal"
							value={email}
							onChangeText={(text) => setEmail(text)}
							blurOnSubmit={false}
						/>
						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Número'}
						</StyledText>
						<TextArea
							autoCapitalize="none"
							secureTextEntry
							value={password}
							onChangeText={(text) => setPassword(text)}
							placeholder="XX"
						/>

						<StyledText textSize="16px" textWeight="bold" topDistance="24px">
							{'Complemento'}
						</StyledText>
						<TextArea
							autoCapitalize="none"
							secureTextEntry
							value={password}
							onChangeText={(text) => setPassword(text)}
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
