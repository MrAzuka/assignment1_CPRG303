import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Ionicons name="chevron-back" size={26} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons name="add" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
