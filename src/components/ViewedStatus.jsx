import React from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../theme/Colors";

import { ViewedStatusData } from "../data/ViewedStatusData";

const ViewedStatus = () => {
  return (
    <>
      <Text style={Styles.viewdUpdates}>Viewed updates</Text>
      {ViewedStatusData.map((item) => {
        return (
          <View style={Styles.storySection} key={item.id}>
            <View style={Styles.imgStory}>
              <Image source={item.storyImg} style={Styles.statusStyle} />
            </View>
            <View>
              <Text style={Styles.username}>{item.name}</Text>
              <Text style={Styles.time}>{item.time}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

const Styles = StyleSheet.create({
  statusStyle: {
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  viewdUpdates: {
    color: Colors.textGrey,
    fontSize: 14,
    paddingBottom: 10,
  },
  imgStory: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.textGrey,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: "500",
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 2,
  },
  storySection: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginBottom: 15,
  },
});

export default ViewedStatus;
