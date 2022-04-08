import React from 'react';

import {StyledViewContainer, StyledText} from './styles';

const TextArea = ({placeholder = 'Título...', size = '55px'}) => {
	return (
		<>
			<StyledViewContainer sizeArea={size}>
				<StyledText placeholder={placeholder} />
			</StyledViewContainer>
		</>
	);
};

export default TextArea;
