import styled from "styled-components/native";
import {ViewProps} from "react-native";

export const StyledContainer = styled.ImageBackground.attrs({
	source: require("../../assets/images/img_background.png"),
})<ViewProps>`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const StyledButtonContainer = styled.View`
	width: 80%;
	margin-bottom: 64px;
`;

export const StyledImage = styled.Image`
	align-self: center;
	margin-top: 200px;
	margin-bottom: 150px;
`;
