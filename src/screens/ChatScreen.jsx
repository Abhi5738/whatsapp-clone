import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
import { wallpaper } from "../assets/wallpaper.jpeg";
const ChatScreen = () => {
  return (
    <View style={Styles.container}>
      <ChatHeader />
      <ImageBackground source={wallpaper} style={Styles.wallpaper}>
        <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wallpaper: {
    height: "100%",
    flex: 1,
  },
});

export default ChatScreen;
