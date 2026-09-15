import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function ProfileStats() {
  return (
    <View style={styles.statsRow}>
      <View style={styles.avatarRing}>
        <View style={styles.avatarCircle}>
          <Image
            source={require("../../assets/images/profilepicture.jpeg")}
            style={{ width: 72, height: 72, borderRadius: 36 }}
          />
        </View>
      </View>

      <View style={styles.statsNumbers}>
        <StatItem number={5} label="Posts" />
        <StatItem number={749} label="Followers" />
        <StatItem number={1403} label="Following" />
      </View>
    </View>
  );
}

function StatItem({ number, label }: { number: number; label: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}
