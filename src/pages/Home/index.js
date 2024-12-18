import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import {
  FAB,
  Portal,
  Provider as PaperProvider,
  List,
} from "react-native-paper";
import Api from "../../services/api";
// teste
const Home = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  const [books, setBooks] = React.useState([]); // Estado para armazenar os livros

  const onStateChange = ({ open }) => setOpen(open);

  async function list_books() {
    try {
      const response = await Api.get("get-books/NVIPT/");
      setBooks(response.data); // Armazena a lista de livros no estado
    } catch (error) {
      console.log("ERRO" + error);
    }
  }

  // Chama list_books() quando o componente é montado para carregar os livros
  /// na constante books
  React.useEffect(() => {
    list_books();
  }, []);

  return (
    <PaperProvider>
      <Portal>
        {/* FAB para abrir o menu */}
        <FAB
          icon={open ? "book-arrow-up" : "book"}
          onPress={() => setOpen(!open)}
          style={{ position: "absolute", bottom: 16, right: 16 }}
        />
        {/* quando FAB é clicado começa aqui oque está dentro*/}
        {open && (
          <View
            style={{
              position: "absolute",
              bottom: 80,
              right: 16,
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              maxHeight: 500, // Define uma altura máxima para a lista com rolagem
              width: 250,
              shadowColor: "#000",
              shadowOpacity: 0.25,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <ScrollView>
              {books.map((book) => (
                <List.Item
                  key={book.bookid}
                  title={() => (
                    <Text style={{ textAlign: "right", flex: 1 }}>
                      {book.name}
                    </Text>
                  )}
                  right={(props) => (
                    <List.Icon {...props} icon="book-arrow-left" />
                  )}
                  onPress={() => {
                    setOpen(false);
                    navigation.navigate("Chapters", {
                      book: book.name,
                      chapters: book.chapters,
                      bookid: book.bookid,
                    });
                  }}
                />
              ))}
            </ScrollView>
          </View>
        )}
      </Portal>
    </PaperProvider>
  );
};

export default Home;
