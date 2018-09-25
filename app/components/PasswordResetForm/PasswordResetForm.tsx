import strings from "./strings";
import styles from "./styles";
import { Formik, FormikActions, FormikProps } from "formik";
import React, { Component } from "react";
import { Alert, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { object as yupObject, string as yupString } from "yup";

interface FormValues {
  email: string;
}

export default class LoginForm extends Component<NavigationScreenProps> {
  handleSubmit = (values: FormValues, formikBag: FormikActions<FormValues>) => {
    formikBag.setSubmitting(true);
    // Here you would usually make a call to your API for a login.
    setTimeout(() => {
      formikBag.setSubmitting(false);
      Alert.alert(strings.alertTitle, strings.alertMessage, [
        { text: strings.ok, onPress: () => {} }
      ]);
    }, 3000);
  };

  renderForm = ({
    values,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isValid,
    isSubmitting
  }: FormikProps<FormValues>) => (
    <View style={styles.container}>
      <Input
        placeholder={strings.emailAddress}
        keyboardType="email-address"
        autoCapitalize="none"
        value={values.email}
        onChangeText={value => setFieldValue("email", value)}
        onBlur={() => setFieldTouched("email")}
        editable={!isSubmitting}
        errorMessage={touched.email && errors.email ? errors.email : undefined}
      />
      <Button
        title={strings.resetPassword}
        containerStyle={styles.loginButtonContainer}
        buttonStyle={styles.loginButton}
        disabledStyle={styles.disabled}
        titleStyle={styles.loginButtonTitle}
        disabledTitleStyle={styles.loginButtonTitle}
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        loadingProps={{ size: "large", color: "white" }}
      />
      <Button
        clear
        title={strings.backToLogin}
        containerStyle={styles.backToLoginButtonContainer}
        titleStyle={styles.backToLoginTitle}
        onPress={() => this.props.navigation.pop()}
      />
    </View>
  );

  render() {
    return (
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values: FormValues, formikBag: FormikActions<FormValues>) =>
          this.handleSubmit(values, formikBag)
        }
        validationSchema={yupObject().shape({
          email: yupString()
            .email(strings.invalidEmailFormat)
            .required(strings.emailRequired)
        })}
        render={(formikBag: FormikProps<FormValues>) => this.renderForm(formikBag)}
      />
    );
  }
}
