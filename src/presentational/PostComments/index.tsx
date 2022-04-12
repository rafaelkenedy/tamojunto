import React, {useEffect, useState} from 'react';

import {StyledView, StyledText, StyledFlatList} from './styles';
import Header from '../../components/Header';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';
import CommentCard from '../../components/CommentCard';
import TurnOnNotifications from '../../components/TurnOnNotifications';
import {useRoute} from '@react-navigation/native';
import {getThreadsById} from '../../services/threads';
import theme from '../../styles/theme';

const PostComments = ({navigation}: any) => {
	const [data, setData] = useState([]);
	const {params}: any = useRoute();

	useEffect(() => {
		getComments(params.id);
	}, []);

	const getComments = async (id: string) => {
		const {comments} = await getThreadsById(id);
		setData(comments);
	};

	return (
		<StyledView>
			<Header />
			<StyledFlatList
				ListHeaderComponent={
					<>
						<Breadcrumb />
						<ForumCard content={params.content} fullScream />
						<StyledText textWeight={'bold'}>
							{params.content.commentCount} Comentários:
						</StyledText>
					</>
				}
				data={data}
				renderItem={({item}) => <CommentCard commentContent={item} />}
				ListEmptyComponent={
					<StyledText textWeight={'bold'} textColor={theme.colors.black_pearl}>
						Seja o primeiro a comentar
					</StyledText>
				}
				ListFooterComponent={
					<>
						<TurnOnNotifications />
						{data.length === 20 && (
							<LoadButton buttonTitle="exibir mais comentários" isComment />
						)}
						<RedGreenButton
							greenAction={() =>
								navigation.navigate('Stack', {
									screen: 'CreatePostOrComment',
									params: {id: params.content.id, content: params.content},
								})
							}
						/>
					</>
				}
			/>
			<NewTopicShortcut />
		</StyledView>
	);
};

export default PostComments;
