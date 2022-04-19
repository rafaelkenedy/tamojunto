import React, {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import {useDispatch} from "react-redux";

import {StyledView, StyleImage, StyledFlatList, StyledText} from "./styles";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import ForumCard from "../../components/ForumCard";
import {searchQuery} from "../../services/search";
import {setTheme} from "../../store/slices/user";

const SearchScreen = ({navigation}: any) => {
	const [result, setResult] = useState([]);
	const {params}: any = useRoute();
	const dispatch = useDispatch();

	useEffect(() => {
		getData(params.query);
	}, []);

	const getData = async (query: string) => {
		const {data} = await searchQuery(query);
		setResult(data);
	};

	return (
		<StyledView>
			<Header />
			<StyledFlatList
				data={result}
				ListHeaderComponent={
					<>
						<SearchBar textPlaceholder={params.query} />
						{result.length > 0 && (
							<StyledText textWeight={"bold"}>
								Resultados da sua busca:
							</StyledText>
						)}
					</>
				}
				ListEmptyComponent={
					<>
						<StyledText textWeight={"400"}>Sentimos muito!</StyledText>
						<StyledText textWeight={"400"}>
							Infelizmente não encontramos resultados para '{params.query}'.
						</StyledText>
						<StyledText textWeight={"400"}>
							Verifique a ortografia ou busque por termos relacionados
						</StyledText>
						<StyleImage source={require("../../assets/images/not_found.png")} />
					</>
				}
				renderItem={({item}: any) => (
					<ForumCard
						content={item}
						home
						action={() => {
							dispatch(setTheme(item.subject as string));
							navigation.navigate("Stack", {
								screen: "PostFront",
								params: {content: item},
							});
						}}
					/>
				)}
			/>
		</StyledView>
	);
};

export default SearchScreen;
