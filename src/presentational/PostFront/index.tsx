import React from 'react';
import {useRoute} from '@react-navigation/native';

import {StyledContainer, StyledView} from './styles';
import Header from '../../components/Header';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';

const PostFront = ({navigation}: any) => {
	const {params}: any = useRoute();

	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<Breadcrumb />
				<ForumCard content={params.content} fullScream commentsCount />
				<LoadButton
					buttonTitle={'Exibir comentários'}
					isComment
					action={() =>
						navigation.navigate('Stack', {
							screen: 'PostComments',
							params: {id: params.content.id, content: params.content},
						})
					}
				/>
				<RedGreenButton
					greenAction={() =>
						navigation.navigate('Stack', {
							screen: 'CreatePostOrComment',
							params: {id: params.content.id, content: params.content},
						})
					}
				/>
			</StyledContainer>
			<NewTopicShortcut />
		</StyledView>
	);
};

export default PostFront;
