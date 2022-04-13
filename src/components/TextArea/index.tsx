import React from 'react';

import {StyledViewContainer, StyledText} from './styles';

const TextArea = ({placeholder = 'Título...', size = '55px', borderSize, ...rest}) => {
	return (
		<>
			<StyledViewContainer sizeArea={size} borderSize={borderSize} >
				<StyledText placeholder={placeholder} {...rest} />
			</StyledViewContainer>
		</>
	);
};

export default TextArea;
