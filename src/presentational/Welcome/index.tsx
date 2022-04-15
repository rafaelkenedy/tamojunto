import React from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import {StatusBar} from 'react-native';
import LoadButton from '../../components/LoadButton';
import {
    StyledContainer,
    StyledImage,
    StyledButtonContainer,
} from './styles';

const Welcome = ({navigation}) => {
    SystemNavigationBar.navigationHide();

    return (
        <StyledContainer source={require('../../assets/images/img_background.png')}>
            <StatusBar hidden/>
            <StyledImage source={require('../../assets/images/logo.png')}/>
            <StyledButtonContainer>
                <LoadButton buttonTitle="ENTRAR" action={() =>
                    navigation.navigate('Stack', {
                        screen: 'Login'
                    })}/>
                <LoadButton isComment buttonTitle="CRIAR CONTA"/>
            </StyledButtonContainer>
        </StyledContainer>
    );
}

export default Welcome;
