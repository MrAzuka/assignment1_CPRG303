import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { styles } from "./styles";

export default function BottomTabBar() {
  return (
    <View style={styles.tabBar}>
      <Ionicons name="home-outline" size={26} color="#000" />
      <Ionicons name="search-outline" size={26} color="#000" />
      <Ionicons name="play-circle-outline" size={26} color="#000" />
      <Ionicons name="bag-outline" size={26} color="#000" />
      <Ionicons name="person-circle-outline" size={26} color="#000" />
    </View>
  );
}
