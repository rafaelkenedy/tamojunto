import React from "react";
import Share from "react-native-share";
import {ReduxType} from "../../@types/types";
import {useDispatch, useSelector} from "react-redux";
import {darkMode, setLogged} from "../../store/slices/user";

import {
	StyledDrawerContainer,
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
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
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
		});
	};
	console.log(user);

	return (
		<StyledDrawerContainer nightMode={user.nightMode}>
			<StyledHeaderContainer>
				<StyledUserImage source={require("../../assets/icons/User.png")} />
				<StyledInfo>
					<StyledText
						isBold
						nightMode={user.nightMode}
					>{`${user.user.firstName} ${user.user.lastName}`}</StyledText>
					<StyledText nightMode={user.nightMode} isEmail>
						{user.user.email}
					</StyledText>
				</StyledInfo>
			</StyledHeaderContainer>
			<StyledButton
				onPress={() =>
					navigation.navigate("Stack", {
						screen: "Home",
					})
				}
			>
				<StyledIcon
					nightMode={user.nightMode}
					source={require("../../assets/icons/Home.png")}
				/>
				<StyledText nightMode={user.nightMode}>Inicio</StyledText>
			</StyledButton>
			<StyledButton
				onPress={() =>
					navigation.navigate("Stack", {
						screen: "EditProfile",
					})
				}
			>
				<StyledIcon
					nightMode={user.nightMode}
					source={require("../../assets/icons/Password.png")}
				/>
				<StyledText nightMode={user.nightMode}>Editar Dados e Senha</StyledText>
			</StyledButton>
			<StyledButton>
				<StyledIcon
					nightMode={user.nightMode}
					source={require("../../assets/icons/MiniBell.png")}
				/>
				<StyledText nightMode={user.nightMode}>Notificações</StyledText>
				<StyledNotify>
					<StyledNotifyText>1</StyledNotifyText>
				</StyledNotify>
			</StyledButton>
			<StyledButton>
				<StyledIcon
					nightMode={user.nightMode}
					source={require("../../assets/icons/Saved.png")}
				/>
				<StyledText nightMode={user.nightMode}>Publicações Salvas</StyledText>
			</StyledButton>
			<StyledButton onPress={shared}>
				<StyledIcon
					nightMode={user.nightMode}
					source={require("../../assets/icons/Invite.png")}
				/>
				<StyledText nightMode={user.nightMode}>Convide um amigo</StyledText>
			</StyledButton>
			<StyledButton
				onPress={() =>
					navigation.navigate("Stack", {
						screen: "Contact",
					})
				}
			>
				<StyledIcon
					nightMode={user.nightMode}
					source={require("../../assets/icons/Message.png")}
				/>
				<StyledText nightMode={user.nightMode}>Contato</StyledText>
			</StyledButton>
			<StyledButton onPress={logout}>
				<StyledIcon
					nightMode={user.nightMode}
					source={require("../../assets/icons/Logout.png")}
				/>
				<StyledText nightMode={user.nightMode}>Sair</StyledText>
			</StyledButton>
			<StyledFooterContainer>
				<StyledButton>
					<StyledIcon
						nightMode={user.nightMode}
						source={require("../../assets/icons/Help.png")}
					/>
					<StyledText nightMode={user.nightMode} isBold>
						Esquema de cores
					</StyledText>
				</StyledButton>
				<StyledNightModeContainer nightMode={user.nightMode}>
					<StyledNightModeButton
						nightMode={!user.nightMode}
						onPress={() => dispatch(darkMode(false))}
					>
						<StyledIcon
							nightMode={user.nightMode}
							source={require("../../assets/icons/Light.png")}
						/>
						<StyledText nightMode={user.nightMode} isBold>
							Claro
						</StyledText>
					</StyledNightModeButton>
					<StyledNightModeButton
						nightMode={user.nightMode}
						onPress={() => dispatch(darkMode(true))}
					>
						<StyledIcon
							nightMode={user.nightMode}
							source={require("../../assets/icons/Moon.png")}
						/>
						<StyledText nightMode={user.nightMode} isBold>
							Escuro
						</StyledText>
					</StyledNightModeButton>
				</StyledNightModeContainer>
			</StyledFooterContainer>
		</StyledDrawerContainer>
	);
};

export default DrawerMenu;
