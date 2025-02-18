import React, { useContext, useState, useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "@rneui/themed";
import { Video, ResizeMode } from "expo-av";
import RentedContext from "../context/RentedContext";

const WatchScreen = ({ route, navigation }) => {
  const { removeRentedMovie } = useContext(RentedContext);
  const { movieId, movie } = route.params;
  const [showOverlay, setShowOverlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      const isLandscape = window.width > window.height;
      setIsFullscreen(isLandscape);
      if (videoRef.current) {
        videoRef.current.presentFullscreenPlayer();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setShowOverlay(!status.isPlaying);
    }
  };

  return (
    <View style={[styles.container, isFullscreen && styles.fullscreen]}>
      <Video
        ref={videoRef}
        source={require("../media/sample.mp4")}
        style={isFullscreen ? styles.fullscreenVideo : styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
      {showOverlay && !isFullscreen && (
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
  fullscreen: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  video: {
    width: "100%",
    height: 300,
    marginVertical: 20,
  },
  fullscreenVideo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    padding: 20,
    color: "#ffffff",
  },
  buttonContainer: {
    margin: 20,
  },
});

export default WatchScreen;
