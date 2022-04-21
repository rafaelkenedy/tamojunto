import styled from "styled-components/native";
import {ProgressStep} from "react-native-progress-steps";
import theme from "../../../../styles/theme";

interface Step1StylePropsType {
	isBold?: boolean;
	topDistance?: string;
}

export const StyledContainer = styled(ProgressStep).attrs(() => ({
	label: "Passo 1",
	nextBtnText: "CONTINUAR",
	nextBtnStyle: {
		backgroundColor: theme.colors.eden,
		borderRadius: 16,
		height: 60,
		width: 355,
		alignItems: "center",
		justifyContent: "center",
		left: 30,
	},
	nextBtnTextStyle: {
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
	font-size: ${(props) => (props.isBold ? "16px" : "18px")};
	font-weight: ${(props) => (props.isBold ? "bold" : 400)};
`;

export const StyledFooter = styled.View`
	height: 20px;
	margin-bottom: 20px;
`;
