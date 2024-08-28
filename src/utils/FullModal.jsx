import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Status1 from "../assets/status1.jpeg";

import User1 from "../assets/user1.jpeg";
import { Colors } from "../theme/Colors";
import VectorIcon from "./VectorIcon";
import { useNavigation } from "@react-navigation/native";
import ProgresBar from "./ProgresBar";

const FullModal = (props) => {
  const { showStatusModal, setShowStatusModal, item } = props;
  const navigation = useNavigation();
  const updateModalStatus = () => {
    setShowStatusModal((pre) => ({ ...pre, [item.id]: false }));
  };
  return (
    <View>
      <Modal
        visible={showStatusModal}
        animationType="fade"
        onRequestClose={updateModalStatus}
      >
        <View style={Styles.container}>
          <ProgresBar />
          <View style={Styles.topContainer}>
            <View style={Styles.profileSection}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <VectorIcon
                  type="Ionicons"
                  name="arrow-back"
                  color={Colors.white}
                  size={24}
                />
              </TouchableOpacity>
              <Image source={User1} style={Styles.profileImg} />
              <View>
                <Text style={Styles.userName}>Alexa</Text>
                <Text style={Styles.time}>Today, 03:12 am</Text>
              </View>
            </View>
            <VectorIcon
              type="Entypo"
              name="dots-three-vertical"
              color="white"
              size={20}
            />
          </View>

          <Image source={Status1} style={Styles.storyImg} />
          <Text style={Styles.storyMsg}>My Latest Art</Text>

          <View style={Styles.replySection}>
            <Text style={Styles.reply}>Reply</Text>
            <VectorIcon
              type="Entypo"
              name="chevron-small-up"
              color="white"
              size={24}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const Styles = StyleSheet.create({
  storyImg: {
    height: "75%",
    width: "100%",
  },
  storyMsg: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
    color: Colors.white,
  },
  container: {
    backgroundColor: Colors.primaryColor,
    height: "100%",
    justifyContent: "space-between",
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  userName: {
    fontSize: 17,
    color: Colors.white,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
  },
  profileSection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  reply: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
  },
  replySection: {
    alignItems: "center",
  },
});

export default FullModal;
