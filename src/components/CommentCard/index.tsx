import moment from 'moment';
import React from 'react';

import {
	StyledContainer,
	StyledHeaderContainer,
	StyledButton,
	StyledIcon,
	StyledText,
} from './styles';

const CommentCard = ({commentContent, dotAction = () => {}}: any) => {
	const date = moment(commentContent.createdAt).format('DD/MM/YYYY');

	return (
		<>
			<StyledContainer>
				<StyledButton onPress={dotAction}>
					<StyledIcon source={require('../../assets/icons/more.png')} />
				</StyledButton>
				<StyledHeaderContainer>
					<StyledText
						isGreen>{`${commentContent.user.firstName} ${commentContent.user.lastName} em ${date}`}</StyledText>
					<StyledText>{commentContent.content}</StyledText>
				</StyledHeaderContainer>
			</StyledContainer>
		</>
	);
};

export default CommentCard;
