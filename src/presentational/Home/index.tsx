import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTheme} from "../../store/slices/user";
import {SubjectsType, ThreadsType} from "../../@types/types";

import {
	StyledView,
	StyledFlatList,
	StyledText,
	StyledHeaderFlatList,
	StyledLocker,
} from "./styles";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import TopicCard from "../../components/TopicCard";
import LargeCard from "../../components/LargeCard";
import ForumCard from "../../components/ForumCard";
import NewTopicShortcut from "../../components/NewTopicShortcut";
import LoadButton from "../../components/LoadButton";
import {getSubjects} from "../../services/subjects";
import {getRecentThreads} from "../../services/threads";
import Splash from "../Splash";
import Alert from "../../components/Alert";

const Home = ({navigation}) => {
	const [subjects, setSubjects] = useState<SubjectsType[]>([]);
	const [threads, setThreads] = useState<ThreadsType[]>([]);
	const [isLoading, setLoading] = useState<boolean>(true);
	const [alert, setAlert] = useState<boolean>();
	const [sellBuy, setSellBuy] = useState<SubjectsType>();
	const sellBuyTitle = "Aluguel, compra e venda";
	const dispatch = useDispatch();

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		const result = await getSubjects();
		const {data} = await getRecentThreads();
		setSellBuy(result.filter((item) => item.name === sellBuyTitle)[0]);
		setSubjects(result.filter((item) => item.name !== sellBuyTitle));
		setThreads(data);
		setLoading(false);
	};

	if (isLoading) return <Splash />;

	return (
		<StyledView>
			<Alert active={alert} cancel={() => setAlert(false)} />
			<Header />
			<StyledFlatList
				ListHeaderComponent={
					<>
						<SearchBar />
						<StyledText textWeight={"bold"}>
							Escolha um tema para conversar:
						</StyledText>
						<StyledHeaderFlatList
							data={subjects}
							horizontal
							renderItem={({item}: any) => (
								<TopicCard
									thread={item}
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
						<LargeCard thread={sellBuy} />
						<StyledText textWeight={"bold"}>
							Publicações mais recentes:
						</StyledText>
					</>
				}
				data={threads}
				renderItem={({item}: any) => (
					<ForumCard
						content={item}
						home
						dotAction={() => setAlert(true)}
						action={() => {
							dispatch(setTheme(item.subject as string));
							navigation.navigate("Stack", {
								screen: "PostFront",
								params: {content: item},
							});
						}}
					/>
				)}
				ListFooterComponent={
					<StyledLocker>
						<LoadButton />
					</StyledLocker>
				}
			/>
			<NewTopicShortcut />
		</StyledView>
	);
};

export default Home;
