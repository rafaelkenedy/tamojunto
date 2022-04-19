import {ProgressSteps} from "react-native-progress-steps";
import styled from "styled-components/native";
import theme from "../../styles/theme";
import {ViewProps} from "react-native";

export const StyledContainer = styled.ImageBackground.attrs({
	source: require("../../assets/images/background_variation.png"),
})<ViewProps>`
	flex: 1;
`;

export const StyledSteps = styled(ProgressSteps).attrs(() => ({
	progressBarColor: theme.colors.tide,
	completedProgressBarColor: theme.colors.eden,
	activeStepNumColor: theme.colors.eden,
	completedStepIconColor: theme.colors.eden,
	labelColor: theme.colors.tide,
	activeStepIconBorderColor: theme.colors.eden,
	activeLabelColor: theme.colors.eden,
	labelFontSize: 15,
	disabledStepIconColor: theme.colors.tide,
	borderWidth: 8,
	topOffset: 30,
	marginBottom: 10,
}))``;
