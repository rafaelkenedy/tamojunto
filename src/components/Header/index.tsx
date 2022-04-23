import React from "react";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {StyledButton, StyledContainer, StyledMenu, StyledTitle} from "./styles";
import {ReduxType} from "../../@types/types";
import {useSelector} from "react-redux";

const Header = () => {
	const navigation = useNavigation();
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;

	return (
		<>
			<StyledContainer nightMode={user.nightMode}>
				<StyledButton
					onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
				>
					<StyledMenu
						nightMode={user.nightMode}
						source={require("../../assets/icons/menu.png")}
					/>
				</StyledButton>
				<StyledTitle nightMode={user.nightMode}>tamo</StyledTitle>
				<StyledTitle textWeight={"bold"} nightMode={user.nightMode}>
					junto
				</StyledTitle>
			</StyledContainer>
		</>
	);
};

export default Header;
