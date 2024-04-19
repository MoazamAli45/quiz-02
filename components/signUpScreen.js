import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.appName}>Sign Up</Text>
        {error ? (
          <Text
            style={{
              color: "red",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            {error}
          </Text>
        ) : null}
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
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        <Pressable onPress={handleSignUp} style={styles.btn}>
          <Text style={styles.btnText}>
            {loading ? "Processing..." : "Sign Up"}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("signIn")}
          style={styles.loginContainer}
        >
          <Text style={styles.haveAccountLabel}>
            Already have an account?{"  "}
            <Text style={styles.loginLabel}>Login</Text>
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
    marginTop: 10,

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
  loginContainer: {
    marginTop: 60,
  },
  haveAccountLabel: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  loginLabel: {
    color: "#1d9bf0",
  },
});

export default SignUpScreen;
