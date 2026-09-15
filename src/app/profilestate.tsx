import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function ProfileStats() {
  return (
    <>
      <View style={styles.profileBlock}>
        <Image
          source={require("../../assets/images/profilepicture.jpeg")}
          style={styles.avatarPhoto}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.fullName}>Azuka Olisemelie David</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}> posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>749</Text>
              <Text style={styles.statLabel}> followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1,403</Text>
              <Text style={styles.statLabel}> following</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.bioText}>
        It takes at least a decade to become an overnight success 💪
      </Text>
    </>
  );
}
