import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {getSubjectsById} from '../../services/subjects';

import {StyledView, StyledText, StyledLocker, StyledFlatList} from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import LargeCard from '../../components/LargeCard';
import ForumCard from '../../components/ForumCard';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import LoadButton from '../../components/LoadButton';
import Breadcrumb from '../../components/Breadcrumb';
import TopicCard from '../../components/TopicCard';
import {useSelector} from 'react-redux';

const Topic = ({navigation}: any) => {
	const [content, setContent] = useState();
	const {theme}: any = useSelector((handleUserChoices) => handleUserChoices);
	const {params}: any = useRoute();

	useEffect(() => {
		getData(params.id as unknown as string);
	}, []);

	const getData = async (id: string) => {
		const {data} = await getSubjectsById(id);
		console.log('topic', data);

		setContent(data);
	};

	return (
		<StyledView>
			<Header />
			<StyledFlatList
				ListHeaderComponent={
					<>
						<SearchBar />
						<Breadcrumb />
						<LargeCard isCover />
						<StyledText textWeight={'bold'}>{theme}</StyledText>
					</>
				}
				data={content}
				renderItem={({item}: any) => (
					<ForumCard
						content={item}
						action={() =>
							navigation.navigate('Stack', {
								screen: 'PostFront',
								params: {content: item},
							})
						}
					/>
				)}
				ListFooterComponent={
					<>
						<LoadButton />
						<StyledText textWeight={'bold'}>Explore outros temas:</StyledText>
						<StyledLocker>
							<TopicCard isFooter />
						</StyledLocker>
					</>
				}
			/>
			<NewTopicShortcut />
		</StyledView>
	);
};

export default Topic;
