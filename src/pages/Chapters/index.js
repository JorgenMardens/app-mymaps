import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, FAB } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
});

const Chapters = ({ route, navigation }) => {
  React.useEffect(() => {
    if (route.params?.Chapters) {
      navigation.setOptions({ title: route.params.Chapters }); // Define o título com base no parâmetro passado
    }
  }, [route.params?.Chapters]);

  // Cria uma lista de elementos FAB para cada capítulo
  const chapterChips = [];
  for (let index = 1; index <= route.params?.chapters; index++) {
    chapterChips.push(
      <Button
        mode="text"
        contentStyle={{ paddingVertical: 8 }}
        labelStyle={{ fontSize: 20 }}
        key={index}
        onPress={() => {
          navigation.navigate("Verses", {
            book: route.params.book,
            chapter: index,
            bookid: route.params.bookid,
          });
        }}
      >
        {index}
      </Button>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>{chapterChips}</View>
    </ScrollView>
  );
};

export default Chapters;
