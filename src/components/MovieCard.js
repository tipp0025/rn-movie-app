import React, { useState, useContext } from "react";
import { Card, Button, Text, Dialog } from "@rneui/themed";
import RentedContext from "../context/RentedContext";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movie, onRentConfirm, isRented = false }) => {
  const navigation = useNavigation();
  const { rentMovie } = useContext(RentedContext);
  const [dialogVisible, setDialogVisible] = useState(false);

  const rentalPrice = "$9.99";
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const handleConfirmRent = () => {
    rentMovie(movie);
    setDialogVisible(false);
    if (onRentConfirm) {
      onRentConfirm(movie);
    }
  };

  const handleWatch = () => {
    navigation.navigate("Watch", {
      movieId: movie.id,
      movie: movie,
    });
  };

  return (
    <Card>
      {posterUrl && (
        <Card.Image source={{ uri: posterUrl }} resizeMode="cover" />
      )}
      <Card.Title>{movie.title}</Card.Title>
      <Text>Release Date: {movie.release_date}</Text>

      {isRented ? (
        <Button title="Watch" onPress={handleWatch} />
      ) : (
        <Button title="Rent" onPress={() => setDialogVisible(true)} />
      )}

      {!isRented && (
        <Dialog
          isVisible={dialogVisible}
          onBackdropPress={() => setDialogVisible(false)}
        >
          <Dialog.Title>Confirm Rental</Dialog.Title>
          <Text>
            Do you want to rent "{movie.title}" for {rentalPrice}?
          </Text>
          <Dialog.Actions>
            <Button title="Cancel" onPress={() => setDialogVisible(false)} />
            <Button title="Confirm" onPress={handleConfirmRent} />
          </Dialog.Actions>
        </Dialog>
      )}
    </Card>
  );
};

export default MovieCard;
