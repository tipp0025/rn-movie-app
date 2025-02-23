import React, { useContext, useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { FAB, Input, Button, Dialog, Text, useTheme } from "@rneui/themed";
import SearchContext from "../context/SearchContext";
import MovieCard from "../components/MovieCard";
import { renderHeader } from "../components/screenComponents";

const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { movies, searchMovies, setMovies } = useContext(SearchContext);
  const [query, setQuery] = useState("");
  const [isDialogVisible, setDialogVisible] = useState(false);

  const handleRentConfirm = (rentedMovie) => {
    setMovies(movies.filter((movie) => movie.id !== rentedMovie.id));
  };

  // UseEffect hook for Rented navigation

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ marginRight: 24 }}
            onPress={() => navigation.navigate("Rented")}
          >
            Rented
          </Text>
        </View>
      ),
    });
  }, [navigation]);

  // HomeScreen content

  return (
    <View style={theme.components.Screen.container}>
      {renderHeader(movies, theme)}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} onRentConfirm={handleRentConfirm} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={theme.components.Screen.listContainer}
      />

      <FAB
        icon={{ name: "search", color: "#F3EAC0" }}
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

export default HomeScreen;
