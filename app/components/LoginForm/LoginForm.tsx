import strings from "./strings";
import styles from "./styles";
import { strings as loginStrings } from "../../screens/Login";
import React, { Component } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

export class LoginForm extends Component<NavigationScreenProps> {
  renderForm = () => (
    <View style={styles.container}>
      <Input
        placeholder={strings.emailAddress}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder={strings.password} secureTextEntry autoCapitalize="none" />
      <Button
        clear
        title={loginStrings.forgottenPassword}
        containerStyle={styles.forgottenPasswordButtonContainer}
        titleStyle={styles.forgottenPasswordTitle}
        onPress={() => this.props.navigation.navigate("PasswordResetScreen")}
      />
      <Button
        title={loginStrings.loginTitle}
        containerStyle={styles.loginButtonContainer}
        buttonStyle={styles.loginButton}
        disabledStyle={styles.disabled}
        titleStyle={styles.loginButtonTitle}
        disabledTitleStyle={styles.loginButtonTitle}
      />
    </View>
  );

  render() {
    return this.renderForm();
  }
}

export default LoginForm;
