import {TextProps} from "react-native";
import styled from "styled-components/native";
import theme from "../../styles/theme";

interface TextType extends TextProps {
	textWeight?: string;
	textColor?: string;
	textSize?: string;
}

export const StyledView = styled.View`
	background-color: ${theme.colors.athens_gray};
	flex: 1;
`;

export const StyledContainer = styled.View`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
`;

export const StyledText = styled.Text<TextType>`
	margin-top: 15px;
	color: ${(props) => props.textColor || theme.colors.eden};
	font-size: ${(props) => props.textSize || "16px"};
	font-weight: ${(props) => props.textWeight || 300};
`;

export const StyledRow = styled.ScrollView`
	margin-top: 10px;
`;

export const StyledLocker = styled.View`
	margin-top: 15px;
	margin-bottom: 80px;
`;
