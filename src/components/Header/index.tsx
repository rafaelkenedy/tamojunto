import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import DrawlerMenu from '../DrawlerMenu';
import {StyledButton, StyledContainer, StyledMenu, StyledTitle} from './styles';

const Header = () => {
	const [active, setActive] = useState<boolean>(false);

	return (
		<>
			<DrawlerMenu show={active} />
			<StyledContainer>
				<StyledButton onPress={() => setActive(!active)}>
					<StyledMenu source={require('../../assets/icons/menu.png')} />
				</StyledButton>
				<StyledTitle>tamo</StyledTitle>
				<StyledTitle textWeight={'bold'}>junto</StyledTitle>
			</StyledContainer>
		</>
	);
};

export default Header;
