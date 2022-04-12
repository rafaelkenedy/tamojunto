import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
	StyleButton,
	StyledText,
	StyledCardContainer,
	StyledTextContainer,
	StyledNewsContainer,
	StyledFooter,
} from './styles';
import theme from '../../styles/theme';

const LargeCard = ({isCover = false, action = () => {}}) => {
	return (
		<>
			<StyledCardContainer
				source={
					!isCover
						? require('../../assets/images/deal.png')
						: {
								uri: 'https://h3z9a9c5.rocketcdn.me/wp-content/uploads/2020/05/Administracao.jpg',
						  }
				}
				isCover={isCover}>
				{!isCover && (
					<StyleButton onPress={action}>
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
							<StyledText textWeight={'bold'}>
								Compra, Venda e Aluguel
							</StyledText>
							<StyledFooter>
								<StyledText textWeight={'bold'}>12</StyledText>
								<StyledText textSize={'14px'}>Tópicos</StyledText>
							</StyledFooter>
						</StyledTextContainer>
					</StyleButton>
				)}
			</StyledCardContainer>
		</>
	);
};

export default LargeCard;
