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
      <PyraMythraFABs
        charName={route.params.charName}
        onPressFunc={changeChar}
      />
    </>
  );
}

function PtFABs({ charName, onPressFunc }) {
  const [squirtAble, setSquirtAble] = useState(true);
  const [ivyAble, setIvyAble] = useState(false);
  const [charAble, setCharAble] = useState(false);

  if (charName == "Pokemon Trainer") {
    return (
      <View style={styles.container}>
        <FAB
          icon={require("../../assets/FAB_icons/pokeBall.png")}
          onPress={() => {
            setSquirtAble(true);
            setIvyAble(false);
            setCharAble(false);
            onPressFunc("Squirtle");
          }}
          disabled={squirtAble}
          style={{ backgroundColor: "#00A0fF" }}
        />
        <FAB
          icon={require("../../assets/FAB_icons/pokeBall.png")}
          onPress={() => {
            setSquirtAble(false);
            setIvyAble(true);
            setCharAble(false);
            onPressFunc("Ivysaur");
          }}
          disabled={ivyAble}
          style={{ backgroundColor: "#00AA10" }}
        />
        <FAB
          icon={require("../../assets/FAB_icons/pokeBall.png")}
          onPress={() => {
            setSquirtAble(false);
            setIvyAble(false);
            setCharAble(true);
            onPressFunc("Charizard");
          }}
          disabled={charAble}
          style={{ backgroundColor: "#AA1000" }}
        />
      </View>
    );
  } else return null;
}

function PyraMythraFABs({ charName, onPressFunc }) {
  const [isPyra, setIsPyra] = useState(true);

  if (charName == "Pyra/Mythra") {
    return (
      <View style={styles.container}>
        <FAB
          icon={require("../../assets/FAB_icons/pyra.png")}
          onPress={() => {
            setIsPyra(true);
            onPressFunc("Pyra");
          }}
          disabled={isPyra}
          color="#FF0000"
        />
        <FAB
          icon={require("../../assets/FAB_icons/mythra.png")}
          onPress={() => {
            setIsPyra(false);
            onPressFunc("Mythra");
          }}
          disabled={!isPyra}
          color="#FAFF00"
        />
      </View>
    );
  } else return null;
}

function fetchCharDatas(charName) {
  if (charName === "Pokemon Trainer") {
    charName = "Squirtle";
  } else if (charName === "Pyra/Mythra") {
    charName = "Pyra";
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
    paddingHorizontal: 50,
    marginBottom: 10,
    bottom: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
export default TabNavigationInfo;
