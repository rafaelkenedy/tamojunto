import styled from 'styled-components/native';
import theme from '../../styles/theme';
import ToggleSwitch from 'toggle-switch-react-native';

export const StyledViewContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 15px;
	margin-bottom: 10px;
`;

export const StyledText = styled.Text`
	font-size: 16px;
	font-weight: 400;
	color: ${theme.colors.black_pearl};
`;

// @ts-ignore
export const StyledToggle = styled(ToggleSwitch).attrs(() => ({
	isOn: false,
	onColor: theme.colors.eden,
	offColor: theme.colors.tide,
}))(() => '');
