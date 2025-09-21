import React, { useContext, useState, useRef, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { Text, Button, useTheme } from "@rneui/themed";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import RentedContext from "../context/RentedContext";

const WatchScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { removeRentedMovie } = useContext(RentedContext);
  const { movieId, movie } = route.params;

  const [showOverlay, setShowOverlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Create the player from a local file
  const player = useVideoPlayer(
    require("../../assets/media/sample.mp4"),
    (p) => {
      p.loop = true;
      p.timeUpdateEventInterval = 1;
      // p.play();                 // Uncomment to auto-play
    }
  );

  // Listen to play/pause changes; show overlay when not playing
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });
  useEffect(() => {
    setShowOverlay(!isPlaying);
  }, [isPlaying]);

  // Handle auto-fullscreen when rotating to landscape
  const videoViewRef = useRef(null);
  useEffect(() => {
    const sub = Dimensions.addEventListener("change", ({ window }) => {
      const landscape = window.width > window.height;
      setIsFullscreen(landscape);
      if (videoViewRef.current) {
        if (landscape) {
          videoViewRef.current.enterFullscreen?.();
        } else {
          videoViewRef.current.exitFullscreen?.();
        }
      }
    });
    return () => sub.remove();
  }, []);

  return (
    <View
      style={[
        theme.components.VideoScreen.container,
        isFullscreen && theme.components.VideoScreen.fullscreen,
      ]}
    >
      <VideoView
        ref={videoViewRef}
        style={
          isFullscreen
            ? theme.components.VideoScreen.fullscreenVideo
            : theme.components.VideoScreen.video
        }
        player={player}
        nativeControls
        allowsFullscreen
        allowsPictureInPicture
        contentFit="contain"
      />

      {showOverlay && !isFullscreen && (
        <>
          <Text style={theme.components.VideoScreen.title}>{movie.title}</Text>
          <Button
            title="Mark as Watched"
            onPress={() => {
              removeRentedMovie(movieId);
              navigation.goBack();
            }}
            containerStyle={theme.components.VideoScreen.buttonContainer}
            buttonStyle={{ backgroundColor: "#922C40" }}
          />
          <Button
            title={isPlaying ? "Pause" : "Play"}
            onPress={() => (isPlaying ? player.pause() : player.play())}
            containerStyle={[
              theme.components.VideoScreen.buttonContainer,
              { marginTop: 8 },
            ]}
            type="outline"
          />
        </>
      )}
    </View>
  );
};

export default WatchScreen;
