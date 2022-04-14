import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';
import TextArea from '../../components/TextArea';
import { TouchableOpacityProps } from 'react-native';

const elevationValue = 3;
interface TextType extends TextProps {
	textWeight?: string;
	textColor?: string;
	textSize?: string;
}

interface ButtonProps extends TouchableOpacityProps{
	isDisabled?: boolean;
	color?: string;
	children?: string;	
}

export const StyledView = styled.View`
	flex: 1;
`;

export const StyledStepHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 50px;	
	margin: 40px;
`;

export const StyledStepWrap = styled.View`
	width: 48px;
	height: 100%;
	align-items: center;
	justify-content: flex-end;
`;

export const StyledCheckTitle = styled.Text<TextType>`
	
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '13px'};
	font-weight: ${(props) => props.textWeight || 400};
	width: 48px;
`;

export const StyledStepIcon = styled.Image`	
	height: 24px;
	width: 24px;
	
	
	
`;


export const StyledBackground = styled.ImageBackground`
    flex: 1;
    resizeMethod="resize";
    justify-content: flex-end;
	
`;

export const StyledFormContainer = styled.View`
	margin-horizontal: 24px;
`;

export const StyledInputName = styled(TextArea).attrs({
	placeholder: 'Insira seu nome e sobrenome...',
	borderColor: theme.colors.border_gray,
	borderSize: '1px',
	shadowBox: elevationValue,
})`
	align-self: center;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledInputEmail = styled(TextArea).attrs({
	placeholder: 'Digite seu email...',
	borderColor: theme.colors.border_gray,
	borderSize: '1px',
	shadowBox: elevationValue,
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
	borderColor: theme.colors.border_gray,
	borderSize: '1px',
	placeholder: 'Digite sua senha...',
	shadowBox: elevationValue,
})`
	align-self: center;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledButtonContainer = styled.View`
	margin-horizontal: 34px;
	//background-color: ${theme.colors.athens_gray};

	//background-color: red;
`;

export const StyledLogosBtnContainer = styled.View`
	margin: 24px;
	padding-horizontal: 64px;
	justify-content: space-between;
	flex-direction: row;
`;

export const StyledFooterContainer = styled.View`
	margin-horizontal: 24px;
	margin-bottom: 41px;
`;

export const StyledLogo = styled.Image<ButtonProps>`
	
  
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
	margin-top: 20px;
	margin-right: 24px;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledFooterLink = styled.Text<TextType>`
	margin-top: 12px;
	margin-right: 24px;
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 700};
`;
