import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {StyledButton, StyledTitle} from './styles';

const LoadButton = ({
	isComment = false,
	buttomTitle = 'Carregar Mais Tópicos',
}) => {
	const {navigate} = useNavigation();
	return (
		<>
			<StyledButton
				isComment={isComment}
				onPress={isComment ? () => navigate('PostComments') : () => {}}>
				<StyledTitle isComment={isComment}>{buttomTitle}</StyledTitle>
			</StyledButton>
		</>
	);
};

export default LoadButton;
