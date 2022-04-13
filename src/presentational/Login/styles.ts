import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';
import TextArea from '../../components/TextArea';

interface TextType extends TextProps {
	textWeight?: string;
	textColor?: string;
	textSize?: string;
}

export const StyledView = styled.View`
	//background-color: ${theme.colors.athens_gray};
	flex: 1;
`;

export const StyledBackground = styled.ImageBackground`
    flex: 1;
    resizeMethod="resize"
    justify-content: flex-end;
	
`;

export const StyledFormContainer = styled.View`
	margin-horizontal: 24px;
	//background-color: ${theme.colors.athens_gray};
`;

export const StyledInputEmail = styled(TextArea).attrs({
	placeholder: 'Digite seu email...',
	borderSize: '1px',
})`
	
	align-self: center;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledLabel = styled.Text`
	font-size: 16px;
	color: ${() => theme.colors.black_pearl};	
	font-weight: 700;
	margin-top: 24px;
	margin-bottom: 12px;

`;

export const StyledInputPass = styled(TextArea).attrs({
	placeholder: 'Digite sua senha...',
})`
	align-self: center;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledButtonContainer = styled.View`
	margin-horizontal: 24px;
	//background-color: ${theme.colors.athens_gray};

	//background-color: red;
`;

export const StyledLogosBtnContainer = styled.View`
	background-color: red;	
	height: 48px;
	margin-horizontal: 18px;
	align-self: center;
	align-items: center;
	align-content: center;
	flex-direction: row;
	margin-bottom: 64px;
`;

export const StyledFlatList = styled.FlatList`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
	margin-top: 5px;
`;

export const StyledLogo = styled.Image`
	width: 48px;
	height: 48px;
`;

export const StyledImage = styled.Image`
	width: 120px;
	height: 146.3px;
	align-self: center;
	margin-top: 78px;
`;

export const StyledText = styled.Text<TextType>`
	align-self: center;
	margin-top: 20px;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledFooter = styled.Text<TextType>`
	
	background: red;
	margin-top: 20px;
	margin-right: 24px;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;