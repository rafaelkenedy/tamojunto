import React from 'react';
import theme from '../../styles/theme';

import {
	StyleButton,
	StyledText,
	StyledCardContainer,
	StyledTextContainer,
	StyledNewsContainer,
	StyledFooter,
	StyledBorderContainer,
} from './styles';

const TopicCard = ({name, isFooter = false}: any) => {
	return (
		<>
			<StyleButton>
				<StyledCardContainer
					source={require('../../assets/images/not_found.png')}
					isFooter={isFooter}>
					{!isFooter ? (
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
							<StyledText textWeight={'bold'}>{name}</StyledText>
							<StyledFooter>
								<StyledText textWeight={'bold'}>12</StyledText>
								<StyledText textSize={'14px'}>Tópicos</StyledText>
							</StyledFooter>
						</StyledTextContainer>
					) : (
						<StyledBorderContainer>
							<StyledText textWeight={'bold'}>Finanças</StyledText>
						</StyledBorderContainer>
					)}
				</StyledCardContainer>
			</StyleButton>
		</>
	);
};

export default TopicCard;
