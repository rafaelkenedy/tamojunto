import styled from "styled-components/native";
import theme from "../../styles/theme";
import {Picker} from "@react-native-community/picker";

export const StyledViewContainer = styled.View`
	margin-top: 12px;
	width: 100%;
	height: 55px;
	background-color: ${theme.colors.white};
	border-radius: 16px;
	padding-top: 3px;
	padding-left: 15px;
`;

export const StyledIcon = styled.Image`
	tint-color: ${theme.colors.black_pearl};
	height: 10px;
	width: 20px;
	position: absolute;
	right: 29px;
	top: 25px;
`;

// @ts-ignore
export const StyledSelect = styled(Picker).attrs(() => ({
	mode: "dialog",
}))`
	color: ${theme.colors.black_pearl};
	font-size: 16px;
`;
