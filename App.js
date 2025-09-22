import "react-native-gesture-handler";
import { ThemeProvider } from "@rneui/themed";
import AppNavigator from "./src/navigation/AppNavigator";
import { SearchProvider } from "./src/context/SearchContext";
import { RentedProvider } from "./src/context/RentedContext";
import theme from "./src/theme/theme";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_Regular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplay_Medium: require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    PlayfairDisplay_Bold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <RentedProvider>
          <AppNavigator />
        </RentedProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}
