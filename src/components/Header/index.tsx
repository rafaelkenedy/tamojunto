import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyledButton, StyledContainer, StyledMenu, StyledTitle} from './styles';

const Header = () => {
	const {navigate}: any = useNavigation();
	return (
		<>
			<StyledContainer>
				<StyledButton
					onPress={() => {
						navigate('FrontPost');
					}}>
					<StyledMenu source={require('../../assets/icons/menu.png')} />
				</StyledButton>
				<StyledTitle>tamo</StyledTitle>
				<StyledTitle textWeight={'bold'}>junto</StyledTitle>
			</StyledContainer>
		</>
	);
};

export default Header;
