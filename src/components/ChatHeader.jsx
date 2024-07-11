import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VectorIcon from "../utils/VectorIcon";
import { Colors } from "../theme/Colors";
import { Image } from "react-native";
import profile from "../assets/user1.jpeg";
import { useNavigation } from "@react-navigation/native";

const ChatHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <VectorIcon
            type="Ionicons"
            name="arrow-back"d
            color={Colors.white}
            size={24}
          />
        </TouchableOpacity>
        <Image source={profile} style={Styles.profileImage} />
        <Text style={Styles.username}>Nayera</Text>
      </View>
      <View style={Styles.innerContainer2}>
        <VectorIcon
          type="AntDesign"
          name="videocamera"
          size={22}
          color={Colors.white}
        />
        <VectorIcon
          type="FontAwesome"
          name="phone"
          size={22}
          color={Colors.white}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          size={22}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer1: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerContainer2: {
    flexDirection: "row",
    gap: 20,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    color: "white",
    marginLeft: 10,
    fontSize: 17,
  },
});

export default ChatHeader;
