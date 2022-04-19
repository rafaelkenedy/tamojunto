import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import {
	StyledContainer,StyledSteps,
} from './styles';
import {useIsFocused} from '@react-navigation/native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const SignUp = () => {
	const isFocused = useIsFocused();

	useEffect(() => {
		SystemNavigationBar.navigationHide();
	}, [isFocused]);

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
}

export default SignUp;
