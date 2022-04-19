import {TextProps} from "react-native";
import styled from "styled-components/native";
import theme from "../../styles/theme";

interface TextType extends TextProps {
	isActive?: boolean;
}

export const StyledContainer = styled.View`
	height: 25px;
	width: 100%;
	margin-top: 15px;
	align-items: center;
	flex-direction: row;
`;

export const StyledIcon = styled.Image`
	margin-right: 10px;
	tint-color: ${theme.colors.friar_gray};
`;

export const StyledButton = styled.TouchableOpacity``;

export const StyledText = styled.Text<TextType>`
	color: ${(props) =>
		props.isActive ? theme.colors.eden : theme.colors.friar_gray};
	margin-right: 10px;
	font-weight: ${(props) => (props.isActive ? "bold" : 400)};
	font-size: 15px;
	bottom: 1px;
`;
