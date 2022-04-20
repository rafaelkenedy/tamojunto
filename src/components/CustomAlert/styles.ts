import styled from "styled-components/native";
import theme from "../../styles/theme";

export const StyledViewContainer = styled.View`
	position: absolute;
	z-index: 5;
	height: 320px;
	border-radius: 16px;
	padding: 15px;
	width: 80%;
	justify-content: space-between;
	align-items: center;
	background-color: ${theme.colors.eden};
	left: 33px;
	top: 150px;
`;

export const StyledText = styled.Text`
	color: ${theme.colors.white};
	font-size: 18px;
`;

export const StyledButtom = styled.TouchableOpacity`
	position: absolute;
	z-index: 5;
	width: 80%;
	left: 33px;
	top: 490px;
	justify-content: center;
	align-items: center;
	height: 55px;
	border-radius: 16px;
	background-color: ${theme.colors.error};
`;
