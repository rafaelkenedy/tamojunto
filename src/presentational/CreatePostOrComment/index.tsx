import React from 'react';

import {StyledContainer, StyledView, StyledText} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import theme from '../../styles/theme';
import TextArea from '../../components/TextArea';
import TurnOnNotifications from '../../components/TurnOnNotifications';
import RedGreenButton from '../../components/RedGreenButton';

const CreatePostOrComment = () => {
	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					<StyledText textWeight={'bold'} textColor={theme.colors.black_pearl}>
						Escolha um título:
					</StyledText>
					<TextArea />
					<StyledText textWeight={'bold'} textColor={theme.colors.black_pearl}>
						Escreva sua mensagem:
					</StyledText>
					<TextArea placeholder="Seu texto aqui..." size="260px" />
					<StyledText textWeight={'bold'} textColor={theme.colors.black_pearl}>
						Escolha o tema da sua aplicação:
					</StyledText>
					<TurnOnNotifications />
					<RedGreenButton greenTitle="Publicar" redTitle="Cancelar" />
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default CreatePostOrComment;
