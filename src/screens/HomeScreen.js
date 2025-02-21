import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { FAB, Input, Button, Dialog, Text } from "@rneui/themed";
import SearchContext from "../context/SearchContext";
import MovieCard from "../components/MovieCard";

const HomeScreen = ({ navigation }) => {
  const { movies, searchMovies, setMovies } = useContext(SearchContext);
  const [query, setQuery] = useState("");
  const [isDialogVisible, setDialogVisible] = useState(false);

  const handleRentConfirm = (rentedMovie) => {
    setMovies(movies.filter((movie) => movie.id !== rentedMovie.id));
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ color: "black", marginRight: 24 }}
            onPress={() => navigation.navigate("Rented")}
          >
            Rented
          </Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} onRentConfirm={handleRentConfirm} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <FAB
        icon={{ name: "search", color: "white" }}
        onPress={() => setDialogVisible(true)}
        placement="right"
      />

      <Dialog
        isVisible={isDialogVisible}
        onBackdropPress={() => setDialogVisible(false)}
      >
        <Input placeholder="Search Movie" onChangeText={setQuery} />
        <Button
          title="Search"
          onPress={() => {
            searchMovies(query);
            setDialogVisible(false);
          }}
        />
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  listContainer: {
    paddingBottom: 80,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    margin: 16,
  },
});

export default HomeScreen;
