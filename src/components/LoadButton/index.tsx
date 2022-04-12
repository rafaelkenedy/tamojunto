import React from 'react';

import {StyledButton, StyledTitle} from './styles';

const LoadButton = ({
	isComment = false,
	action = () => {},
	buttonTitle = 'Carregar Mais Tópicos',
}) => {
	return (
		<>
			<StyledButton isComment={isComment} onPress={action}>
				<StyledTitle isComment={isComment}>{buttonTitle}</StyledTitle>
			</StyledButton>
		</>
	);
};

export default LoadButton;
