import React from 'react';

import {StyledViewContainer, StyledText} from './styles';

const TextArea = ({placeholder = 'Título...', size = '55px', borderSize, borderColor, shadowBox,...rest}) => {
	return (
		<>
			<StyledViewContainer 
				sizeArea={size} 
				borderSize={borderSize} 
				borderColor={borderColor}
				shadowBox={shadowBox}
			>
				<StyledText placeholder={placeholder} {...rest} />
			</StyledViewContainer>
		</>
	);
};

export default TextArea;
