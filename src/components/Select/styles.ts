import styled from 'styled-components/native';
import theme from '../../styles/theme';
import Picker from 'react-native-picker-select';

export const StyledViewContainer = styled.View`
	margin-top: 12px;
	width: 100%;
	height: 55px;
	background-color: ${theme.colors.white};
	border-radius: 16px;
	padding-top: 3px;
	padding-left: 15px;
`;

export const StyledSelect = styled(Picker).attrs(() => ({
	placeholder: {
		label: 'Selecione um tema',
		value: null,
	},
	useNativeAndroidPickerStyle: false,
}))(() => '');
