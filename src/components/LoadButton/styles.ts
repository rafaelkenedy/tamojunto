import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledButton = styled.TouchableOpacity`
	height: 55px;
	width: 100%;
	border-radius: 16px;
	background-color: ${theme.colors.eden};
	margin-top: 25px;
	margin-bottom: 10px;
	justify-content: center;
	align-items: center;
`;

export const StyledTitle = styled.Text`
	color: ${theme.colors.white};
	font-size: 16px;
	font-weight: 700;
	line-height: 22.4px;
`;
