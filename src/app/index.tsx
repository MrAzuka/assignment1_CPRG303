import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabBar from "./bottomtab";
import Header from "./header";
import PhotoGrid from "./photogrid";
import ProfileStats from "./profilestate";
import { styles } from "./styles";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileStats></ProfileStats>
        <PhotoGrid></PhotoGrid>
      </ScrollView>
      <BottomTabBar></BottomTabBar>
    </SafeAreaView>
  );
}
