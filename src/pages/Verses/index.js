import * as React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Api from "../../services/api";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    ///  backgroundColor: "#fff",
  },
  card: {
    marginBottom: 8,
  },
  verseText: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify", // Justifica o texto
  },
  titleCircle: {
    width: 25, // Largura e altura iguais para formar o círculo
    height: 25,
    borderRadius: 20, // Raio para o círculo
    // backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 3,
    marginLeft: 3,
  },
  titleText: {
    // color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

const Verses = ({ route, navigation }) => {
  const [verses, setVerses] = React.useState([]); // Estado para armazenar os versículos

  async function list_verses(bookid, chapter) {
    try {
      const response = await Api.get(`get-text/NVIPT/${bookid}/${chapter}/`);
      setVerses(response.data); // Armazena a lista de versículos no estado
    } catch (error) {
      console.log("ERRO " + error);
    }
  }

  React.useEffect(() => {
    list_verses(route.params?.bookid, route.params?.chapter);
  }, [route.params]);

  return (
    <ScrollView style={styles.container}>
      {verses.map((verse, index) => (
        <Card key={index} style={styles.card}>
          <View style={styles.titleCircle}>
            <Text style={styles.titleText}>{verse.verse}</Text>
          </View>
          <Card.Content>
            <Text style={styles.verseText} selectable={true}>
              {verse.text}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Verses;
