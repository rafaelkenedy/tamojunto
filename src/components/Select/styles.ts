import styled from "styled-components/native";
import theme from "../../styles/theme";
import {Picker} from "@react-native-community/picker";

export const StyledViewContainer = styled.View`
	margin-top: 12px;
	width: 100%;
	height: 55px;
	border-width: 1px;
	background-color: ${theme.colors.white};
	border-color: ${theme.colors.tide};
	border-radius: 16px;
	justify-content: center;
	padding-left: 14px;
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
