import {TextProps, ViewProps} from "react-native";
import styled from "styled-components/native";
import theme from "../../styles/theme";

interface TextType extends TextProps {
	textWeight?: string;
	textColor?: string;
	textSize?: string;
}

interface ViewType extends ViewProps {
	isFooter: boolean;
}

export const StyleButton = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.95,
}))(() => "");

export const StyledCardContainer = styled.ImageBackground<ViewType>`
	border-radius: 10px;
	margin-right: 15px;
	height: ${(props) => (props.isFooter ? "120px" : "240px")};
	width: 160px;
	overflow: hidden;
`;

export const StyledNewsContainer = styled.View`
	height: 48px;
	width: 48px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	left: 80px;
	bottom: 28px;
	background-color: ${theme.colors.eden};
`;

export const StyledTextContainer = styled.View`
	height: 120px;
	margin-top: 120px;
	padding: 10px;
	opacity: 0.95;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
	background-color: ${theme.colors.white};
`;

export const StyledText = styled.Text<TextType>`
	color: ${(props) => props.textColor || theme.colors.eden};
	font-size: ${(props) => props.textSize || "16px"};
	font-weight: ${(props) => props.textWeight || 300};
`;

export const StyledFooter = styled.View`
	flex-direction: row;
	align-items: center;
	border-top-width: 0.5px;
	border-top-color: ${theme.colors.eden};
`;

export const StyledBorderContainer = styled.View`
	top: 96px;
	width: 100%;
	height: 24px;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;
	background-color: ${theme.colors.white};
	align-items: center;
`;
