import styled from "styled-components/native";
import theme from "../../styles/theme";

interface DrawerMenuStyleProps {
	nightMode?: boolean;
	isBold?: boolean;
	isEmail?: boolean;
}

export const StyledDrawerContainer = styled.View<DrawerMenuStyleProps>`
	height: 100%;
	width: 100%;
	padding-left: 20px;
	border-top-right-radius: 16px;
	border-bottom-right-radius: 16px;
	background-color: ${(props) =>
		props.nightMode ? theme.colors.dark_background : theme.colors.white};
	justify-content: space-between;
	position: absolute;
	z-index: 2;
`;

export const StyledHeaderContainer = styled.View`
	flex-direction: row;
	margin-top: 60px;
	margin-bottom: 30px;
`;

export const StyledInfo = styled.View`
	margin-left: 15px;
`;

export const StyledButton = styled.TouchableOpacity`
	flex-direction: row;
	margin-bottom: 25px;
`;

export const StyledUserImage = styled.Image`
	border-radius: 50px;
	width: 50px;
	height: 50px;
	background-color: ${theme.colors.granny_smith};
`;

export const StyledIcon = styled.Image<DrawerMenuStyleProps>`
	margin-right: 10px;
	tint-color: ${(props) =>
		props.nightMode ? theme.colors.dark_text : theme.colors.black_pearl};
`;

export const StyledText = styled.Text<DrawerMenuStyleProps>`
	color: ${(props) =>
		props.nightMode ? theme.colors.dark_text : theme.colors.black_pearl};
	font-weight: ${(props) => (props.isBold ? "bold" : 400)};
	font-size: ${(props) => (props.isEmail ? "13px" : "16px")};
`;

export const StyledNotify = styled.View`
	background-color: ${theme.colors.error};
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	width: 20px;
	height: 20px;
	left: 90px;
	top: 2px;
`;

export const StyledNotifyText = styled.Text`
	font-size: 10px;
	font-weight: 600;
	color: ${theme.colors.black_pearl};
`;

export const StyledFooterContainer = styled.View`
	align-items: center;
	border-top-width: 0.5px;
	border-top-color: ${theme.colors.tide};
	width: 240px;
	padding-top: 15px;
	margin-top: 55px;
`;

export const StyledNightModeContainer = styled.View<DrawerMenuStyleProps>`
	flex-direction: row;
	justify-content: space-between;
	border-radius: 40px;
	padding-left: 5px;
	padding-right: 5px;
	height: 40px;
	width: 100%;
	background-color: ${(props) =>
		props.nightMode
			? theme.colors.dark_container
			: theme.colors.catskill_white};
	margin-bottom: 15px;
`;

export const StyledNightModeButton = styled.TouchableOpacity<DrawerMenuStyleProps>`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 115px;
	border-radius: 32px;
	margin-top: 5px;
	margin-bottom: 5px;
	background-color: ${(props) =>
		props.nightMode ? theme.colors.white : theme.colors.catskill_white};
`;
