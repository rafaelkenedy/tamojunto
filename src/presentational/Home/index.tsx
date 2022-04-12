import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setTheme} from '../../store/slices/user';

import {
	StyledView,
	StyledFlatList,
	StyledText,
	StyledHeaderFlatList,
	StyledLocker,
} from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import TopicCard from '../../components/TopicCard';
import LargeCard from '../../components/LargeCard';
import ForumCard from '../../components/ForumCard';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import LoadButton from '../../components/LoadButton';
import {getSubjects} from '../../services/subjects';
import {getRecentThreads} from '../../services/threads';

const Home = ({navigation}: any) => {
	const [themes, setThemes] = useState([]);
	const [post, setPost] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		const subjects = await getSubjects();
		const {data} = await getRecentThreads();
		setThemes(subjects);
		setPost(data);
	};

	return (
		<StyledView>
			<Header />
			<StyledFlatList
				ListHeaderComponent={
					<>
						<SearchBar />
						<StyledText textWeight={'bold'}>
							Escolha um tema para conversar:
						</StyledText>
						<StyledHeaderFlatList
							data={themes}
							horizontal
							renderItem={({item}: any) => (
								<TopicCard
									thread={item}
									action={() => {
										dispatch(setTheme(item.name as string));
										navigation.navigate('Stack', {
											screen: 'Topic',
											params: {id: item.id as string},
										});
									}}
								/>
							)}
						/>
						<LargeCard />
						<StyledText textWeight={'bold'}>
							Publicações mais recentes:
						</StyledText>
					</>
				}
				data={post}
				renderItem={({item}: any) => (
					<ForumCard
						content={item}
						home
						action={() => {
							dispatch(setTheme(item.subject as string));
							navigation.navigate('Stack', {
								screen: 'PostFront',
								params: {content: item},
							});
						}}
					/>
				)}
				ListFooterComponent={
					<StyledLocker>
						<LoadButton />
					</StyledLocker>
				}
			/>
			<NewTopicShortcut />
		</StyledView>
	);
};

export default Home;
