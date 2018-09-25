import strings from "./strings";
import styles from "./styles";
import { strings as loginStrings } from "../../screens/Login";
import { Formik, FormikActions, FormikProps } from "formik";
import React, { Component } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { object as yupObject, string as yupString } from "yup";

interface FormValues {
  email: string;
  password: string;
}

export default class LoginForm extends Component<NavigationScreenProps> {
  handleSubmit = (values: FormValues, formikBag: FormikActions<FormValues>) => {
    formikBag.setSubmitting(true);
    // Here you would usually make a call to your API for a login.
    setTimeout(() => {
      formikBag.setSubmitting(false);
      this.props.navigation.navigate("HomeScreen");
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
      <Input
        placeholder={strings.password}
        secureTextEntry
        autoCapitalize="none"
        value={values.password}
        onChangeText={value => setFieldValue("password", value)}
        onBlur={() => setFieldTouched("password")}
        editable={!isSubmitting}
        errorMessage={touched.password && errors.password ? errors.password : undefined}
      />
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
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        loadingProps={{ size: "large", color: "white" }}
      />
    </View>
  );

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: FormValues, formikBag: FormikActions<FormValues>) =>
          this.handleSubmit(values, formikBag)
        }
        validationSchema={yupObject().shape({
          email: yupString()
            .email(strings.invalidEmailFormat)
            .required(strings.emailRequired),
          password: yupString()
            .min(8, strings.passwordMinLength)
            .required(strings.passwordRequired)
        })}
        render={(formikBag: FormikProps<FormValues>) => this.renderForm(formikBag)}
      />
    );
  }
}
