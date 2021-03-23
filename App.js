import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FlatListGridCard from "./app/screens/FlatListGridCard";
import TabNavigationInfo from "./app/screens/RecyclerViewScreens/TabNavigationInfo";
import DefColors from "./DefColors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} linking={{ enabled: false }}>
      <Stack.Navigator screenOptions={header}>
        <Stack.Screen name="Home" component={FlatListGridCard} />
        <Stack.Screen
          name="Datas"
          component={TabNavigationInfo}
          options={({ route }) => ({ title: route.params.charName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefColors.white,
  },
});

const header = {
  headerStyle: {
    backgroundColor: DefColors.white,
  },
};
