import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
	StyledContainer,
	StyledButtonContainer,
	StyledButtonText,
} from './styles';

const RedGreenButton = ({redTitle = 'voltar', greenTitle = 'comentar'}) => {
	const {navigate, goBack} = useNavigation();
	return (
		<>
			<StyledContainer>
				<StyledButtonContainer buttonColor>
					<StyledButtonText textColor onPress={() => goBack()}>
						{redTitle}
					</StyledButtonText>
				</StyledButtonContainer>
				<StyledButtonContainer onPress={() => navigate('CreatePostOrComment')}>
					<StyledButtonText>{greenTitle}</StyledButtonText>
				</StyledButtonContainer>
			</StyledContainer>
		</>
	);
};

export default RedGreenButton;
