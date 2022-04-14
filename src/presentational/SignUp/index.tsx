import React, { useState } from 'react';

import {StatusBar, View, Text} from 'react-native';
import LoadButton from '../../components/LoadButton';
import {
	ScrollView,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native-gesture-handler';
import {
	StyledView,
	StyledStepHeader,
	StyledCheckTitle,
	StyledStepWrap,
	StyledBackground,
	StyledImage,
	StyledText,
	StyledInputEmail,
	StyledLabel,
	StyledInputPass,
	StyledFormContainer,
	StyledButtonContainer,
	StyledLogosBtnContainer,
	StyledLogo,
	StyledFooter,
	StyledFooterContainer,
	StyledFooterLink,
	StyledInputName,
	StyledStepIcon,
} from './styles';

export function SignUp() {

	const [isformComplete, setFormComplete] = useState(true);

	return (
		<StyledView>
			<StatusBar hidden />
			<StyledBackground
				source={require('../../assets/images/background_variation.png')}>
				<ScrollView>
					<StyledStepHeader>
						<StyledStepWrap>
							<StyledCheckTitle>{'Passo 1'}</StyledCheckTitle>
							<StyledStepIcon
								source={require('../../assets/icons/step_checked.png')}
							/>
						</StyledStepWrap>

						<StyledStepWrap>
							<StyledCheckTitle>{'Passo 2'}</StyledCheckTitle>
							<StyledStepIcon
								source={require('../../assets/icons/step_unchecked.png')}
							/>
						</StyledStepWrap>

						<StyledStepWrap>
							<StyledCheckTitle>{'Passo 3'}</StyledCheckTitle>
							<StyledStepIcon
								source={require('../../assets/icons/step_unchecked.png')}
							/>
						</StyledStepWrap>
					</StyledStepHeader>
					<StyledFooterContainer>
						<StyledFooter>
							{
								'Boas vindas! Informe os dados abaixo para fazermos seu cadastro.'
							}
						</StyledFooter>
					</StyledFooterContainer>

					<StyledFormContainer>
						<StyledLabel>{'Nome completo:'}</StyledLabel>
						<StyledInputName />
						<StyledLabel>{'E-mail:'}</StyledLabel>
						<StyledInputEmail />
						<StyledLabel>{'Defina sua senha:'}</StyledLabel>
						<StyledInputPass />
						<StyledLabel>{'Confirme sua senha:'}</StyledLabel>
						<StyledInputPass />
					</StyledFormContainer>

					{!isformComplete&&(
						<StyledFooterContainer>
							<StyledFooter>{'Todos os campos são obrigatórios.'}</StyledFooter>
						</StyledFooterContainer>
						)
					}

					<StyledButtonContainer>
						<LoadButton buttonTitle="CONTINUAR >" />
					</StyledButtonContainer>					
				</ScrollView>
			</StyledBackground>
		</StyledView>
	);
}
