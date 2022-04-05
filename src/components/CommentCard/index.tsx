import React from 'react';

import {
	StyledContainer,
	StyledHeaderContainer,
	StyledButton,
	StyledIcon,
	StyledText,
} from './styles';

const CommentCard = () => {
	return (
		<>
			<StyledContainer>
				<StyledButton>
					<StyledIcon source={require('../../assets/icons/more.png')} />
				</StyledButton>
				<StyledHeaderContainer>
					<StyledText isGreen>Autor do Comentário em dd/mm/aa</StyledText>
					<StyledText>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo id
						quod facere tempora odio laborum quibusdam voluptates quia
						repudiandae esse dignissimos nulla, cupiditate magni? Vel iusto
						neque modi esse sequi?
					</StyledText>
				</StyledHeaderContainer>
			</StyledContainer>
		</>
	);
};

export default CommentCard;
