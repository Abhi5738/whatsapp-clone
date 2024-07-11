import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import ChatList from "../components/ChatList";
import VectorIcon from "../utils/VectorIcon";
import { Colors } from "../theme/Colors";

const ChatListScreen = () => {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <ChatList />
      </ScrollView>
      <TouchableOpacity style={Styles.contactIcon}>
        <VectorIcon
          name="message-reply-text"
          color={Colors.white}
          type="MaterialCommunityIcons"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    position: "relative",
    backgroundColor: Colors.background,
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    height: 60,
    width: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default ChatListScreen;
