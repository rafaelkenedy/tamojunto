import styled from "styled-components/native";
import theme from "../../styles/theme";

interface CustomAlertStyleProps {
	isBold?: boolean;
}

export const StyledViewContainer = styled.View`
	position: absolute;
	z-index: 5;
	height: 150px;
	border-radius: 16px;
	padding: 15px;
	width: 80%;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.eden};
	left: 38px;
	top: 290px;
`;

export const StyledText = styled.Text<CustomAlertStyleProps>`
	color: ${theme.colors.white};
	font-weight: ${(props) => (props.isBold ? "bold" : 400)};
	font-size: 18px;
`;
