import React, {useEffect} from "react";
import {useIsFocused} from "@react-navigation/native";
import SystemNavigationBar from "react-native-system-navigation-bar";

import {StatusBar} from "react-native";
import LoadButton from "../../components/LoadButton";
import {StyledContainer, StyledImage, StyledButtonContainer} from "./styles";

const Welcome = ({navigation}) => {
	const isFocused = useIsFocused();

	useEffect(() => {
		SystemNavigationBar.navigationHide();
	}, [isFocused]);

	return (
		<StyledContainer>
			<StatusBar hidden />
			<StyledImage source={require("../../assets/images/logo.png")} />
			<StyledButtonContainer>
				<LoadButton
					buttonTitle="ENTRAR"
					action={() =>
						navigation.navigate("Stack", {
							screen: "Login",
						})
					}
				/>
				<LoadButton
					isComment
					buttonTitle="CRIAR CONTA"
					action={() =>
						navigation.navigate("Stack", {
							screen: "SignUp",
						})
					}
				/>
			</StyledButtonContainer>
		</StyledContainer>
	);
};

export default Welcome;
