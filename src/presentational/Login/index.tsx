import React from 'react';

import {StatusBar, View} from 'react-native';
import LoadButton from '../../components/LoadButton';
import TextArea from '../../components/TextArea';
import {
	StyledView,
	StyledBackground,
	StyledImage,
	StyledText,
	StyledInputEmail,
	StyledLabel,
	StyledInputPass,
	StyledFormContainer,
	StyledButtonContainer,
} from './styles';

export function Login() {
	return (
		<StyledView>
			<StatusBar  hidden/>
			<StyledBackground
				source={require('../../assets/images/background_variation.png')}>
				<StyledImage source={require('../../assets/images/logo.png')}/>
				<StyledText>{'Que bom te ver de novo!'}</StyledText> 
				<StyledFormContainer>
					<StyledLabel>{'Email:'}</StyledLabel>
					<StyledInputEmail/>
					<StyledLabel>{'Senha:'}</StyledLabel>
					<StyledInputPass />
				</StyledFormContainer>				
                <StyledButtonContainer>                
                    <LoadButton buttonTitle="ENTRAR" />                    
				</StyledButtonContainer>
				<StyledText>{'Ou use suas redes sociais:'}</StyledText> 
			</StyledBackground>
		</StyledView>
	);
}
