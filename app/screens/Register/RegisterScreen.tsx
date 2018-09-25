import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Platform, KeyboardAvoidingView } from "react-native";
import { Icon } from "react-native-elements";
import { TabScene, NavigationScreenProps } from "react-navigation";
import RegisterForm from "../../components/RegisterForm";

class RegisterScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    tabBarLabel: strings.registerTitle,
    tabBarIcon: ({ tintColor }: TabScene) => {
      let iconName = Platform.select({ ios: "ios-person-add", android: "md-person-add" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <RegisterForm navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    );
  }
}

export default RegisterScreen;
