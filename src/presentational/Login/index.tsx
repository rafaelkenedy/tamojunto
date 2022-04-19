import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

import {
	StyledContainer,
	StyledFormContainer,
	StyledViewLocker,
	StyledLogo,
	StyledSocialMediaLogo,
	StyledText,
	StyledInputContainer,
	StyledButtonsContainer,
	StyleButton,
} from './styles';
import LoadButton from '../../components/LoadButton';
import TextArea from '../../components/TextArea';
import {postLogin} from '../../services/auth';
import {useIsFocused} from '@react-navigation/native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const isFocused = useIsFocused();

	useEffect(() => {
		SystemNavigationBar.navigationHide();
	}, [isFocused]);

	const requestLogin = async () => {
		const result = await postLogin({email, password});
		console.log(result);
	};

	return (
		<StyledContainer>
			<StatusBar hidden />
			<StyledFormContainer>
				<StyledViewLocker>
					<StyledLogo source={require('../../assets/icons/LoginLogo.png')} />
					<StyledText topDistance='10px'>Que bom te ver de novo!</StyledText>
				</StyledViewLocker>
				<StyledInputContainer>
					<StyledText textSize='16px' textWeight='bold' topDistance='30px'>Email:</StyledText>
					<TextArea
						autoCapitalize='none'
						keyboardType='email-address'
						placeholder='Digite seu email...'
						value={email}
						onChangeText={(text) => setEmail(text)}
						blurOnSubmit={false}
						autoCorrect={false}
						returnKeyType='next'
					/>
					<StyledText
						textSize='16px'
						textWeight='bold'
						topDistance='15px'
					>Senha:</StyledText>
					<TextArea
						autoCapitalize='none'
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
						placeholder='Digite sua senha...'
						onSubmitEditing={requestLogin}
					/>
					<LoadButton buttonTitle='Entrar' action={requestLogin} />
				</StyledInputContainer>
				<StyledViewLocker>
					<StyledText>Ou use suas redes sociais:</StyledText>
					<StyledButtonsContainer>
						<StyleButton><StyledSocialMediaLogo
							source={require('../../assets/icons/Facebook.png')} /></StyleButton>
						<StyleButton><StyledSocialMediaLogo
							source={require('../../assets/icons/Instagram.png')} /></StyleButton>
						<StyleButton><StyledSocialMediaLogo
							source={require('../../assets/icons/Google.png')} /></StyleButton>
					</StyledButtonsContainer>
					<StyledText textSize='18px'>Ainda não tem cadastro? Então</StyledText>
					<StyleButton>
						<StyledText textSize='18px' textWeight='bold'>cadastre-se aqui</StyledText></StyleButton>
				</StyledViewLocker>
			</StyledFormContainer>
		</StyledContainer>
	);
};

export default Login;
