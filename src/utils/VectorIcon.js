import React from "react";
import { Feather, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const iconSet = {
  Feather,
  EvilIcons,
  Entypo,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Fontisto,
  AntDesign,
};

function VectorIcon({ type, name, color, size }) {
  const IconType = iconSet[type];
  return <IconType name={name} color={color} size={size} />;
}

export default VectorIcon;
