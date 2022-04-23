import styled from "styled-components/native";
import theme from "../../styles/theme";

interface HeaderStylePropsType {
	textWeight?: string;
	nightMode?: boolean;
}

export const StyledContainer = styled.View<HeaderStylePropsType>`
	height: 70px;
	background-color: ${(props) =>
		props.nightMode ? theme.colors.dark_container : theme.colors.white};
	flex-direction: row;
	align-items: center;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	elevation: 20;
`;

export const StyledTitle = styled.Text<HeaderStylePropsType>`
	font-size: 20px;
	color: ${(props) =>
		props.nightMode ? theme.colors.white : theme.colors.eden};
	font-weight: ${(props) => props.textWeight || 300};
`;

export const StyledButton = styled.TouchableOpacity`
	padding-right: 5px;
	padding-left: 20px;
	margin: 10px;
`;

export const StyledMenu = styled.Image<HeaderStylePropsType>`
	tint-color: ${(props) =>
		props.nightMode ? theme.colors.white : theme.colors.eden};
`;
