import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Card, Button, Text, Dialog } from "@rneui/themed";
import RentedContext from "../context/RentedContext";

const MovieCard = ({ movie, onRentConfirm }) => {
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

  return (
    <Card containerStyle={styles.card}>
      {}
      {posterUrl && (
        <Card.Image
          source={{ uri: posterUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      {}
      <Card.Title>{movie.title}</Card.Title>
      <Text style={styles.text}>Release Date: {movie.release_date}</Text>
      {}
      <Button
        title="Rent"
        onPress={() => setDialogVisible(true)}
        containerStyle={styles.buttonContainer}
      />

      {}
      <Dialog
        isVisible={dialogVisible}
        onBackdropPress={() => setDialogVisible(false)}
      >
        <Dialog.Title>Confirm Rental</Dialog.Title>
        <Text style={styles.dialogText}>
          Do you want to rent "{movie.title}" for {rentalPrice}?
        </Text>
        <Dialog.Actions>
          <Button
            title="Cancel"
            onPress={() => setDialogVisible(false)}
            type="clear"
          />
          <Button title="Confirm" onPress={handleConfirmRent} />
        </Dialog.Actions>
      </Dialog>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  image: {
    height: 200,
  },
  text: {
    marginVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: 10,
  },
  dialogText: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default MovieCard;
