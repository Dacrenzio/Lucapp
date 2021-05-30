import React, { useState } from "react";
import { Linking, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FlatListGridCard from "./app/screens/FlatListGridCard";
import TabNavigationInfo from "./app/screens/RecyclerViewScreens/TabNavigationInfo";
import { FAB } from "react-native-paper";
import DefColors from "./DefColors";

const Stack = createStackNavigator();

export default function App() {
  const [charName, setCharName] = useState("ciao");

  return (
    <NavigationContainer
      style={styles.container}
      linking={{ enabled: true }}
      theme={MyTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerRight: () => <FABpersonal />,
        }}
      >
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

function FABpersonal() {
  return (
    <View style={styles.viewContainer}>
      <FAB
        onPress={() => {
          Linking.openURL("https://twitter.com/Dacrenzio1");
        }}
        title="help"
        icon="twitter"
        style={styles.fabs}
        color="#00A0FF"
      />
      <FAB
        onPress={() => {
          Linking.openURL("https://discord.gg/dWnPTmnbXM");
        }}
        title="Discord"
        icon="discord"
        style={styles.fabs}
        color="#5865f2"
      />
      <FAB
        onPress={() => {
          Linking.openURL("https://t.co/pNPacF4dWb");
        }}
        title="Resource File"
        icon="attachment"
        style={styles.fabs}
        color="#000"
      />
      <FAB
        onPress={() => {
          Linking.openURL("https://paypal.me/dacrenzio");
        }}
        title="Donation"
        icon={{ uri: "https://cdnlogo.com/logos/p/42/paypal-icon.svg" }}
        style={styles.fabs}
        color="#00A0FF"
      />
    </View>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: "#5efcff",
    background: "#222222",
    card: "#8f208f",
    text: "#fff",
    border: "rgb(0, 0, 0)",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  fabs: {
    justifyContent: "center",
    borderRadius: 15,
    margin: 6,
    backgroundColor: DefColors.primaryRow,
  },
  viewContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
});
