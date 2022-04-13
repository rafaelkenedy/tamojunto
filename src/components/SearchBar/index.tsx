import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {StyledContainer, StyledInput, StyledLogo} from './styles';

const SearchBar = ({textPlaceholder = 'Buscar...'}) => {
	const [search, setSearch] = useState('');
	const navigation: any = useNavigation();

	const find = () => {
		if (search === '') return;
		setSearch('');
		navigation.navigate('Stack', {
			screen: 'SearchScreen',
			params: {query: search},
		});
	};

	return (
		<>
			<StyledContainer>
				<StyledLogo source={require('../../assets/icons/iconoir_search.png')} />
				<StyledInput
					placeholder={textPlaceholder}
					value={search}
					returnKeyType="search"
					onSubmitEditing={find}
					onChangeText={(text: string) => setSearch(text)}
				/>
				<StyledLogo source={require('../../assets/icons/filter.png')} />
			</StyledContainer>
		</>
	);
};

export default SearchBar;
