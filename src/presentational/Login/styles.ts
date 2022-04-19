import styled from "styled-components/native";
import theme from "../../styles/theme";
import {ViewProps} from "react-native";

interface LoginStyleTypeProps {
	textWeight?: string;
	textSize?: string;
	topDistance?: string;
}

export const StyledContainer = styled.ImageBackground.attrs({
	source: require("../../assets/images/background_variation.png"),
})<ViewProps>`
	flex: 1;
	justify-content: center;
`;

export const StyledFormContainer = styled.ScrollView`
	padding-left: 25px;
	padding-right: 25px;
`;

export const StyledViewLocker = styled.View`
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

export const StyledLogo = styled.Image`
	margin-top: 90px;
`;

export const StyledSocialMediaLogo = styled.Image`
	height: 48px;
	width: 48px;
	margin-left: 15px;
	margin-right: 15px;
`;

export const StyledText = styled.Text<LoginStyleTypeProps>`
	margin-top: ${(props) => props.topDistance || "1px"};
	color: ${theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || "20px"};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledInputContainer = styled.View`
	width: 100%;
	margin-bottom: 5px;
`;

export const StyledButtonsContainer = styled.View`
	margin: 24px;
	padding-left: 64px;
	padding-right: 64px;
	justify-content: space-between;
	flex-direction: row;
`;

export const StyleButton = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.5,
}))(() => "");
