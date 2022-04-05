import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface TextType extends TextProps {
	textWeight?: string;
}

export const StyledContainer = styled.View`
	height: 70px;
	background-color: ${theme.colors.catskill_white};
	flex-direction: row;
	align-items: center;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	elevation: 20;
`;

export const StyledTitle = styled.Text<TextType>`
	font-size: 20px;
	color: ${theme.colors.eden};
	font-weight: ${(props) => props.textWeight || 300};
`;

export const StyledButton = styled.TouchableOpacity`
	padding-right: 5px;
	padding-left: 20px;
	margin: 10px;
`;

export const StyledMenu = styled.Image`
	tint-color: ${theme.colors.eden};
`;
