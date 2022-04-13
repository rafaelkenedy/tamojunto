import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface TextType extends TextProps {
	textWeight?: string;
}

export const StyledContainer = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.95,
}))`
	flex: 1;
	background-color: ${theme.colors.white};
	height: 100%;
	width: 100%;
	opacity: 0.7;
	position: absolute;
	z-index: 3;
`;

export const StyledAlertContainer = styled.View`
	position: absolute;
	z-index: 4;
	border-radius: 16px;
	right: 42px;
	bottom: 310px;
	height: 160px;
	width: 325px;
	background-color: ${theme.colors.eden};
	align-items: center;
	justify-content: center;
`;

export const StyledButton = styled.TouchableOpacity`
	width: 80%;
	height: 60px;
	flex-direction: row;
	align-items: center;
`;

export const StyledView = styled.View`
	padding-left: 15px;
`;

export const StyledText = styled.Text<TextType>`
	color: ${theme.colors.white};
	font-size: 16px;
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledIcon = styled.Image`
	tint-color: ${theme.colors.white};
`;
