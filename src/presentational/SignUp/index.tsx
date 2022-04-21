import React from "react";

import {Keyboard, StatusBar} from "react-native";
import {StyledContainer, StyledSteps} from "./styles";
import SystemNavigationBar from "react-native-system-navigation-bar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Loading from "../../components/Loading";
import {useSelector} from "react-redux";
import {ReduxType} from "../../@types/types";

const SignUp = ({navigation}) => {
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;

	Keyboard.addListener("keyboardDidHide", () => {
		SystemNavigationBar.navigationHide();
	});

	return (
		<StyledContainer>
			<Loading visible={user.loading} />
			<StatusBar hidden />
			<StyledSteps>
				<Step1 />
				<Step2 />
				<Step3 navigation={navigation} />
			</StyledSteps>
		</StyledContainer>
	);
};

export default SignUp;
