import styled from 'styled-components';

const Text = styled.Text`
  fontWeight: ${props => props.weight};
  fontSize: ${props => props.fontSize};
  color: ${props => props.color};
  marginBottom: ${props => props.marginBottom};
  fontFamily: 'System'
`

Text.defaultProps = {
  weight: 'normal',
  fontSize: '14px',
  color: '#333',
  marginBottom: 10,
}

export default Text;