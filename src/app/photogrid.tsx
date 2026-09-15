import { FlatList, Image } from "react-native";
import { styles } from "./styles";

export default function PhotoGrid() {
  return (
    <FlatList
      data={PHOTOS}
      keyExtractor={(item) => item.id}
      numColumns={3}
      scrollEnabled={false}
      contentContainerStyle={styles.gridContainer}
      renderItem={({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.gridImage} />
      )}
    />
  );
}

const PHOTOS = [
  { id: "1", uri: "https://picsum.photos/seed/ootd1/300/300" },
  { id: "2", uri: "https://picsum.photos/seed/ootd2/300/300" },
  { id: "3", uri: "https://picsum.photos/seed/ootd3/300/300" },
  { id: "4", uri: "https://picsum.photos/seed/ootd4/300/300" },
  { id: "5", uri: "https://picsum.photos/seed/ootd5/300/300" },
  { id: "6", uri: "https://picsum.photos/seed/ootd6/300/300" },
  { id: "7", uri: "https://picsum.photos/seed/ootd7/300/300" },
  { id: "8", uri: "https://picsum.photos/seed/ootd8/300/300" },
  { id: "9", uri: "https://picsum.photos/seed/ootd9/300/300" },
];
