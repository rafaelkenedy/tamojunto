import React from 'react';

import {StyledContainer, StyledInput, StyledLogo} from './styles';

const SearchBar = () => {
	return (
		<>
			<StyledContainer>
				<StyledLogo source={require('../../assets/icons/iconoir_search.png')} />
				<StyledInput placeholder="Buscar..." />
				<StyledLogo source={require('../../assets/icons/filter.png')} />
			</StyledContainer>
		</>
	);
};

export default SearchBar;
