import React, { useContext, useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "@rneui/themed";
import { Video, ResizeMode } from "expo-av";
import RentedContext from "../context/RentedContext";

const WatchScreen = ({ route, navigation }) => {
  const { removeRentedMovie } = useContext(RentedContext);
  const { movieId, movie } = route.params;

  const [showOverlay, setShowOverlay] = useState(false);

  const videoRef = useRef(null);

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setShowOverlay(!status.isPlaying);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require("../media/sample.mp4")}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
      {showOverlay && (
        <>
          <Text style={styles.title}>{movie.title}</Text>
          <Button
            title="Mark as Watched"
            onPress={() => {
              removeRentedMovie(movieId);
              navigation.navigate("Rented");
            }}
            containerStyle={styles.buttonContainer}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  title: {
    textAlign: "center",
    padding: 20,
    color: "#ffffff",
  },
  video: {
    width: "100%",
    height: 300,
    marginVertical: 20,
  },
  buttonContainer: {
    margin: 20,
  },
});

export default WatchScreen;
