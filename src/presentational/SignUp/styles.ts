import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

const elevationValue = 3;
interface TextType extends TextProps {
	textWeight?: string;
	textSize?: string;
	topDistance?: string;
}

export const StyledView = styled.View`
	flex: 1;
	margin-horizontal: 24px;
`;

export const StyledStepWrap = styled.View`
	width: 48px;
	height: 100%;
	align-items: center;
	justify-content: flex-end;
`;

export const StyledContainer = styled.ImageBackground`
    flex: 1;
    resizeMethod="resize";
    justify-content: flex-end;	
`;

export const StyledText = styled.Text<TextType>`
	margin-top: ${(props) => props.topDistance || '1px'};
	color: ${theme.colors.black_pearl};
	font-size: ${(props) => props.textSize || '20px'};
	font-weight: ${(props) => props.textWeight || 400};
`;
export const StyledTermsWrap = styled.View`
	margin-vertical: 10px;
	align-items: center;
	padding-right: 25px;	
	flex-direction: row;

`;
export const StyledButton = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.5,
}))(() => '');
