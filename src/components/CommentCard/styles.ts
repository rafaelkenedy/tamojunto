import styled from "styled-components/native";
import theme from "../../styles/theme";

interface CommentType {
	isGreen?: boolean;
}

export const StyledContainer = styled.View`
	height: auto;
	width: 100%;
	border-radius: 12px;
	margin-top: 15px;
	padding-right: 25px;
	padding-left: 25px;
	background-color: ${theme.colors.white};
`;

export const StyledHeaderContainer = styled.View`
	padding-top: 15px;
	padding-bottom: 15px;
`;

export const StyledButton = styled.TouchableOpacity`
	height: 25px;
	width: 15px;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0.1px;
	top: 10px;
`;

export const StyledIcon = styled.Image`
	left: 5px;
	tint-color: ${theme.colors.eden};
`;

export const StyledText = styled.Text<CommentType>`
	color: ${(props) =>
		props.isGreen ? theme.colors.eden : theme.colors.black_pearl};
	font-size: 13px;
	font-style: italic;
	margin-bottom: 10px;
`;
