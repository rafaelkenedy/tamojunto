import React from 'react';

import {ScrollView} from 'react-native';
import {StyledContainer, StyledView} from './styles';
import Header from '../../components/Header';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';

const PostFront = ({navigation}: any) => {
	return (
		<StyledView>
			<Header navigation={navigation} />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					<ForumCard fullScream />
					<LoadButton buttomTitle={'Exibir comentários'} isComment />
					<RedGreenButton
						greenAction={() => navigation.navigate('CreatePostOrComment')}
					/>
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default PostFront;
