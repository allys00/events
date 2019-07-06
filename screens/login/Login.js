import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Dimensions, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Input from '../../components/Input';
import Container from '../../components/Container';
import Text from '../../components/Text'
import Button from '../../components/Button';
import { changeLoginForm, doLogin } from './Login.actions';
import { setNavigator } from '../../utils/NavigationService';


class Login extends Component {
  constructor(props) {
    super(props)

    setNavigator(props.navigation);

    this.state = {
      showPassword: false,
      inputWithFocus: null,
      email: '',
      password: ''
    }
  }



  render() {
    const { changeLoginForm, doLogin, login } = this.props;
    const { form, isLoading, msgError } = login;
    const { showPassword, inputWithFocus } = this.state;

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
              onChangeText={text => changeLoginForm('email', text)}
              value={form.email}
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
              onChangeText={text => changeLoginForm('password', text)}
              secureTextEntry={!showPassword}
              onSubmitEditing={() => doLogin(form)}
              returnKeyType={"done"}
              value={form.password}
            />
            <FontAwesome
              style={styles.iconFloat}
              name={showPassword ? 'eye' : 'eye-slash'}
              color="#999"
              size={25}
              onPress={() => this.setState({ showPassword: !showPassword })} />
          </View>
          {msgError && <Text style={styles.msgError}>{msgError}</Text>}
        </View>

        <Button
          isLoading={isLoading}
          text="Entrar"
          onPress={() => doLogin(form)} />

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
  msgError: {
    color: "#FF4500",
    textAlign: 'center'
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
const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, { changeLoginForm, doLogin })(Login);
