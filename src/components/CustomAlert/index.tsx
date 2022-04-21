import React from "react";
import {StyledText, StyledViewContainer} from "./styles";
import {CustomAlertType} from "../../@types/types";

const CustomAlert = ({
	visible,
	title = "Erro",
	message = "Erro",
}: CustomAlertType) => {
	return (
		<>
			{visible && (
				<>
					<StyledViewContainer>
						<StyledText isBold>{title}</StyledText>
						<StyledText>{message}</StyledText>
					</StyledViewContainer>
				</>
			)}
		</>
	);
};

export default CustomAlert;
