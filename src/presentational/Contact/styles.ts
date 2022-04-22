import styled from "styled-components/native";
import theme from "../../styles/theme";

interface ContactStylePropsType {
	textColor?: string;
	textSize?: string;
	marginBottom?: string;
}

export const StyledContainer = styled.ScrollView`
	margin-top: 10px;
`;

export const StyledView = styled.View`
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.athens_gray};
`;

export const StyledText = styled.Text<ContactStylePropsType>`
	font-size: ${(props) => props.textSize || "16px"};
	color: ${(props) => props.textColor || theme.colors.eden};
`;

export const StyledImage = styled.Image`
	margin-top: 50px;
`;

export const StyledRow = styled.View<ContactStylePropsType>`
	flex-direction: row;
	margin-top: 15px;
	margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

export const StyledTrail = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 15px;
`;
