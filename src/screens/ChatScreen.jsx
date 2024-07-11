import { Text, View } from "react-native";
import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";

const ChatScreen = () => {
  return (
    <View>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </View>
  );
};

export default ChatScreen;
