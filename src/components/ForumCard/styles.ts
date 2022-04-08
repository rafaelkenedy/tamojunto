import {ViewProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ViewType extends ViewProps {
	line?: boolean;
	postSize?: boolean;
}

export const StyleButton = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.95,
}))(() => '');

export const StyledContainer = styled.View<ViewType>`
	height: ${(props) => (props.postSize ? 'auto' : '173px')};
	width: 100%;
	border-radius: 12px;
	margin-top: 15px;
	padding-right: 25px;
	padding-left: 25px;
	background-color: ${theme.colors.white};
`;

export const StyledHeaderContainer = styled.View<ViewType>`
	padding-top: 15px;
	border-bottom-width: ${(props) => (props.line ? '0.2px' : '0')};
	border-bottom-color: ${theme.colors.granny_smith};
`;

export const StyledButton = styled.TouchableOpacity`
	height: 25px;
	width: 15px;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 330px;
	top: 10px;
`;

export const StyledIcon = styled.Image`
	left: 5px;
	tint-color: ${theme.colors.eden};
`;

export const StyledTitle = styled.Text`
	color: ${theme.colors.eden};
	font-size: 13px;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const StyledText = styled.Text`
	color: ${theme.colors.black_pearl};
	font-size: 13px;
	font-style: italic;
	margin-bottom: 10px;
`;
