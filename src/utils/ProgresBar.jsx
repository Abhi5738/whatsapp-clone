import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Colors } from "../theme/Colors";

const ProgresBar = () => {
  return (
    <View style={Styles.container}>
      <Animated.View style={Styles.progres} />
    </View>
  );
};

const Styles = StyleSheet.create({
  progres: {
    width: "100%",
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  container: {
    marginTop: 10,
  },
});

export default ProgresBar;
