import styles from "./styles";
import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import PasswordResetForm from "../../components/PasswordResetForm";
import { NavigationScreenProps } from "react-navigation";

class PasswordResetScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <PasswordResetForm navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    );
  }
}

export default PasswordResetScreen;
