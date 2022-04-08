import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {StyledButton, StyledIcon} from './styles';

const NewTopicShortcut = () => {
	const {navigate} = useNavigation();

	return (
		<>
			<StyledButton onPress={() => navigate('CreatePostOrComment', 'create')}>
				<StyledIcon source={require('../../assets/icons/Add.png')} />
			</StyledButton>
		</>
	);
};

export default NewTopicShortcut;
