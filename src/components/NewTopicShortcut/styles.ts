import styled from "styled-components/native";
import theme from "../../styles/theme";

export const StyledButton = styled.TouchableOpacity`
	border-radius: 50px;
	width: 56px;
	height: 56px;
	background-color: ${theme.colors.brown_derby};
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 10px;
	right: 25px;
`;

export const StyledIcon = styled.Image`
	width: 26px;
	height: 26px;
	tint-color: ${theme.colors.white};
`;
