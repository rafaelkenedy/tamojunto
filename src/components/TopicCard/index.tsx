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

const TopicCard = ({thread, isFooter = false, action = () => {}}: any) => {
	return (
		<>
			<StyleButton onPress={action}>
				<StyledCardContainer
					source={{uri: thread.picture.url}}
					isFooter={isFooter}>
					{!isFooter ? (
						<StyledTextContainer>
							<StyledNewsContainer>
								<StyledText
									textWeight={'bold'}
									textColor={theme.colors.catskill_white}>
									0
								</StyledText>
								<StyledText
									textWeight={'bold'}
									textColor={theme.colors.catskill_white}
									textSize={'12px'}>
									novos
								</StyledText>
							</StyledNewsContainer>
							<StyledText textWeight={'bold'}>{thread.name}</StyledText>
							<StyledFooter>
								<StyledText textWeight={'bold'}>
									{thread.threadCount}
								</StyledText>
								<StyledText textSize={'14px'}> Tópicos</StyledText>
							</StyledFooter>
						</StyledTextContainer>
					) : (
						<StyledBorderContainer>
							<StyledText textWeight={'bold'}>Administração</StyledText>
						</StyledBorderContainer>
					)}
				</StyledCardContainer>
			</StyleButton>
		</>
	);
};

export default TopicCard;
