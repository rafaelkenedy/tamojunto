import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {StatusBar} from 'react-native';

export default function Splash() {
	return (
		<View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
			<StatusBar hidden />
			<LottieView
				source={require('../../assets/animations/splash.json')}
				autoPlay
				loop
				autoSize
			/>
		</View>
	);
}
