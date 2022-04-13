import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const StyledContainer = styled.View`
	flex: 1;
	justify-content: center;
	bottom: 50px;
`;

// @ts-ignore
export const StyledLottie = styled(LottieView).attrs(() => ({
	autoPlay: true,
	loop: true,
	autoSize: true,
}))(() => '');
