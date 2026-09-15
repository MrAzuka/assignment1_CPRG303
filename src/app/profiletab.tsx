import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function ProfileTabs() {
  const tabs: any = [
    { key: "grid", icon: "grid-outline" },
    { key: "reels", icon: "play-circle-outline" },
    { key: "tagged", icon: "sync-outline" },
    { key: "collections", icon: "person-outline" },
  ];

  return (
    <View style={styles.tabsRow}>
      {tabs.map((tab: any) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.tabItem}
          onPress={() => {}}
          activeOpacity={0.7}
        >
          <Ionicons name={tab.icon} size={24} color={"#666"} />
          <View style={styles.tabIndicator} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
