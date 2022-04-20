import styled from "styled-components/native";
import {ProgressStep} from "react-native-progress-steps";
import CheckBox from "@react-native-community/checkbox";
import theme from "../../../../styles/theme";

interface Step1StylePropsType {
	isBold?: boolean;
	textSize?: string;
	topDistance?: string;
}

export const StyledContainer = styled(ProgressStep).attrs(() => ({
	label: "Passo 2",
	nextBtnText: "CONTINUAR",
	previousBtnText: "VOLTAR",
	nextBtnStyle: {
		backgroundColor: theme.colors.eden,
		borderRadius: 16,
		height: 60,
		width: 170,
		alignItems: "center",
		justifyContent: "center",
		left: 30,
	},
	previousBtnStyle: {
		backgroundColor: theme.colors.eden,
		borderRadius: 16,
		height: 60,
		width: 170,
		alignItems: "center",
		justifyContent: "center",
		right: 30,
	},
	nextBtnTextStyle: {
		color: theme.colors.white,
		fontSize: 16,
		fontWeight: "bold",
	},
	previousBtnTextStyle: {
		color: theme.colors.white,
		fontSize: 16,
		fontWeight: "bold",
	},
}))``;

export const StyledView = styled.View`
	flex: 1;
	margin-left: 25px;
	margin-right: 25px;
`;

export const StyledText = styled.Text<Step1StylePropsType>`
	margin-top: ${(props) => props.topDistance || "1px"};
	color: ${theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || "18px"};
	font-weight: ${(props) => (props.isBold ? "bold" : 400)};
`;

// @ts-ignore
export const StyledCheckBox = styled(CheckBox).attrs(() => ({
	tintColors: {
		true: theme.colors.eden,
		false: theme.colors.black_pearl,
	},
	disabled: false,
}))`
	margin-right: 15px;
`;

export const StyledRowView = styled.View<Step1StylePropsType>`
	margin-top: ${(props) => props.topDistance || "1px"};
	flex-direction: row;
	height: 50px;
	width: 88%;
	align-items: center;
`;

export const StyledFooter = styled.View`
	height: 20px;
	margin-bottom: 20px;
`;
