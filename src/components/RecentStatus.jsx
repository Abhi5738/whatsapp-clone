import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../theme/Colors";
import { RecentStatusData } from "../data/RecentStatusData";
import FullModal from "../utils/FullModal";

const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(true);
  return (
    <View>
      <Text style={Styles.recentUpdates}>RecentStatus </Text>\
      {RecentStatusData.map((item) => {
        console.log("testing log.");
        return (
          <>
            <TouchableOpacity>
              <View style={Styles.storySection} key={item.key}>
                <View style={Styles.imgStory}>
                  <Image source={item.storyImg} style={Styles.statusStyle} />
                </View>
                <View>
                  <Text style={Styles.username}>{item.name}</Text>
                  <Text style={Styles.time}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <FullModal
              showStatusModal={showStatusModal}
              setShowStatusModal={setShowStatusModal}
              item={item}
            />
          </>
        );
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  statusStyle: {
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  recentUpdates: {
    color: Colors.textGrey,
    fontSize: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  imgStory: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.tertiary,
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

export default RecentStatus;
