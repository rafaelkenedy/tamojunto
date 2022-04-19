import React from "react";

import {Keyboard, StatusBar} from 'react-native';
import {StyledContainer, StyledSteps} from "./styles";
import SystemNavigationBar from "react-native-system-navigation-bar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const SignUp = () => {
	Keyboard.addListener('keyboardDidHide', () => {
		SystemNavigationBar.navigationHide();
	});

	return (
		<StyledContainer>
			<StatusBar hidden />
			<StyledSteps>
				<Step1 />
				<Step2 />
				<Step3 />
			</StyledSteps>
		</StyledContainer>
	);
};

export default SignUp;
