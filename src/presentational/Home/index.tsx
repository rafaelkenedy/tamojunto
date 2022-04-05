import React from 'react';

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
import {ScrollView} from 'react-native';
import ForumCard from '../../components/ForumCard';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import LoadButton from '../../components/LoadButton';

const Home = () => {
	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<SearchBar />
					<StyledText textWeight={'bold'}>
						Escolha um tema para conversar:
					</StyledText>
					<StyledLocker>
						<StyledRow horizontal>
							<TopicCard />
							<TopicCard />
							<TopicCard />
							<TopicCard />
							<TopicCard />
							<TopicCard />
						</StyledRow>
					</StyledLocker>
					<LargeCard />
					<StyledText textWeight={'bold'}>
						Publicações mais recentes:
					</StyledText>
					<ForumCard />
					<LoadButton />
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default Home;
