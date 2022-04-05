import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ButtonOptionsType {
	buttonColor?: boolean;
	textColor?: boolean;
}

export const StyledContainer = styled.View`
	flex-direction: row;
	height: 60px;
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
	justify-content: space-between;
`;

export const StyledButtonContainer = styled.TouchableOpacity<ButtonOptionsType>`
	height: 55px;
	width: 47%;
	border-radius: 16px;
	align-items: center;
	justify-content: center;
	background-color: ${(props) =>
		props.buttonColor ? theme.colors.tangerine : theme.colors.eden};
`;

export const StyledButtonText = styled.Text<ButtonOptionsType>`
	color: ${(props) =>
		props.textColor ? theme.colors.black_pearl : theme.colors.white};
	font-size: 16px;
	font-weight: 700;
	line-height: 22px;
	text-transform: uppercase;
`;
