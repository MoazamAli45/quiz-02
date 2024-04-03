import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LottieView from "lottie-react-native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <LottieView
          source={require("../assets/welcome.json")}
          autoPlay
          loop
          style={{ width: "100%", height: "20%" }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginTop: 20,
          }}
        >
          {" "}
          Pose Detection App
        </Text>
        <Pressable
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => navigation.push("PoseDetection")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Detect Your Pose
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
