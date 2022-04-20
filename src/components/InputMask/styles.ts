import styled from "styled-components/native";
import theme from "../../styles/theme";
import MaskInput from "react-native-mask-input";

interface TextAreaStylePropsType {
	borderColor: string;
}

export const StyledViewContainer = styled.View<TextAreaStylePropsType>`
	border-width: 1px;
	border-color: ${(props) => props.borderColor};
	width: 100%;
	height: 55px;
	border-radius: 16px;
	background-color: ${theme.colors.white};
	padding-top: 4px;
	padding-left: 15px;
	margin-top: 8px;
`;

export const StyledText = styled(MaskInput)`
	color: ${theme.colors.black_pearl};
	width: 100%;
	height: 100%;
`;
