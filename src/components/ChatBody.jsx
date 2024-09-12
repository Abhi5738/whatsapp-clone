import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../theme/Colors";
import VectorIcon from "../utils/VectorIcon";
import { messageData } from "../data/MessageData";

const ChatBody = () => {
  const userId = "1";
  const scrollViewRef = useRef();
  const UserMessageView = ({ msg, time }) => {
    return (
      <View style={Styles.userContainer}>
        <View style={Styles.userInnerContainer}>
          <Text style={Styles.message}>{msg}</Text>
          <Text style={Styles.time}>{time}</Text>
          <VectorIcon
            style={Styles.doubleCheck}
            name="check-double"
            type="FontAwesome5"
            color={Colors.blue}
            size={12}
          />
        </View>
      </View>
    );
  };
  const OtherUserMessageView = ({ msg, time }) => {
    return (
      <View style={Styles.otherUserContainer}>
        <View style={Styles.otherUserInnerContainer}>
          <Text style={Styles.message}>{msg}</Text>
          <Text style={Styles.time}>{time}</Text>
        </View>
      </View>
    );
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onContentSizeChange={scrollToBottom}
        ref={scrollViewRef}
      >
        {messageData.map((item) => {
          return (
            <View key={item.id}>
              {item.id === userId ? (
                <UserMessageView msg={item.message} time={item.time} />
              ) : (
                <OtherUserMessageView msg={item.message} time={item.time} />
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={Styles.scrollIcon}>
        <View style={Styles.scrollDownArrow}>
          <TouchableOpacity onPress={scrollToBottom}>
            <VectorIcon
              name="angle-dobule-down"
              type="Fontisto"
              color={Colors.white}
              size={12}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  otherUserContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: "90%",
    flexWrap: "wrap",
  },
  message: {
    fontSize: 13,
    color: Colors.white,
    marginRight: 5,
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    marginLeft: "auto",
    marginRight: 5,
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 5,
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    height: 30,
    width: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollIcon: {
    position: "absolute",
    bottom: 12,
    right: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default ChatBody;
