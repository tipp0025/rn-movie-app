import { Text } from "@rneui/themed";

// HomeScreen Components

// Function to display a dynamic heading

export const renderHeader = (movies, theme, query) => {
  const hasQuery = query?.trim().length > 0;

  if (movies.length === 0) {
    return (
      <Text style={theme.components.Text.h4Style}>Tap the Icon to Search</Text>
    );
  }
  if (hasQuery) {
    return (
      <Text style={theme.components.Text.h4Style}>
        Results for “{query}” ({movies.length})
      </Text>
    );
  }
};

// WatchScreen Components

// Function to hide Title/button on video play

export const handlePlaybackStatusUpdate = (status, setShowOverlay) => {
  if (status.isLoaded) {
    setShowOverlay(!status.isPlaying);
  }
};
