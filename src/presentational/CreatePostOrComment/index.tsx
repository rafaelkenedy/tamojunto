import React, {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";

import {StyledContainer, StyledView, StyledText} from "./styles";
import Header from "../../components/Header";
import {Alert, ScrollView} from "react-native";
import Breadcrumb from "../../components/Breadcrumb";
import theme from "../../styles/theme";
import TextArea from "../../components/TextArea";
import TurnOnNotifications from "../../components/TurnOnNotifications";
import RedGreenButton from "../../components/RedGreenButton";
import Select from "../../components/Select";
import ForumCard from "../../components/ForumCard";
import {postComment} from "../../services/comments";
import {postThread} from "../../services/threads";
import {ReduxType} from "../../@types/types";
import {useDispatch, useSelector} from "react-redux";
import {startLoading} from "../../store/slices/user";
import Loading from "../../components/Loading";
import {threadId} from "../../helpers/threads";

const CreatePostOrComment = ({navigation}) => {
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [state, setState] = useState<string>("");
	const {params}: any = useRoute();
	const dispatch = useDispatch();
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;

	useEffect(() => {}, []);

	const postResponse = async () => {
		if (content.length <= 3) return;
		dispatch(startLoading(true));
		const response = await postComment(
			{
				content,
				threadId: params.id,
			},
			user.token
		);
		dispatch(startLoading(false));
		if (response) {
			navigation.navigate("Stack", {
				screen: "Home",
			});
		} else {
			Alert.alert("Tente novamente mais tarde!");
		}
		console.log(response);
	};

	const postTopic = async () => {
		if (content.length <= 3 || title.length <= 3) return;
		dispatch(startLoading(true));
		const response = await postThread(
			{
				title,
				content,
				subjectId: state,
				user: user.user,
			},
			user.token
		);
		dispatch(startLoading(false));
		if (response) {
			navigation.navigate("Stack", {
				screen: "Home",
			});
		} else {
			Alert.alert("Tente novamente mais tarde!");
		}
		console.log("post response", response);
	};

	return (
		<StyledView>
			<Header />
			<Loading visible={user.loading} />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					{params.type === "create" ? (
						<>
							<StyledText
								textWeight={"bold"}
								textColor={theme.colors.black_pearl}
							>
								Escolha um título:
							</StyledText>
							<TextArea
								value={title}
								onChangeText={(text: string) => setTitle(text)}
							/>
							<StyledText
								textWeight={"bold"}
								textColor={theme.colors.black_pearl}
							>
								Escreva sua mensagem:
							</StyledText>
							<TextArea
								placeholder="Seu texto aqui..."
								size="260px"
								maxLength={400}
								multiline
								value={content}
								onChangeText={(text: string) => setContent(text)}
							/>
							<StyledText
								textWeight={"bold"}
								textColor={theme.colors.black_pearl}
							>
								Escolha o tema da sua publicação:
							</StyledText>
							<Select
								items={threadId}
								selectedValue={state}
								onValueChange={(text) => setState(text)}
							/>
							<TurnOnNotifications />
							<RedGreenButton
								greenTitle="Publicar"
								redTitle="Cancelar"
								greenAction={postTopic}
							/>
						</>
					) : (
						<>
							<ForumCard content={params.content} fullScream />
							<StyledText
								textWeight={"bold"}
								textColor={theme.colors.black_pearl}
							>
								Escreva seu comentário abaixo:
							</StyledText>
							<TextArea
								placeholder="Seu texto aqui..."
								size="260px"
								maxLength={400}
								multiline
								value={content}
								onChangeText={(text: string) => setContent(text)}
							/>
							<TurnOnNotifications />
							<RedGreenButton
								greenTitle="Enviar"
								redTitle="Voltar"
								greenAction={postResponse}
							/>
						</>
					)}
				</ScrollView>
			</StyledContainer>
		</StyledView>
	);
};

export default CreatePostOrComment;
