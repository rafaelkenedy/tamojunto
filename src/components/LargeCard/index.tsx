import React from 'react';
import theme from '../../styles/theme';

import {
	StyledText,
	StyledCardContainer,
	StyledTextContainer,
	StyledNewsContainer,
	StyledFooter,
} from './styles';

const LargeCard = ({isCover = false}) => {
	return (
		<>
			<StyledCardContainer isCover={isCover}>
				{!isCover && (
					<StyledTextContainer>
						<StyledNewsContainer>
							<StyledText
								textWeight={'bold'}
								textColor={theme.colors.catskill_white}>
								6
							</StyledText>
							<StyledText
								textWeight={'bold'}
								textColor={theme.colors.catskill_white}
								textSize={'12px'}>
								novos
							</StyledText>
						</StyledNewsContainer>
						<StyledText textWeight={'bold'}>Compra, Venda e Aluguel</StyledText>
						<StyledFooter>
							<StyledText textWeight={'bold'}>12</StyledText>
							<StyledText textSize={'14px'}>Tópicos</StyledText>
						</StyledFooter>
					</StyledTextContainer>
				)}
			</StyledCardContainer>
		</>
	);
};

export default LargeCard;
