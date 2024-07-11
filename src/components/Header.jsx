import { Image, View } from "react-native";
import WhatsappLogo from "../assets/whatsapp-logo.png";
import { StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import VectorIcon from "../utils/VectorIcon";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={WhatsappLogo} style={styles.logo} />
      </View>
      <View style={styles.headerIcon}>
        <VectorIcon type="Feather" name="camera" color="white" size={20} />
        <VectorIcon type="Feather" name="search" color="white" size={20} />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color="white"
          size={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    flexDirection: "row",
    gap: 25,
  },
  logo: {
    height: 25,
    width: 110,
  },
});

export default Header;
