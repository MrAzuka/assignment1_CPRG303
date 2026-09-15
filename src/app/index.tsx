import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./header";
import ProfileStats from "./profilestate";
import { styles } from "./styles";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <ProfileStats></ProfileStats>
    </SafeAreaView>
  );
}
