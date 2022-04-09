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

const PostComments = ({navigation}: any) => {
	return (
		<StyledView>
			<Header navigation={navigation} />
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
					<RedGreenButton
						greenAction={() => navigation.navigate('CreatePostOrComment')}
					/>
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default PostComments;
