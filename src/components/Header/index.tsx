import React from 'react';
import {StyledButton, StyledContainer, StyledMenu, StyledTitle} from './styles';

const Header = () => {
	return (
		<>
			<StyledContainer>
				<StyledButton onPress={() => {}}>
					<StyledMenu source={require('../../assets/icons/menu.png')} />
				</StyledButton>
				<StyledTitle>tamo</StyledTitle>
				<StyledTitle textWeight={'bold'}>junto</StyledTitle>
			</StyledContainer>
		</>
	);
};

export default Header;
