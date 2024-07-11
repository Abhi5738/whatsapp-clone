import React from "react";
import { Feather } from "@expo/vector-icons";
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
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
};

function VectorIcon({ type, name, color, size }) {
  const IconType = iconSet[type];
  return <IconType name={name} color={color} size={size} />;
}

export default VectorIcon;
