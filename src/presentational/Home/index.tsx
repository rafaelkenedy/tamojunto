import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setOwner, setTheme} from "../../store/slices/user";
import {ReduxType, SubjectsType, ThreadsType} from "../../@types/types";

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
import SystemNavigationBar from "react-native-system-navigation-bar";
import {StatusBar} from "react-native";
import {useIsFocused} from "@react-navigation/native";

const Home = ({navigation}) => {
	const [subjects, setSubjects] = useState<SubjectsType[]>([]);
	const [threads, setThreads] = useState<ThreadsType[]>([]);
	const [isLoading, setLoading] = useState<boolean>(true);
	const [page, setPage] = useState<number>(1);
	const [alert, setAlert] = useState<boolean>();
	const [sellBuy, setSellBuy] = useState<SubjectsType>();
	const sellBuyTitle = "Aluguel, compra e venda";
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;
	const dispatch = useDispatch();
	const focused = useIsFocused();

	useEffect(() => {
		loadData();
		SystemNavigationBar.navigationShow();
		if (!user.logged) {
			navigation.navigate("Stack", {
				screen: "Login",
			});
		}
	}, [focused]);

	const loadData = async () => {
		const result = await getSubjects();
		const {data} = await getRecentThreads(page);
		setSellBuy(result.filter((item) => item.name === sellBuyTitle)[0]);
		setSubjects(result.filter((item) => item.name !== sellBuyTitle));
		setThreads(data);
		setLoading(false);
	};

	if (isLoading) return <Splash />;

	return (
		<StyledView nightMode={user.nightMode}>
			<StatusBar hidden={false} />
			<Alert active={alert} cancel={() => setAlert(false)} />
			<Header />
			<StyledFlatList
				ListHeaderComponent={
					<>
						<SearchBar />
						<StyledText nightMode={user.nightMode} textWeight={"bold"}>
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
						<LargeCard
							thread={sellBuy}
							action={() => {
								dispatch(setTheme(sellBuy?.name as string));
								navigation.navigate("Stack", {
									screen: "Topic",
									params: {id: sellBuy?.id, image: sellBuy?.picture.url},
								});
							}}
						/>
						<StyledText nightMode={user.nightMode} textWeight={"bold"}>
							Publicações mais recentes:
						</StyledText>
					</>
				}
				data={threads}
				renderItem={({item}: any) => (
					<ForumCard
						content={item}
						home
						dotAction={() => {
							dispatch(setOwner(item.user.id));
							setAlert(true);
						}}
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
						{threads.length >= 50 && (
							<LoadButton
								action={() => {
									setPage(page + 1);
									loadData();
								}}
							/>
						)}
					</StyledLocker>
				}
			/>
			<NewTopicShortcut />
		</StyledView>
	);
};

export default Home;
