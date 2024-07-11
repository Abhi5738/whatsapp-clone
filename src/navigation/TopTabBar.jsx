import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CommunityScreen from "../screens/CommunityScreen";
import { Colors } from "../theme/Colors";
import VectorIcon from "../utils/VectorIcon";
import TabBarData from "../data/TabBarData";

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: Colors.primaryColor,
          },
          tabBarActiveTintColor: Colors.tertiary,
          tabBarInactiveTintColor: Colors.secondaryColor,
          tabBarIndicatorStyle: {
            backgroundColor: Colors.tertiary,
          },
        })}
      >
        <Tab.Screen
          name="Commu..."
          component={CommunityScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <VectorIcon
                type="FontAwesome"
                name="users"
                color={Colors.tertiary}
                size={20}
              />
            ),
          }}
        />

        {TabBarData.map((screen) => {
          return (
            <Tab.Screen
              key={screen.id}
              name={screen.name}
              component={screen.route}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default TopTabBar;
