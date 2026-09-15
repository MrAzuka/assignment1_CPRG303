import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Ionicons name="chevron-back" size={26} color="#000" />
      </TouchableOpacity>
      <View style={styles.usernameRow}>
        <Text style={styles.username}>mrazu_ka</Text>
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons name="logo-threads" size={20} color="#000" />
        <Ionicons name="menu" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
