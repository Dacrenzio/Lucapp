import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";

import MiscInfoScreen from "./TabScreens/MiscInfoScreen";
import TechInfoScreen from "./TabScreens/TechInfoScreen";
import KillConfirmScreen from "./TabScreens/KillConfirmScreen";

import CharDatas from "../../assets/rawData/CharDatas.js";

const Tab = createMaterialTopTabNavigator();

function TabNavigationInfo({ navigation, route }) {
  const [charData, setCharDatas] = useState(
    fetchCharDatas(route.params.charName)
  );

  const changeChar = (charName) => {
    setCharDatas(fetchCharDatas(charName));
    navigation.setOptions({ title: charName });
  };

  return (
    <>
      <Tab.Navigator backBehavior="none">
        <Tab.Screen
          name="Misc Info"
          children={() => <MiscInfoScreen charDatas={charData} />}
        />
        <Tab.Screen
          name="Tech chase"
          children={() => <TechInfoScreen charDatas={charData} />}
        />
        <Tab.Screen
          name="Kill Confirm"
          children={() => <KillConfirmScreen charDatas={charData} />}
        />
      </Tab.Navigator>
      <PtFABs charName={route.params.charName} onPressFunc={changeChar} />
    </>
  );
}

function PtFABs({ charName, onPressFunc }) {
  const [squirtAble, setSquirtAble] = useState(false);
  const [ivyAble, setIvyAble] = useState(true);
  const [charAble, setCharAble] = useState(true);

  if (charName == "Pokemon Trainer") {
    return (
      <View style={styles.container}>
        <FAB
          icon={require("../../assets/FAB_icons/pokeBall.png")}
          onPress={() => {
            setSquirtAble(false);
            setIvyAble(true);
            setCharAble(true);
            onPressFunc("Squirtle");
          }}
          disabled={squirtAble}
          color="#0010AA"
        />
        <FAB
          icon={require("../../assets/FAB_icons/pokeBall.png")}
          onPress={() => {
            setSquirtAble(true);
            setIvyAble(false);
            setCharAble(true);
            onPressFunc("Ivysaur");
          }}
          disabled={ivyAble}
          color="#00AA10"
        />
        <FAB
          icon={require("../../assets/FAB_icons/pokeBall.png")}
          onPress={() => {
            setSquirtAble(true);
            setIvyAble(true);
            setCharAble(false);
            onPressFunc("Charizard");
          }}
          disabled={charAble}
          color="#AA1000"
        />
      </View>
    );
  } else return null;
}

function fetchCharDatas(charName) {
  if (charName === "Pokemon Trainer") {
    return CharDatas[75].split(";");
  } else if (charName === "Pyra/Mythra") {
    return CharDatas[61].split(";");
  }
  let l = 0;
  let r = CharDatas.length - 1;

  while (l <= r) {
    var m = Math.trunc((l + r) / 2);
    var c = CharDatas[m].split(";")[0].toLowerCase();

    if (charName.toLowerCase() === c) {
      return CharDatas[m].split(";");
    } else if (charName.toLowerCase() > c) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return "not found";
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    left: 0,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
export default TabNavigationInfo;
