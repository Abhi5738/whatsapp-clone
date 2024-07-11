import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CommunityIcon from "../assets/community-img.png";
import { Colors } from "../theme/Colors";

const CommunityScreen = () => {
  return (
    <View style={styles.communityContainer}>
      <Image style={styles.communityImg} source={CommunityIcon} />
      <Text style={styles.communityText}>Introducing communities</Text>
      <Text style={styles.communitySubText}>
        Easily organize your related groups and send announcement. Now, you
        communities, like neighbourhood or schools, can have thier own space.
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTitle}>Start Your Community</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  communityContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  communityImg: {
    height: 150,
    width: 250,
  },
  communityText: {
    color: Colors.white,
    marginTop: 40,
    fontSize: 26,
    fontWeight: "500",
  },
  communitySubText: {
    color: Colors.textGrey,
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 5,
    lineHeight: 22,
    letterSpacing: 0.6,
  },
  buttonStyle: {
    backgroundColor: Colors.tertiary,
    marginTop: 30,
    width: "80%",
    borderRadius: 30,
    padding: 8,
  },
  buttonTitle: {
    textAlign: "center",
    color: Colors.background,
    fontSize: 14,
  },
});

export default CommunityScreen;
