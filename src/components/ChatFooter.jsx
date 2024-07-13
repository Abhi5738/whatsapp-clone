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
    setSendEnable(true);
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
            size={22}
            color={Colors.white}
          />
          <TextInput
            placeholder="Message"
            style={Styles.inputBox}
            placeholderTextColor={Colors.textGrey}
            onChangeText={(value) => changeHandler(value)}
            value={message}
          />
        </View>
        <View style={Styles.threeIcon}>
          {sendEnable ? (
            <Text style={{ marginHorizontal: 20 }}></Text>
          ) : (
            <>
              <VectorIcon
                name="camera"
                type="Entypo"
                size={18}
                color={Colors.white}
              />
              <VectorIcon
                name="rupee"
                type="FontAwesome"
                size={18}
                color={Colors.white}
              />
            </>
          )}

          <VectorIcon
            name="attachment"
            type="Entypo"
            size={18}
            color={Colors.white}
          />
        </View>
      </View>
      <View style={Styles.rightContainer}>
        {sendEnable ? (
          <TouchableOpacity onPress={onSend}>
            <VectorIcon
              name="send"
              type="MaterialCommunityIcons"
              size={24}
              color={Colors.white}
            />
          </TouchableOpacity>
        ) : (
          <VectorIcon
            name="microphone"
            type="MaterialCommunityIcons"
            size={24}
            color={Colors.white}
          />
        )}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    
  },
  inputBox: {
    width: 180,
    fontSize: 17,
    color: Colors.white,
  },
  leftContainer: {
    width: "85%",
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    padding: 7,
    borderRadius: 30,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  threeIcon: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  rightContainer: {
    backgroundColor: Colors.teal,
    padding: 10,
    borderRadius: 100,
  },
});

export default ChatFooter;
