import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../theme/Colors";
import VectorIcon from "../utils/VectorIcon";
import { ChatListData } from "../data/ChatListData";
import { useNavigation } from "@react-navigation/native";

const ChatList = () => {
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate("ChatScreen");
  };
  return (
    <>
      {ChatListData.map((item) => {
        return (
          <View key={item.id}>
            <TouchableOpacity onPress={onNavigate}>
              <View style={styles.container}>
                <View style={styles.leftContainer}>
                  <Image source={item.profile} style={styles.profileImg} />
                  <View style={styles.messageContainer}>
                    <Text style={styles.username}>{item.name}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                  </View>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={styles.timeStamp}>{item.time}</Text>
                  {item.mute ? (
                    <VectorIcon
                      type="MaterialCommunityIcons"
                      name="volume-variant-off"
                      color={Colors.textGrey}
                      size={22}
                      style={styles.muteIcon}
                    />
                  ) : (
                    ""
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 12,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  profileImg: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 15,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  username: {
    color: Colors.textColor,
    fontSize: 16,
  },
  message: {
    color: Colors.textGrey,
    fontSize: 16,
    marginTop: 5,
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize: 12,
  },
  rightContainer: {
    gap: 5,
  },
});

export default ChatList;
