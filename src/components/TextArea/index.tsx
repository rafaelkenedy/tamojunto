import React from 'react';

import {StyledViewContainer, StyledText} from './styles';

const TextArea = ({placeholder = 'Título...', size = '55px',...rest}) => {
	return (
		<>
			<StyledViewContainer sizeArea={size}>
				<StyledText placeholder={placeholder} {...rest} />
			</StyledViewContainer>
		</>
	);
};

export default TextArea;
