import React from 'react';

import {StyledContainer, StyledLottie} from './styles';
import {StatusBar} from 'react-native';

const Splash = () => {
	return (
		<StyledContainer>
			<StatusBar hidden />
			<StyledLottie source={require('../../assets/animations/splash.json')} />
		</StyledContainer>
	);
};

export default Splash;
