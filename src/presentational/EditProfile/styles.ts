import styled from "styled-components/native";
import theme from "../../styles/theme";

interface EditProfileStylePropsType {
	isBold?: boolean;
	marginTop?: string;
}

export const StyledContainer = styled.ScrollView`
	flex: 1;
`;

export const StyledView = styled.View`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
	margin-top: 5px;
`;

export const StyledText = styled.Text<EditProfileStylePropsType>`
	color: ${theme.colors.black_pearl};
	font-size: 16px;
	font-weight: ${(props) => (props.isBold ? "bold" : 400)};
	margin-top: ${(props) => props.marginTop || "0px"};
`;

export const StyledFooter = styled.View`
	height: 50px;
	width: 100%;
`;
