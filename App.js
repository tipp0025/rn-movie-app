import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "@rneui/themed";
import AppNavigator from "./src/navigation/AppNavigator";
import { SearchProvider } from "./src/context/SearchContext";
import { RentedProvider } from "./src/context/RentedContext";
import theme from "./src/theme/theme";

export default function App() {
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
