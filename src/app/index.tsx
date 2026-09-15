import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./header";
import PhotoGrid from "./photogrid";
import ProfileStats from "./profilestate";
import { styles } from "./styles";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <ProfileStats></ProfileStats>
      <PhotoGrid></PhotoGrid>
    </SafeAreaView>
  );
}
