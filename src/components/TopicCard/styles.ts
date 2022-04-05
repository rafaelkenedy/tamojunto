import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface TextType extends TextProps {
	textWeight?: string;
	textColor?: string;
	textSize?: string;
}

export const StyledText = styled.Text<TextType>`
	color: ${(props) => props.textColor || theme.colors.eden};
	font-weight: bold;
	font-size: ${(props) => props.textSize || '16px'};
	font-weight: ${(props) => props.textWeight || 300};
`;

export const StyledCardContainer = styled.View`
	border-radius: 10px;
	margin-right: 15px;
	height: 240px;
	width: 160px;
	overflow: hidden;
	background-color: ${theme.colors.success};
`;

export const StyledTextContainer = styled.View`
	height: 120px;
	margin-top: 120px;
	padding: 10px;
	opacity: 0.8;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
	background-color: ${theme.colors.catskill_white};
`;

export const StyledNewsContainer = styled.View`
	height: 48px;
	width: 48px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	left: 80px;
	bottom: 28px;
	background-color: ${theme.colors.eden};
`;

export const StyledFooter = styled.View`
	flex-direction: row;
	align-items: center;
	border-top-width: 0.5px;
	border-top-color: ${theme.colors.eden};
`;
