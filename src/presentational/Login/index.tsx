import React, {useEffect, useState} from "react";
import {Keyboard, StatusBar} from "react-native";

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
} from "./styles";
import LoadButton from "../../components/LoadButton";
import TextArea from "../../components/TextArea";
import {postLogin} from "../../services/auth";
import SystemNavigationBar from "react-native-system-navigation-bar";
import Loading from "../../components/Loading";
import {ReduxType} from "../../@types/types";
import {useDispatch, useSelector} from "react-redux";
import {setLogged, setUserData, startLoading} from "../../store/slices/user";
import CustomAlert from "../../components/CustomAlert";

const Login = ({navigation}) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [alertMessage, setAlertMessage] = useState<string>("");
	const dispatch = useDispatch();
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;

	useEffect(() => {
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	}, [showAlert]);

	Keyboard.addListener("keyboardDidHide", () => {
		SystemNavigationBar.navigationHide();
	});

	const requestLogin = async () => {
		dispatch(startLoading(true));
		const result = await postLogin({email, password});
		dispatch(startLoading(false));
		if (!result) {
			setAlertMessage("Login e/ou senha incorretos");
			setShowAlert(true);
		} else {
			dispatch(setUserData(result.user));
			dispatch(setLogged(true));
			navigation.navigate("Stack", {
				screen: "Home",
			});
		}
	};

	return (
		<StyledContainer>
			<Loading visible={user.loading} />
			<CustomAlert visible={showAlert} message={alertMessage} />
			<StatusBar hidden />
			<StyledFormContainer>
				<StyledViewLocker>
					<StyledLogo source={require("../../assets/icons/LoginLogo.png")} />
					<StyledText topDistance="10px">Que bom te ver de novo!</StyledText>
				</StyledViewLocker>
				<StyledInputContainer>
					<StyledText textSize="16px" textWeight="bold" topDistance="30px">
						Email:
					</StyledText>
					<TextArea
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="Digite seu email..."
						value={email}
						onChangeText={(text) => setEmail(text)}
						blurOnSubmit={false}
						autoCorrect={false}
						returnKeyType="next"
					/>
					<StyledText textSize="16px" textWeight="bold" topDistance="15px">
						Senha:
					</StyledText>
					<TextArea
						autoCapitalize="none"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
						placeholder="Digite sua senha..."
						onSubmitEditing={requestLogin}
					/>
					<LoadButton buttonTitle="Entrar" action={requestLogin} />
				</StyledInputContainer>
				<StyledViewLocker>
					<StyledText>Ou use suas redes sociais:</StyledText>
					<StyledButtonsContainer>
						<StyleButton>
							<StyledSocialMediaLogo
								source={require("../../assets/icons/Facebook.png")}
							/>
						</StyleButton>
						<StyleButton>
							<StyledSocialMediaLogo
								source={require("../../assets/icons/Instagram.png")}
							/>
						</StyleButton>
						<StyleButton>
							<StyledSocialMediaLogo
								source={require("../../assets/icons/Google.png")}
							/>
						</StyleButton>
					</StyledButtonsContainer>
					<StyledText textSize="18px">Ainda não tem cadastro? Então</StyledText>
					<StyleButton>
						<StyledText
							textSize="18px"
							textWeight="bold"
							onPress={() =>
								navigation.navigate("Stack", {
									screen: "SignUp",
								})
							}
						>
							cadastre-se aqui
						</StyledText>
					</StyleButton>
				</StyledViewLocker>
			</StyledFormContainer>
		</StyledContainer>
	);
};

export default Login;
