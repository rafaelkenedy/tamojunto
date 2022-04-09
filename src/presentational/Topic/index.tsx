import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {getSubjectsById} from '../../services/subjects';

import {ScrollView} from 'react-native';
import {
	StyledContainer,
	StyledView,
	StyledText,
	StyledLocker,
	StyledFlatList,
} from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import LargeCard from '../../components/LargeCard';
import ForumCard from '../../components/ForumCard';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import LoadButton from '../../components/LoadButton';
import Breadcrumb from '../../components/Breadcrumb';
import TopicCard from '../../components/TopicCard';

const Topic = ({navigation}: any) => {
	const [content, setContent] = useState();
	const {params} = useRoute();

	useEffect(() => {
		getData(params as unknown as string);
	}, []);

	const getData = async (id: string) => {
		const {data} = await getSubjectsById(id);
		setContent(data);
	};

	return (
		<StyledView>
			<Header navigation={navigation} />
			<StyledContainer>
				<ScrollView>
					<SearchBar />
					<Breadcrumb />
					<LargeCard isCover />
					<StyledText textWeight={'bold'}>Administração</StyledText>
					<StyledFlatList
						data={content}
						renderItem={({item}: any) => (
							<ForumCard
								content={item}
								action={() => navigation.navigate('Topic', item.id)}
							/>
						)}
					/>
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
