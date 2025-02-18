import React, { useContext, useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { FAB, Input, Button, Dialog, Icon } from "@rneui/themed";
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
        <Icon
          name="shopping-cart"
          type="material"
          onPress={() => navigation.navigate("Rented")}
          containerStyle={{ marginRight: 15 }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} onRentConfirm={handleRentConfirm} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <FAB title="Search" onPress={() => setDialogVisible(true)} />

      <Dialog
        isVisible={isDialogVisible}
        onBackdropPress={() => setDialogVisible(false)}
      >
        {}
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

export default HomeScreen;
