import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.TouchableHighlight`
  background: #733DBE;
  border-radius: 5px;
  padding: 20px 25px;
  justifyContent: center;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const LabelButton = styled.Text`
  fontWeight: bold;
  width: 100%;
  textAlign: center;
  color: #fff;
  fontSize: 16px;
`

const ButtonWrapper = ({ text }) => (
  <Button>
    <LabelButton >{text}</LabelButton>
  </Button>
)

export default ButtonWrapper;
