import React from 'react';

import {StyledContainer, StyledView, StyledText} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';
import CommentCard from '../../components/CommentCard';
import TurnOnNotifications from '../../components/TurnOnNotifications';
import {useNavigation} from '@react-navigation/native';

const PostComments = () => {
	const {navigate} = useNavigation();

	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					<ForumCard fullScream />
					<StyledText textWeight={'bold'}>XX Comentários</StyledText>
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<TurnOnNotifications />
					<LoadButton buttomTitle="exibir mais comentários" isComment />
					<RedGreenButton greenAction={() => navigate('CreatePostOrComment')} />
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default PostComments;
