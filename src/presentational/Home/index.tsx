import React, {useEffect, useState} from 'react';

import {
	StyledContainer,
	StyledView,
	StyledText,
	StyledRow,
	StyledLocker,
} from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import TopicCard from '../../components/TopicCard';
import LargeCard from '../../components/LargeCard';
import {FlatList, ScrollView} from 'react-native';
import ForumCard from '../../components/ForumCard';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import LoadButton from '../../components/LoadButton';
import {getSubjects} from '../../services/subjects';
import {getRecentThreads} from '../../services/threads';
import {useDispatch} from 'react-redux';
import {setTheme} from '../../store/slices/user';

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
			<StyledContainer>
				<ScrollView>
					<SearchBar />
					<StyledText textWeight={'bold'}>
						Escolha um tema para conversar:
					</StyledText>
					<FlatList
						data={themes}
						style={{marginTop: 15}}
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
					{post.map((item: any) => (
						<ForumCard key={item.id} content={item} home />
					))}
					<StyledLocker>
						<LoadButton />
					</StyledLocker>
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default Home;
