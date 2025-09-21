import { Text } from "@rneui/themed";

// HomeScreen Components

// Function to display a dynamic heading

export const renderHeader = (movies, theme, query) => {
  if (movies.length === 0) {
    return (
      <Text style={theme.components.Text.h4Style}>Tap the Icon to Search</Text>
    );
  }
  return (
    <Text style={theme.components.Text.h4Style}>
      Displaying {movies.length} {movies.length === 1 ? "Result" : "Results"}
    </Text>
  );
};

// WatchScreen Components

// Function to hide Title/button on video play

export const handlePlaybackStatusUpdate = (status, setShowOverlay) => {
  if (status.isLoaded) {
    setShowOverlay(!status.isPlaying);
  }
};
