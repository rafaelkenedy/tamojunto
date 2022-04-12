import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyledContainer, StyledIcon, StyledButton, StyledText} from './styles';
import {useSelector} from 'react-redux';

const Breadcrumb = () => {
	const {theme}: any = useSelector((handleUserChoices) => handleUserChoices);
	const {navigate} = useNavigation();

	return (
		<>
			<StyledContainer>
				<StyledIcon source={require('../../assets/icons/Homebc.png')} />
				<StyledButton onPress={() => navigate('Home')}>
					<StyledText>Home</StyledText>
				</StyledButton>
				{theme !== '' && (
					<>
						<StyledIcon
							source={require('../../assets/icons/Chevron-right.png')}
						/>
						<StyledText isActive>{theme}</StyledText>
					</>
				)}
			</StyledContainer>
		</>
	);
};

export default Breadcrumb;
