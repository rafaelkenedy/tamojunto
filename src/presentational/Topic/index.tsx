import React, {useEffect, useState} from "react";
import {useIsFocused, useRoute} from "@react-navigation/native";
import {getSubjects, getSubjectsById} from "../../services/subjects";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../store/slices/user";

import {
	StyledView,
	StyledText,
	StyledLocker,
	StyledFlatList,
	StyledFooterFlatList,
} from "./styles";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import LargeCard from "../../components/LargeCard";
import ForumCard from "../../components/ForumCard";
import NewTopicShortcut from "../../components/NewTopicShortcut";
import LoadButton from "../../components/LoadButton";
import Breadcrumb from "../../components/Breadcrumb";
import TopicCard from "../../components/TopicCard";
import Alert from "../../components/Alert";
import * as applicationTheme from "../../styles/theme";

const Topic = ({navigation}) => {
	const [content, setContent] = useState([]);
	const [others, setOthers] = useState([]);
	const [page, setPage] = useState<number>(1);
	const [alert, setAlert] = useState<boolean>();
	const dispatch = useDispatch();
	const {theme}: any = useSelector((handleUserChoices) => handleUserChoices);
	const {params}: any = useRoute();
	const isFocused = useIsFocused();

	useEffect(() => {
		getData(params.id as string);
	}, [isFocused]);

	const getData = async (id: string) => {
		const {data} = await getSubjectsById(id, page);
		const subjects = await getSubjects();
		setContent(data);
		setOthers(subjects.filter((item: any) => item.name !== theme));
	};

	return (
		<StyledView>
			<Alert active={alert} cancel={() => setAlert(false)} />
			<Header />
			<StyledFlatList
				ListHeaderComponent={
					<>
						<SearchBar />
						<Breadcrumb />
						<LargeCard isCover image={params.image} />
						<StyledText textWeight={"bold"}>{theme}</StyledText>
					</>
				}
				data={content}
				renderItem={({item}: any) => (
					<ForumCard
						content={item}
						dotAction={() => setAlert(true)}
						action={() =>
							navigation.navigate("Stack", {
								screen: "PostFront",
								params: {content: item},
							})
						}
					/>
				)}
				ListFooterComponent={
					<>
						{content.length >= 50 && (
							<LoadButton
								action={() => {
									setPage(page + 1);
									getData(params.id);
								}}
							/>
						)}
						<StyledText textWeight={"bold"}>Explore outros temas:</StyledText>
						<StyledLocker>
							<StyledFooterFlatList
								data={others}
								horizontal
								ListEmptyComponent={
									<StyledText
										textWeight={"bold"}
										textColor={applicationTheme.default.colors.black_pearl}
									>
										Nenhum tema encontrado!
									</StyledText>
								}
								renderItem={({item}: any) => (
									<TopicCard
										thread={item}
										isFooter
										action={() => {
											dispatch(setTheme(item.name as string));
											navigation.navigate("Stack", {
												screen: "Topic",
												params: {id: item.id, image: item.picture.url},
											});
										}}
									/>
								)}
							/>
						</StyledLocker>
					</>
				}
			/>
			<NewTopicShortcut />
		</StyledView>
	);
};

export default Topic;
