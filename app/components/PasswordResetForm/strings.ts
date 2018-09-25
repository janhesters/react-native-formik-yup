import LocalizedStrings from "react-native-localization";

let strings = new LocalizedStrings({
  en: {
    resetPassword: "Reset password",
    backToLogin: "Back to Log In",
    emailAddress: "Email address",
    invalidEmailFormat: "A valid email can only contain latin letters, numbers, '@' and '.'.",
    emailRequired: "An email address is required.",
    alertTitle: "Email sent",
    alertMessage: "Check your email to reset your password.",
    ok: "Ok"
  },
  de: {
    resetPassword: "Passwort zurücksetzen",
    backToLogin: "Zurück zum Einloggen",
    emailAddress: "Email Addresse",
    invalidEmailFormat:
      "Eine valide Email enthält nur lateinische Buchstaben, Nummern, '@' und '.'.",
    emailRequired: "Eine Email Addresse ist notwendig.",
    alertTitle: "Email gesendet",
    alertMessage: "Check deine Mails um dein Password zurückzusetzen.",
    ok: "Ok"
  }
});

export default strings;
