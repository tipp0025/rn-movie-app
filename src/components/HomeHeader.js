import { View } from "react-native";
import { Text, Badge, Button, useTheme } from "@rneui/themed";

export default function HomeHeader({ submittedQuery, count, onOpenSearch }) {
  const { theme } = useTheme();
  const hasQuery = submittedQuery?.trim().length > 0;

  if (hasQuery) {
    return (
      <View
        style={[
          theme.components.Surface.container,
          { alignItems: "center", marginBottom: 12 },
        ]}
      >
        <Text style={theme.components.Text.h4Style}>
          Results for “{submittedQuery}”
        </Text>
        <Badge value={String(count)} containerStyle={{ marginTop: 6 }} />
      </View>
    );
  }

  // Empty state
  return (
    <View
      style={[
        theme.components.Surface.container,
        { alignItems: "center", marginBottom: 12 },
      ]}
    >
      <Text style={theme.components.Text.h4Style}>Find your next movie</Text>
      <Text style={theme.components.Text.subtitle}>
        Tap the search button or use the shortcut below.
      </Text>
      <Button
        title="Search movies"
        icon={{ name: "search", color: "#F3EAC0" }}
        onPress={onOpenSearch}
        containerStyle={{ marginTop: 12, alignSelf: "stretch" }}
        buttonStyle={{
          backgroundColor: "#922C40",
          borderRadius: 10,
          paddingVertical: 12,
        }}
      />
    </View>
  );
}
