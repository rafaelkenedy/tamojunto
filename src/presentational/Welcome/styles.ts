import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

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

export const StyledButtonContainer = styled.View`
	margin-horizontal: 24px;
	//background-color: ${theme.colors.athens_gray};  
	
	margin-bottom: 64px;
    //background-color: red;
	
	
`;

export const StyledFlatList = styled.FlatList`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
	margin-top: 5px;
`;

export const StyledImage = styled.Image`
	align-self: center;	
	margin-top: 200px;
	margin-bottom: 150px;
	
	
`;

export const StyledText = styled.Text<TextType>`
	margin-top: 15px;
	color: ${(props) => props.textColor || theme.colors.eden};
	font-size: ${(props) => props.textSize || '16px'};
	font-weight: ${(props) => props.textWeight || 300};
`;
