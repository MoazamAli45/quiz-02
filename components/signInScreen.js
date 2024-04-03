import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { stylesSignIn } from "./style";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.appName}>Sign In</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        <Pressable
          onPress={handleSignIn}
          style={[styles.btn, { marginTop: error ? 10 : 20 }]}
        >
          <Text style={styles.btnText}>Sign In</Text>
        </Pressable>
        {/* Sign up navigation */}
        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpContainer}
        >
          <Text style={styles.noAccountLabel}>
            Don't have an account?{"  "}
            <Text style={styles.signUpLabel}>Create an account</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
  appName: {
    color: "#f02e65",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fef8fa",
    padding: 10,
    height: 40,
    alignSelf: "center",
    borderRadius: 5,

    width: "80%",
    color: "#000000",

    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#ffffff",
    padding: 10,
    height: 45,

    alignSelf: "center",
    borderRadius: 5,
    width: "80%",
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  btnText: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpContainer: {
    marginTop: 20,
  },
  noAccountLabel: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  signUpLabel: {
    color: "#1d9bf0",
  },
});

export default SignInScreen;
