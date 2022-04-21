import styled from "styled-components/native";
import theme from "../../styles/theme";

export const StyledView = styled.View`
	height: 100%;
	width: 100%;
	background-color: ${theme.colors.black_pearl};
	opacity: 0.9;
	position: absolute;
	justify-content: center;
	align-items: center;
	z-index: 5;
`;

export const StyledText = styled.Text`
	font-size: 20px;
	color: ${theme.colors.white};
	font-weight: bold;
	margin-bottom: 20px;
`;

export const StyledIcon = styled.Image`
	tint-color: ${theme.colors.white};
`;
