import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import RentedContext from "../context/RentedContext";

const WatchScreen = ({ route, navigation }) => {
  const { removeRentedMovie } = useContext(RentedContext);
  const { movieId } = route.params;

  return (
    <View>
      <Text>Movie ID: {movieId}</Text>
      <Button
        title="Mark as Watched"
        onPress={() => {
          removeRentedMovie(movieId);
          navigation.navigate("Rented");
        }}
      />
    </View>
  );
};

export default WatchScreen;
