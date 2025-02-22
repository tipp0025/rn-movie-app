import React, { useContext, useState, useRef, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { Text, Button, useTheme } from "@rneui/themed";
import { Video, ResizeMode } from "expo-av";
import RentedContext from "../context/RentedContext";

const WatchScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
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
    <View
      style={[
        theme.components.container,
        isFullscreen && theme.components.fullscreen,
      ]}
    >
      <Video
        ref={videoRef}
        source={require("../media/sample.mp4")}
        style={
          isFullscreen
            ? theme.components.fullscreenVideo
            : theme.components.video
        }
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
      {showOverlay && !isFullscreen && (
        <>
          <Text style={theme.components.title}>{movie.title}</Text>
          <Button
            title="Mark as Watched"
            onPress={() => {
              removeRentedMovie(movieId);
              navigation.navigate("Rented");
            }}
            containerStyle={theme.components.buttonContainer}
          />
        </>
      )}
    </View>
  );
};

export default WatchScreen;
