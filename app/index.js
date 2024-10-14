import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./Screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Navigation/HomeNavigator";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer independent={true}>
        <HomeNavigator />
      </NavigationContainer>
      {/* <Home /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 20,
  },
});
