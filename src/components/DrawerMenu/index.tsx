import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {
	StyledDrawlerContainer,
	StyledHeaderContainer,
	StyledInfo,
	StyledButton,
	StyledUserImage,
	StyledIcon,
	StyledText,
	StyledNotify,
	StyledNotifyText,
	StyledFooterContainer,
	StyledNightModeContainer,
	StyledNightModeButton,
} from './styles';

const DrawerMenu = () => {
	const {navigate} = useNavigation();

	return (
		<StyledDrawlerContainer>
			<StyledHeaderContainer>
				<StyledUserImage source={require('../../assets/icons/User.png')} />
				<StyledInfo>
					<StyledText isBold>Kevin</StyledText>
					<StyledText isEmail>oi@oi.com.br</StyledText>
				</StyledInfo>
			</StyledHeaderContainer>
			<StyledButton onPress={() => navigate('Home')}>
				<StyledIcon source={require('../../assets/icons/Home.png')} />
				<StyledText>Inicio</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require('../../assets/icons/Setting.png')} />
				<StyledText>Ajustes</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require('../../assets/icons/Bell.png')} />
				<StyledText>Notificações</StyledText>
				<StyledNotify>
					<StyledNotifyText>75</StyledNotifyText>
				</StyledNotify>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require('../../assets/icons/Saved.png')} />
				<StyledText>Publicações Salvas</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require('../../assets/icons/Invite.png')} />
				<StyledText>Convide um amigo</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require('../../assets/icons/Message.png')} />
				<StyledText>Contato</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require('../../assets/icons/Logout.png')} />
				<StyledText>Sair</StyledText>
			</StyledButton>
			<StyledFooterContainer>
				<StyledButton>
					<StyledIcon source={require('../../assets/icons/Help.png')} />
					<StyledText isBold>Esquema de cores</StyledText>
				</StyledButton>
				<StyledNightModeContainer>
					<StyledNightModeButton nightMode>
						<StyledIcon source={require('../../assets/icons/Light.png')} />
						<StyledText isBold>Claro</StyledText>
					</StyledNightModeButton>
					<StyledNightModeButton>
						<StyledIcon source={require('../../assets/icons/Moon.png')} />
						<StyledText isBold>Escuro</StyledText>
					</StyledNightModeButton>
				</StyledNightModeContainer>
			</StyledFooterContainer>
		</StyledDrawlerContainer>
	);
};

export default DrawerMenu;
