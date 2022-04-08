import React from 'react';

import {StyledContainer, StyledView, StyledText, StyledLocker} from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import LargeCard from '../../components/LargeCard';
import {ScrollView} from 'react-native';
import ForumCard from '../../components/ForumCard';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import LoadButton from '../../components/LoadButton';
import Breadcrumb from '../../components/Breadcrumb';
import TopicCard from '../../components/TopicCard';

const Topic = () => {
	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<SearchBar />
					<Breadcrumb />
					<LargeCard isCover />
					<StyledText textWeight={'bold'}>Administração</StyledText>
					<ForumCard />
					<ForumCard />
					<LoadButton />
					<StyledText textWeight={'bold'}>Explore outros temas:</StyledText>
					<StyledLocker>
						<TopicCard isFooter />
					</StyledLocker>
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default Topic;
