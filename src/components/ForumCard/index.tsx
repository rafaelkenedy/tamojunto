import React from 'react';

import {
	StyledContainer,
	StyledHeaderContainer,
	StyledButton,
	StyledIcon,
	StyledTitle,
	StyledText,
} from './styles';

const ForumCard = () => {
	return (
		<>
			<StyledContainer>
				<StyledButton>
					<StyledIcon source={require('../../assets/icons/more.png')} />
				</StyledButton>
				<StyledHeaderContainer line>
					<StyledTitle>Tema do tópico</StyledTitle>
					<StyledText>Autor do Post em dd/mm/aa</StyledText>
				</StyledHeaderContainer>
				<StyledHeaderContainer>
					<StyledTitle numberOfLines={2}>Título</StyledTitle>
					<StyledText numberOfLines={2}>
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

export default ForumCard;
