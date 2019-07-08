import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

const Button = styled.TouchableOpacity`
  flexDirection: row;
  justifyContent: center;
  alignItems:center;
  background: #733DBE;
  border-radius: 5px;
  padding: 20px 25px;
  ${props => props.isLoading && css`
    opacity: 0.4;
    color: white;
  `}
`;

const LabelButton = styled.Text`
  fontWeight: bold;
  color: #fff;
  fontSize: 16px;
  marginLeft: 5px;
`

const ButtonWrapper = ({ text, onPress, isLoading, id }) => (
  <Button onPress={isLoading ? () => { } : onPress} isLoading={isLoading} >
    <>
      <View>
        {isLoading && <ActivityIndicator size="small" color="#ffffff" />}
      </View>
      <LabelButton >{isLoading ? 'Carregando' : text}</LabelButton>
    </>
  </Button >
)

export default ButtonWrapper;
