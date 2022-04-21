import React from "react";
import Share from "react-native-share";
import {ReduxType} from '../../@types/types';
import {useDispatch, useSelector} from 'react-redux';
import {setLogged} from '../../store/slices/user';

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
} from "./styles";

const DrawerMenu = ({navigation}) => {
	const dispatch = useDispatch();
	const user: ReduxType = useSelector((handleUserChoices) => handleUserChoices
	) as ReduxType;

	const shared = async () => {
		await Share.open({
			message: "Venha fazer parte do tamojunto!",
		}).catch((e) => {
			console.log(e);
		});
	};

	const logout = () => {
		dispatch(setLogged(false));
		navigation.navigate("Stack", {
			screen: "Welcome",
		})
	};
	console.log(user);

	return (
		<StyledDrawlerContainer>
			<StyledHeaderContainer>
				<StyledUserImage source={require("../../assets/icons/User.png")} />
				<StyledInfo>
					<StyledText isBold>{`${user.user.firstName} ${user.user.lastName}`}</StyledText>
					<StyledText isEmail>{user.user.email}</StyledText>
				</StyledInfo>
			</StyledHeaderContainer>
			<StyledButton onPress={() => navigation.navigate("Stack", {
				screen: "Home",
			})}>
				<StyledIcon source={require("../../assets/icons/Home.png")} />
				<StyledText>Inicio</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require("../../assets/icons/Password.png")} />
				<StyledText>Editar Dados e Senha</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require("../../assets/icons/MiniBell.png")} />
				<StyledText>Notificações</StyledText>
				<StyledNotify>
					<StyledNotifyText>75</StyledNotifyText>
				</StyledNotify>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require("../../assets/icons/Saved.png")} />
				<StyledText>Publicações Salvas</StyledText>
			</StyledButton>
			<StyledButton onPress={shared}>
				<StyledIcon source={require("../../assets/icons/Invite.png")} />
				<StyledText>Convide um amigo</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon source={require("../../assets/icons/Message.png")} />
				<StyledText>Contato</StyledText>
			</StyledButton>
			<StyledButton onPress={logout}>
				<StyledIcon source={require("../../assets/icons/Logout.png")} />
				<StyledText>Sair</StyledText>
			</StyledButton>
			<StyledFooterContainer>
				<StyledButton>
					<StyledIcon source={require("../../assets/icons/Help.png")} />
					<StyledText isBold>Esquema de cores</StyledText>
				</StyledButton>
				<StyledNightModeContainer>
					<StyledNightModeButton nightMode>
						<StyledIcon source={require("../../assets/icons/Light.png")} />
						<StyledText isBold>Claro</StyledText>
					</StyledNightModeButton>
					<StyledNightModeButton>
						<StyledIcon source={require("../../assets/icons/Moon.png")} />
						<StyledText isBold>Escuro</StyledText>
					</StyledNightModeButton>
				</StyledNightModeContainer>
			</StyledFooterContainer>
		</StyledDrawlerContainer>
	);
};

export default DrawerMenu;
