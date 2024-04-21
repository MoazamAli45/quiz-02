import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./components/signUpScreen";
import SignInScreen from "./components/signInScreen";

import PoseDetection from "./components/objectDetectionScreen";
import Home from "./components/home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name="PoseDetection"
          component={PoseDetection}
          options={{ title: "Pose Detection" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
