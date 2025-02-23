import React, { useContext, useState, useRef, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { Text, Button, useTheme } from "@rneui/themed";
import { Video, ResizeMode } from "expo-av";
import RentedContext from "../context/RentedContext";
import { handlePlaybackStatusUpdate } from "../components/screenComponents";

const WatchScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { removeRentedMovie } = useContext(RentedContext);
  const { movieId, movie } = route.params;
  const [showOverlay, setShowOverlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  // useEffect hook to handle fullscreen mode on device rotation

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

  // WatchScreen content

  return (
    <View
      style={[
        theme.components.VideoScreen.container,
        isFullscreen && theme.components.VideoScreen.fullscreen,
      ]}
    >
      <Video
        ref={videoRef}
        source={require("../media/sample.mp4")}
        style={
          isFullscreen
            ? theme.components.VideoScreen.fullscreenVideo
            : theme.components.VideoScreen.video
        }
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) =>
          handlePlaybackStatusUpdate(status, setShowOverlay)
        }
      />
      {showOverlay && !isFullscreen && (
        <>
          <Text style={theme.components.VideoScreen.title}>{movie.title}</Text>
          <Button
            title="Mark as Watched"
            onPress={() => {
              removeRentedMovie(movieId);
              navigation.navigate("Rented");
            }}
            containerStyle={theme.components.VideoScreen.buttonContainer}
            buttonStyle={{ backgroundColor: "#922C40" }}
          />
        </>
      )}
    </View>
  );
};

export default WatchScreen;
