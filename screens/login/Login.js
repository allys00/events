import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import Input from '../../components/Input';
import Container from '../../components/Container';
import Text from '../../components/Text'
import Button from '../../components/Button';


class Login extends Component {

  state = {
    showPassword: false,
    inputWithFocus: null,
    email: '',
    password: ''
  }

  onLogin = () => {
    console.log("Login");
  }

  render() {
    const { showPassword, inputWithFocus, email, password } = this.state;
    return (
      <Container style={styles.flexCenter}>
        <View style={styles.formView}>
          <Text weight="bold" fontSize={25} marginBottom={30}>Faça seu login 🔑</Text>
          <Text color="#666666">E-mail ou usuário</Text>
          <View style={styles.inputView}>
            <Input
              type="email"
              hasFocus={inputWithFocus === 'email'}
              onBlur={() => this.setState({ inputWithFocus: '' })}
              onFocus={() => this.setState({ inputWithFocus: 'email' })}
              onChangeText={text => this.setState({ email: text })}
              value={email}
              returnKeyType={"next"}
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
              blurOnSubmit={false}
              autoFocus={false} />
            <FontAwesome
              style={styles.iconFloat}
              name="envelope-o"
              size={25}
              color="#999" />
          </View>

          <Text color="#666666">Senha</Text>
          <View style={styles.inputView}>
            <Input
              hasFocus={inputWithFocus === 'password'}
              ref={(input) => { this.secondTextInput = input; }}
              onBlur={() => this.setState({ inputWithFocus: null })}
              onFocus={() => this.setState({ inputWithFocus: 'password' })}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry={!showPassword}
              onSubmitEditing={() => this.onLogin({ email, password })}
              returnKeyType={"done"}
              value={password}
            />
            <FontAwesome
              style={styles.iconFloat}
              name={showPassword ? 'eye' : 'eye-slash'}
              color="#999"
              size={25}
              onPress={() => this.setState({ showPassword: !showPassword })} />
          </View>
        </View>
        <Button text="Entrar" />
      </Container >
    )
  }
}

const styles = StyleSheet.create({
  flexCenter: {
    paddingTop: Dimensions.get('window').height * (1 / 4),
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  iconFloat: {
    position: 'absolute',
    right: 15,
  },
  inputView: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  }
})

export default Login;
