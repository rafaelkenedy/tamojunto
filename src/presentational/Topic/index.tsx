import React from 'react';

import {StyledContainer, StyledView, StyledText} from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import LargeCard from '../../components/LargeCard';
import {ScrollView} from 'react-native';
import ForumCard from '../../components/ForumCard';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import LoadButton from '../../components/LoadButton';
import Breadcrumb from '../../components/Breadcrumb';

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
					<LoadButton />
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default Topic;
