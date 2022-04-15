import styled from 'styled-components/native';

export const StyledContainer = styled.ImageBackground.attrs({
    resizeMode: "cover"
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonContainer = styled.View`
  width: 80%;
  margin-bottom: 64px;
`;

export const StyledImage = styled.Image`
  align-self: center;
  margin-top: 200px;
  margin-bottom: 150px;
`;
