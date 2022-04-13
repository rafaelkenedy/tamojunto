import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface TextSizeProps {
	sizeArea?: string;
	borderWidth?: string;
}

export const StyledViewContainer = styled.View<TextSizeProps>`
	border: 1px;
	border-color: ${theme.colors.border_gray}
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
	width: 100%;
	height: ${(props) => props.sizeArea};
	border-radius: 16px;
	background-color: ${theme.colors.white};
	padding-top: 4px;
	padding-left: 15px;
	margin-top: 8px;	
`;

export const StyledText = styled.TextInput.attrs({
	placeholderTextColor: theme.colors.fuscous_gray,
	maxLength: 400,
	multiline: true,
	textAlignVertical: 'top',
})`	
	color: ${theme.colors.black_pearl};
	width: 100%;
	height: 100%;
`;
