import React, { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "@rneui/themed";
import RentedContext from "../context/RentedContext";

const WatchScreen = ({ route, navigation }) => {
  const { removeRentedMovie } = useContext(RentedContext);
  const { movieId, movie } = route.params; // Get both movieId and movie object

  return (
    <View>
      <Text h4 style={{ textAlign: "center", padding: 20 }}>
        {movie.title}
      </Text>
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
