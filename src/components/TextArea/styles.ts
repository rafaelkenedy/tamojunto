import styled from "styled-components/native";
import theme from "../../styles/theme";

interface TextAreaStylePropsType {
	borderColor: string;
	sizeArea?: string;
}

export const StyledViewContainer = styled.View<TextAreaStylePropsType>`
	border-width: 1px;
	border-color: ${(props) => props.borderColor};
	width: 100%;
	height: ${(props) => props.sizeArea};
	border-radius: 16px;
	background-color: ${theme.colors.white};
	padding-top: 4px;
	padding-left: 15px;
	margin-top: 8px;
`;

export const StyledText = styled.TextInput.attrs(() => ({
	placeholderTextColor: theme.colors.fuscous_gray,
	// maxLength: 400,
	// multiline: true,
	textAlignVertical: "top",
}))`
	color: ${theme.colors.black_pearl};
	width: 100%;
	height: 100%;
`;
