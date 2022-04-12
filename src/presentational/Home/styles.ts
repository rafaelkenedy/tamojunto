import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface TextType extends TextProps {
	textWeight?: string;
	textColor?: string;
	textSize?: string;
}

export const StyledView = styled.View`
	background-color: ${theme.colors.athens_gray};
	flex: 1;
`;

export const StyledFlatList = styled.FlatList`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
	margin-top: 5px;
`;

export const StyledText = styled.Text<TextType>`
	margin-top: 15px;
	color: ${(props) => props.textColor || theme.colors.eden};
	font-weight: bold;
	font-size: ${(props) => props.textSize || '16px'};
	font-weight: ${(props) => props.textWeight || 300};
`;

export const StyledHeaderFlatList = styled.FlatList`
	margin-top: 15px;
`;

export const StyledLocker = styled.View`
	margin-bottom: 80px;
`;
