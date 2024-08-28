import { ScrollView, StyleSheet, Text, View } from "react-native";
import MyStatus from "../components/MyStatus";
import RecentStatus from "../components/RecentStatus";
import { Colors } from "../theme/Colors";
import ViewedStatus from "../components/ViewedStatus";

const StatusListScreen = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.container}>
          <MyStatus />
          <RecentStatus />
          <ViewedStatus />
        </View>
      </ScrollView>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16,
  },
});

export default StatusListScreen;
