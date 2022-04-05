import React from 'react';

import {
	StyledContainer,
	StyledHeaderContainer,
	StyledButton,
	StyledIcon,
	StyledTitle,
	StyledText,
} from './styles';

const ForumCard = ({fullScream = false}) => {
	return (
		<>
			<StyledContainer postSize={fullScream}>
				<StyledButton>
					<StyledIcon source={require('../../assets/icons/more.png')} />
				</StyledButton>
				<StyledHeaderContainer line>
					{!fullScream && <StyledTitle>Tema do tópico</StyledTitle>}
					<StyledText>Autor do Post em dd/mm/aa</StyledText>
				</StyledHeaderContainer>
				<StyledHeaderContainer>
					<StyledTitle numberOfLines={!fullScream ? 2 : undefined}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad illum
						inventore provident delectus natus quibusdam exercitationem eaque
						quas! Doloribus, a dignissimos. Alias distinctio molestias
						consequatur iure illum ipsa eius quos.
					</StyledTitle>
					{fullScream && <StyledTitle>12 comentários</StyledTitle>}
					<StyledText numberOfLines={!fullScream ? 2 : undefined}>
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
