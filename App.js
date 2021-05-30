import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FlatListGridCard from "./app/screens/FlatListGridCard";
import TabNavigationInfo from "./app/screens/RecyclerViewScreens/TabNavigationInfo";

const Stack = createStackNavigator();

export default function App() {
  const [charName, setCharName] = useState("ciao");
  return (
    <NavigationContainer
      style={styles.container}
      linking={{ enabled: true }}
      theme={MyTheme}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <FlatListGridCard
              navigation={props.navigation}
              setChar={setCharName}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Datas" options={() => ({ title: charName })}>
          {(props) => <TabNavigationInfo char={charName} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: "#5efcff",
    background: "#222222",
    card: "#5000FF",
    text: "rgb(255, 255, 255)",
    border: "rgb(0, 0, 0)",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
