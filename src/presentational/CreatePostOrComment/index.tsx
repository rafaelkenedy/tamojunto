import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import {StyledContainer, StyledView, StyledText} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native';
import Breadcrumb from '../../components/Breadcrumb';
import theme from '../../styles/theme';
import TextArea from '../../components/TextArea';
import TurnOnNotifications from '../../components/TurnOnNotifications';
import RedGreenButton from '../../components/RedGreenButton';
import Select from '../../components/Select';
import ForumCard from '../../components/ForumCard';

const CreatePostOrComment = () => {
	const [title, setTitle] = useState<String>('');
	const [content, setContent] = useState<String>('');
	const {params}: any = useRoute();

	useEffect(() => {}, []);

	const post = () => {};

	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					{params.type === 'create' ? (
						<>
							<StyledText
								textWeight={'bold'}
								textColor={theme.colors.black_pearl}>
								Escolha um título:
							</StyledText>
							<TextArea
								value={title}
								onChangeText={(text: string) => setTitle(text)}
							/>
							<StyledText
								textWeight={'bold'}
								textColor={theme.colors.black_pearl}>
								Escreva sua mensagem:
							</StyledText>
							<TextArea
								placeholder="Seu texto aqui..."
								size="260px"
								value={content}
								onChangeText={(text: string) => setContent(text)}
							/>
							<StyledText
								textWeight={'bold'}
								textColor={theme.colors.black_pearl}>
								Escolha o tema da sua publicação:
							</StyledText>
							<Select />
							<TurnOnNotifications />
							<RedGreenButton
								greenTitle="Publicar"
								redTitle="Cancelar"
								greenAction={post}
							/>
						</>
					) : (
						<>
							<ForumCard />
							<StyledText
								textWeight={'bold'}
								textColor={theme.colors.black_pearl}>
								Escreva seu comentário abaixo:
							</StyledText>
							<TextArea
								placeholder="Seu texto aqui..."
								size="260px"
								value={content}
								onChangeText={(text: string) => setContent(text)}
							/>
							<TurnOnNotifications />
							<RedGreenButton
								greenTitle="Enviar"
								redTitle="Voltar"
								greenAction={post}
							/>
						</>
					)}
				</ScrollView>
			</StyledContainer>
		</StyledView>
	);
};

export default CreatePostOrComment;
