import React from "react";
import {StyledIcon, StyledText, StyledView} from "./styles";

const Loading = ({visible = false}) => {
	return (
		<>
			{visible && (
				<StyledView>
					<StyledText>Carregando...</StyledText>
					<StyledIcon source={require("../../assets/images/loading.gif")} />
				</StyledView>
			)}
		</>
	);
};

export default Loading;
