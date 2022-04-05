import React from 'react';

import {StyledButton, StyledIcon} from './styles';

const NewTopicShortcut = () => {
	return (
		<>
			<StyledButton>
				<StyledIcon source={require('../../assets/icons/Add.png')} />
			</StyledButton>
		</>
	);
};

export default NewTopicShortcut;
