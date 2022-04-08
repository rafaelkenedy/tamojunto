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

const Home = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		const result = await getSubjects();
		console.log(result);
		setPost(result);
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
						data={post}
						style={{marginTop: 15}}
						horizontal
						renderItem={({item}: any) => <TopicCard name={item.name} />}
					/>
					<LargeCard />
					<StyledText textWeight={'bold'}>
						Publicações mais recentes:
					</StyledText>
					<ForumCard />
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
