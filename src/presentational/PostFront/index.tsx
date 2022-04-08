import React from 'react';

import {StyledContainer, StyledView} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';
import {useNavigation} from '@react-navigation/native';

const PostFront = () => {
	const {navigate} = useNavigation();

	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					<ForumCard fullScream />
					<LoadButton buttomTitle={'Exibir comentários'} isComment />
					<RedGreenButton greenAction={() => navigate('CreatePostOrComment')} />
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default PostFront;
