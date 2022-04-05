import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyledContainer, StyledIcon, StyledButton, StyledText} from './styles';

const Breadcrumb = () => {
	const {navigate} = useNavigation();
	return (
		<>
			<StyledContainer>
				<StyledIcon source={require('../../assets/icons/Homebc.png')} />
				<StyledButton onPress={() => navigate('Home')}>
					<StyledText>Home</StyledText>
				</StyledButton>
				<StyledIcon source={require('../../assets/icons/Chevron-right.png')} />
				<StyledText isActive>Administração</StyledText>
			</StyledContainer>
		</>
	);
};

export default Breadcrumb;
