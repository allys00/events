import styled, { css } from 'styled-components/native';

const Input = styled.TextInput`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #ABB1B6;
  color: #333;
  padding: 20px 20px;
  width: 100%;
  ${props => props.hasFocus && css`
    border: 1px solid #733DBE;
  `}
`
export default Input;