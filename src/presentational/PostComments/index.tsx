import React from 'react';

import {
	StyledContainer,
	StyledView,
	StyledText,
	StyledAlertContainer,
} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';
import CommentCard from '../../components/CommentCard';
import theme from '../../styles/theme';
import ToggleSwitch from 'toggle-switch-react-native';

const PostComments = () => {
	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					<ForumCard fullScream />
					<StyledText textWeight={'bold'}>XX Comentários</StyledText>
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<StyledAlertContainer>
						{/* <StyledText textColor={theme.colors.black_pearl} textWeight={'400'}>
							Ativar notificações de comentários
						</StyledText> */}
						<ToggleSwitch
							label="Ativar notificações de comentários"
							labelStyle={{
								color: theme.colors.black_pearl,
								fontWeight: '400',
								fontSize: 16,
								right: 7,
								bottom: 2,
								paddingRight: 15,
							}}
							isOn={false}
							onColor={theme.colors.eden}
							offColor={theme.colors.tide}
						/>
					</StyledAlertContainer>
					<LoadButton isComment />
					<RedGreenButton />
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default PostComments;
