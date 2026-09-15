import { Ionicons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Buttons() {
  return (
    <View style={styles.buttonsRow}>
      <TouchableOpacity
        style={styles.actionButton}
        activeOpacity={0.7}
        onPress={() => Alert.alert("Edit profile", "Edit profile tapped")}
      >
        <Text style={styles.actionButtonText}>Edit profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        activeOpacity={0.7}
        onPress={() => Alert.alert("Share profile", "Share profile tapped")}
      >
        <Text style={styles.actionButtonText}>Share profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        activeOpacity={0.7}
        onPress={() =>
          Alert.alert("Add to favorites", "Add to favorites tapped")
        }
      >
        <Ionicons name="person-add-outline" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
