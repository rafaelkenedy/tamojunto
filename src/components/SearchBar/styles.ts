import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledContainer = styled.View`
	border-radius: 16px;
	border-width: 0.5px;
	flex-direction: row;
	border-color: ${theme.colors.tide};
	align-items: center;
	margin-top: 10px;
	background-color: ${theme.colors.white};
`;

export const StyledInput = styled.TextInput.attrs({
	placeholderTextColor: theme.colors.fuscous_gray,
})`
	width: 76%;
	font-size: 16px;
	margin-left: 12px;
	color: ${theme.colors.fuscous_gray};
`;

export const StyledLogo = styled.Image`
	width: 25px;
	height: 25px;
	left: 10px;
	tint-color: ${theme.colors.fuscous_gray};
`;
