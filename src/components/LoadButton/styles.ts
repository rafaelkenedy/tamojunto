import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ColorType extends TouchableOpacityProps {
	isComment?: boolean;
}

export const StyledButton = styled.TouchableOpacity<ColorType>`
	height: 55px;
	width: 100%;
	border-radius: 16px;
	border-width: 2px;
	border-color: ${theme.colors.eden};
	background-color: ${(props) =>
		props.isComment ? theme.colors.white : theme.colors.eden};
	margin-top: 25px;
	margin-bottom: 10px;
	justify-content: center;
	align-items: center;
`;

export const StyledTitle = styled.Text<ColorType>`
	color: ${(props) =>
		props.isComment ? theme.colors.eden : theme.colors.white};
	font-size: 16px;
	font-weight: 700;
	line-height: 22.4px;
	text-transform: uppercase;
`;
