import React from 'react';
import theme from '../../styles/theme';

import {
	StyledText,
	StyledCardContainer,
	StyledTextContainer,
	StyledNewsContainer,
	StyledFooter,
} from './styles';

const TopicCard = () => {
	return (
		<>
			<StyledCardContainer>
				<StyledTextContainer>
					<StyledNewsContainer>
						<StyledText
							textWeight={'bold'}
							textColor={theme.colors.catskill_white}>
							3
						</StyledText>
						<StyledText
							textWeight={'bold'}
							textColor={theme.colors.catskill_white}
							textSize={'12px'}>
							novos
						</StyledText>
					</StyledNewsContainer>
					<StyledText textWeight={'bold'}>Administração</StyledText>
					<StyledFooter>
						<StyledText textWeight={'bold'}>12</StyledText>
						<StyledText textSize={'14px'}>Tópicos</StyledText>
					</StyledFooter>
				</StyledTextContainer>
			</StyledCardContainer>
		</>
	);
};

export default TopicCard;
