import {useNavigation} from "@react-navigation/native";
import React from "react";

import {StyledButton, StyledIcon} from "./styles";

const NewTopicShortcut = () => {
	const {navigate}: any = useNavigation();

	return (
		<>
			<StyledButton
				onPress={() =>
					navigate("Stack", {
						screen: "CreatePostOrComment",
						params: {type: "create"},
					})
				}
			>
				<StyledIcon source={require("../../assets/icons/Add.png")} />
			</StyledButton>
		</>
	);
};

export default NewTopicShortcut;
