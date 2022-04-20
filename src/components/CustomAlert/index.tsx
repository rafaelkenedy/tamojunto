import React from "react";
import {StyledButtom, StyledText, StyledViewContainer} from "./styles";

const CustomAlert = ({action}) => {
	return (
		<>
			<StyledViewContainer>
				<StyledText>Titulo</StyledText>
				<StyledText>corpo</StyledText>
			</StyledViewContainer>

			<StyledButtom onPress={action}>
				<StyledText>nome do butão</StyledText>
			</StyledButtom>
		</>
	);
};

export default CustomAlert;
