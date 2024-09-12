import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import VectorIcon from "../utils/VectorIcon";
import { Colors } from "../theme/Colors";

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const [sendEnable, setSendEnable] = useState(false);

  const changeHandler = (value) => {
    setMessage(value);
    setSendEnable(value.trim().length > 0);
  };

  const onSend = () => {
    setMessage("");
    setSendEnable(false);
    Alert.alert("sent Succesfully Msg:", message);
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <View style={Styles.row}>
          <VectorIcon
            name="emoji-emotions"
            type="MaterialIcons"
            size={24}
            color={Colors.textGrey}
            style={Styles.icon}
          />
          <TextInput
            placeholder="Type a message"
            style={Styles.inputBox}
            multiline
            maxHeight={100}
            scrollEnabled
            placeholderTextColor={Colors.textGrey}
            onChangeText={changeHandler}
            value={message}
          />
        </View>
        <View style={Styles.threeIcon}>
          <VectorIcon
            name="attachment"
            type="Entypo"
            size={20}
            color={Colors.textGrey}
          />
          {sendEnable ? (
            ""
          ) : (
            <>
              <VectorIcon
                name="camera"
                type="Entypo"
                size={20}
                color={Colors.textGrey}
              />
            </>
          )}
        </View>
      </View>
      <View style={Styles.rightContainer}>
        {sendEnable ? (
          <TouchableOpacity onPress={onSend}>
            <VectorIcon
              name="send"
              type="MaterialCommunityIcons"
              size={20}
              color={Colors.white}
            />
          </TouchableOpacity>
        ) : (
          <VectorIcon
            name="microphone"
            type="MaterialCommunityIcons"
            size={20}
            color={Colors.white}
          />
        )}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    justifyContent: "center",
  },

  leftContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // Adds a shadow effect
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  threeIcon: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  rightContainer: {
    backgroundColor: Colors.teal,
    padding: 12,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3, // Adds a shadow effect
  },
  inputBox: {
    flex: 1, // takes up remaining space in the row
    fontSize: 16,
    color: Colors.white,
    padding: 0,
    margin: 0,
    maxHeight: 100, // Set max height to control the input box's height
  },
  icon: {
    marginRight: 8, // spacing between icon and input
  },
});

export default ChatFooter;
