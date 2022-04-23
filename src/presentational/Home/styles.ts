import styled from "styled-components/native";
import theme from "../../styles/theme";

interface HomeStylePropsType {
	textWeight?: string;
	nightMode?: boolean;
}

export const StyledView = styled.View<HomeStylePropsType>`
	background-color: ${(props) =>
		props.nightMode ? theme.colors.dark_contrast : theme.colors.athens_gray};
	flex: 1;
`;

export const StyledFlatList = styled.FlatList`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
	margin-top: 5px;
`;

export const StyledText = styled.Text<HomeStylePropsType>`
	margin-top: 15px;
	color: ${(props) =>
		props.nightMode ? theme.colors.white : theme.colors.eden};
	font-size: 16px;
	font-weight: ${(props) => props.textWeight || 300};
`;

export const StyledHeaderFlatList = styled.FlatList`
	margin-top: 15px;
`;

export const StyledLocker = styled.View`
	margin-bottom: 80px;
`;
