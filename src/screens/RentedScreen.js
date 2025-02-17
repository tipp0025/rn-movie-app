import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import RentedContext from "../context/RentedContext";
import MovieCard from "../components/MovieCard";

const RentedScreen = ({ navigation }) => {
  const { rentedMovies } = useContext(RentedContext);

  return (
    <View>
      <FlatList
        data={rentedMovies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RentedScreen;
