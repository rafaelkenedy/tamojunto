import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
	StyledContainer,
	StyledButtonContainer,
	StyledButtonText,
} from './styles';

const RedGreenButton = ({redTitle = 'voltar', greenTitle = 'comentar'}) => {
	const {goBack} = useNavigation();
	return (
		<>
			<StyledContainer>
				<StyledButtonContainer buttonColor>
					<StyledButtonText textColor onPress={() => goBack()}>
						{redTitle}
					</StyledButtonText>
				</StyledButtonContainer>
				<StyledButtonContainer>
					<StyledButtonText>{greenTitle}</StyledButtonText>
				</StyledButtonContainer>
			</StyledContainer>
		</>
	);
};

export default RedGreenButton;
