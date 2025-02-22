import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Card, Button, Text, Dialog, useTheme } from "@rneui/themed";
import RentedContext from "../context/RentedContext";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movie, onRentConfirm, isRented = false }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { rentMovie, rentedMovies } = useContext(RentedContext);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [error, setError] = useState("");

  const rentalPrice = "$9.99";
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  // Function to handle Confirm button press

  const handleConfirmRent = () => {
    const isAlreadyRented = rentedMovies.some(
      (rentedMovie) => rentedMovie.id === movie.id
    );

    if (isAlreadyRented) {
      setError("You've already rented this movie");
      return;
    }

    rentMovie(movie);
    setDialogVisible(false);
    setError("");
    if (onRentConfirm) {
      onRentConfirm(movie);
    }
  };

  // Function to handle Watch button press

  const handleWatch = () => {
    navigation.navigate("Watch", {
      movieId: movie.id,
      movie: movie,
    });
  };

  //Dynamic Card component for Home/Rented Screens

  return (
    <Card>
      <Text h4>{movie.title}</Text>
      {posterUrl && (
        <View style={theme.components.Card.imageWrapperStyle}>
          <Card.Image
            source={{ uri: posterUrl }}
            style={theme.components.Card.imageStyle}
            resizeMode="stretch"
          />
        </View>
      )}
      <Text style={theme.components.Text.style}>
        Release Date: {movie.release_date}
      </Text>

      {isRented ? (
        <Button
          title="Watch"
          onPress={handleWatch}
          raised
          containerStyle={{ marginTop: 15 }}
        />
      ) : (
        <Button
          title="Rent"
          onPress={() => setDialogVisible(true)}
          raised
          containerStyle={{ marginTop: 15 }}
        />
      )}

      {!isRented && (
        <Dialog
          isVisible={dialogVisible}
          onBackdropPress={() => {
            setDialogVisible(false);
            setError("");
          }}
        >
          <Dialog.Title>Confirm Rental</Dialog.Title>
          {error ? (
            <Text
              style={{ color: "white", textAlign: "center", marginBottom: 10 }}
            >
              {error}
            </Text>
          ) : (
            <Text>
              Rent "{movie.title}" for {rentalPrice}?
            </Text>
          )}
          <Dialog.Actions>
            <Button
              title="Cancel"
              onPress={() => {
                setDialogVisible(false);
                setError("");
              }}
            />
            {!error && <Button title="Confirm" onPress={handleConfirmRent} />}
          </Dialog.Actions>
        </Dialog>
      )}
    </Card>
  );
};

export default MovieCard;
