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
	
	
})`
	align-self: center;	
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;

export const StyledLabel = styled.Text`
	font-size: 16px;
	color: ${theme.colors.black_pearl};	
	font-weight: 700;
	margin-top: 24px;
	margin-bottom: 12px;

`;

export const StyledInputPass = styled(TextArea).attrs({
	placeholder: 'Digite sua senha...',
	multiline: false,	
})`	
	align-self: center;
	borderSize: ${(props) => props.borderSize || '1px'};
	color: ${(props) => props.textColor || theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
	isMultiline: ${(props) => props.isMultiline || true};
	//border: 1px;
`;

export const StyledButtonContainer = styled.View`
	margin-horizontal: 24px;
	//background-color: ${theme.colors.athens_gray};

	//background-color: red;
`;

export const StyledFlatList = styled.FlatList`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
	margin-top: 5px;
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
