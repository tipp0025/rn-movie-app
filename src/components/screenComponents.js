import { Text } from "@rneui/themed";

// HomeScreen Components

// Function to display a dynamic heading

// No longer used, replaced renderHeader with HomeHeader.js

// WatchScreen Components

// Function to hide Title/button on video play

export const handlePlaybackStatusUpdate = (status, setShowOverlay) => {
  if (status.isLoaded) {
    setShowOverlay(!status.isPlaying);
  }
};
