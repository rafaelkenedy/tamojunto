import React from 'react';

import {ScrollView} from 'react-native';
import {StyledContainer, StyledView} from './styles';
import Header from '../../components/Header';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';
import {useRoute} from '@react-navigation/native';

const PostFront = ({navigation}: any) => {
	const {params}: any = useRoute();

	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					<ForumCard content={params.content} fullScream />
					<LoadButton
						buttonTitle={'Exibir comentários'}
						isComment
						action={() =>
							navigation.navigate('Stack', {
								screen: 'PostComments',
								params: {id: params.content.id},
							})
						}
					/>
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
