import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const StyledView = styled.View`
	background-color: ${theme.colors.athens_gray};
	flex: 1;
`;

export const StyledContainer = styled.ScrollView`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
`;
