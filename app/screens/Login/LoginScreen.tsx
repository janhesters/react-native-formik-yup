import styles from "./styles";
import LoginForm from "../../components/LoginForm";
import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { NavigationScreenProps } from "react-navigation";

class LoginScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <LoginForm navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
