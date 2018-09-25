import LocalizedStrings from "react-native-localization";

let strings = new LocalizedStrings({
  en: {
    emailAddress: "Email address",
    password: "Password",
    confirmPassword: "Confirm password",
    invalidEmailFormat: "A valid email can only contain latin letters, numbers, '@' and '.'.",
    emailRequired: "An email address is required.",
    passwordRequired: "A password is required.",
    passwordMinLength: "A secure password must be at least 8 characters long.",
    passwordMismatch: "The passwords must match.",
    confirmPasswordRequired: "You have to confirm your password."
  },
  de: {
    emailAddress: "Email Addresse",
    password: "Passwort",
    confirmPassword: "Passwort bestätigen",
    invalidEmailFormat:
      "Eine valide Email enthält nur lateinische Buchstaben, Nummern, '@' und '.'.",
    emailRequired: "Eine Email Addresse ist notwendig.",
    passwordRequired: "Ein Passwort ist notwendig.",
    passwordMinLength: "Ein sicheres Passwort muss mindestens 8 Zeichen lang sein.",
    passwordMismatch: "Die Passwörter müssen übereinstimmen.",
    confirmPasswordRequired: "Du musst dein Passwort bestätigen."
  }
});

export default strings;
