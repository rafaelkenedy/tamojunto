import React from 'react';

import {StatusBar, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LoadButton from '../../components/LoadButton';
import {
	StyledView,
	StyledBackground,
	StyledImage,
	StyledButtonContainer,
} from './styles';

export function Welcome() {
	return (
		<StyledView>
			<StatusBar hidden />
			<StyledBackground
				source={require('../../assets/images/img_background.png')}>
				<ScrollView>
					<StyledImage source={require('../../assets/images/logo.png')} />

					<StyledButtonContainer>
						<LoadButton buttonTitle="ENTRAR" />
						<LoadButton buttonTitle="CRIAR CONTA" />
					</StyledButtonContainer>
				</ScrollView>
			</StyledBackground>
		</StyledView>
	);
}
