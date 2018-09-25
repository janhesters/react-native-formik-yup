import { Platform, StyleSheet } from "react-native";

const primaryBlue = Platform.select({
  ios: "#007aff", // rgb(0, 122, 255)
  android: "#2196f3" // rgb(33, 150, 243)
});

const imageWidth = "80%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  backToLoginButtonContainer: {
    width: imageWidth
  },
  backToLoginTitle: {
    color: primaryBlue
  },
  loginButtonContainer: {
    width: imageWidth
  },
  loginButton: {
    backgroundColor: primaryBlue
  },
  loginButtonTitle: {
    color: "white"
  },
  disabled: {
    backgroundColor: primaryBlue,
    opacity: 0.3
  }
});

export default styles;
