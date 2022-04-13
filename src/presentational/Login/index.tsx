import React from 'react';

import {StatusBar, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
	StyledLogosBtnContainer,
	StyledLogo,
	StyledFooter
} from './styles';

export function Login() {
	return (
		<StyledView>
			<StatusBar  hidden/>
			<StyledBackground
				source={require('../../assets/images/background_variation.png')}>
					<ScrollView>
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
				<StyledLogosBtnContainer>
					<StyledLogo source={require('../../assets/images/lg_facebook.png')}/>
					<StyledLogo source={require('../../assets/images/lg_google.png')}/>
					<StyledLogo source={require('../../assets/images/lg_instagram.png')}/>
				</StyledLogosBtnContainer>
				<StyledFooter>{'Ainda não tem cadastro? Então'}</StyledFooter> 
				</ScrollView>
			</StyledBackground>
		</StyledView>
	);
}
