import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {StyledButton, StyledTitle} from './styles';

const LoadButton = ({isComment = false}) => {
	const {navigate} = useNavigation();
	return (
		<>
			<StyledButton
				isComment={isComment}
				onPress={isComment ? () => navigate('PostComments') : () => {}}>
				<StyledTitle isComment={isComment}>
					{isComment ? 'Exibir Comentários' : 'Carregar mais tópicos'}
				</StyledTitle>
			</StyledButton>
		</>
	);
};

export default LoadButton;
