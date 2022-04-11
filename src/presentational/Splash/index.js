import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import LottieView from 'lottie-react-native'

import {View} from 'react-native';

const Splash = () => {
	return (
		<View>
			<LottieView source={require('../../assets/animations/splash.json') } autoPlay loop/>
		</View>
	);
};

export default Splash;
