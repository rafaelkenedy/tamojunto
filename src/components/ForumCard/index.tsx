import React from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import {
	StyleButton,
	StyledContainer,
	StyledHeaderContainer,
	StyledButton,
	StyledIcon,
	StyledTitle,
	StyledText,
} from './styles';

const ForumCard = ({
	home = false,
	fullScream = false,
	content,
	action = () => {},
}: any) => {
	const date = moment(content.createdAt).format('DD/MM/YYYY');

	return (
		<>
			<StyleButton onPress={action}>
				<StyledContainer postSize={fullScream}>
					<StyledButton>
						<StyledIcon source={require('../../assets/icons/more.png')} />
					</StyledButton>
					<StyledHeaderContainer postSize={home} line>
						{!fullScream && <StyledTitle>{content.subject}</StyledTitle>}
						<StyledText>
							{`${content.user.firstName} ${content.user.lastName} em ${date}`}
						</StyledText>
					</StyledHeaderContainer>
					<StyledHeaderContainer>
						<StyledTitle numberOfLines={!fullScream ? 2 : undefined}>
							{content.title}
						</StyledTitle>
						{fullScream && (
							<StyledTitle>{content.commentCount} comentários</StyledTitle>
						)}
						<StyledText numberOfLines={!fullScream ? 2 : undefined}>
							{content.content}
						</StyledText>
						{!fullScream && !home && (
							<StyledTitle>{content.commentCount} comentários</StyledTitle>
						)}
					</StyledHeaderContainer>
				</StyledContainer>
			</StyleButton>
		</>
	);
};

export default ForumCard;
