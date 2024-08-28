import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import profile from "../assets/user1.jpeg";
import { Colors } from "../theme/Colors";
import VectorIcon from "../utils/VectorIcon";

const MyStatus = () => {
  return (
    <View style={Styles.container}>
      <Image source={profile} style={Styles.profileStyle} />
      <View style={Styles.iconBg}>
        <VectorIcon
          name="pluscircle"
          type="AntDesign"
          size={20}
          color={Colors.tertiary}
        />
      </View>
      <View style={Styles.statusContainer}>
        <Text style={Styles.myStatus}>My Status</Text>
        <Text style={Styles.addStatus}>Tap to add status update</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  profileStyle: {
    borderRadius: 50,
    height: 50,
    width: 50,
    position: "relative",
  },
  myStatus: {
    color: Colors.white,
    fontWeight: "500",
  },
  addStatus: {
    color: Colors.textGrey,
    fontSize: 13,
    marginTop: 3,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
  },
  iconBg: {
    position: "absolute",
    backgroundColor: Colors.white,
    height: 20,
    width: 20,
    borderRadius: 50,
    bottom: 0,
    left: 30,
  },
});

export default MyStatus;
