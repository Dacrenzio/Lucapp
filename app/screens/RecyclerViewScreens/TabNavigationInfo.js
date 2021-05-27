import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Button } from "react-native";

import MiscInfoScreen from "./TabScreens/MiscInfoScreen";
import TechInfoScreen from "./TabScreens/TechInfoScreen";
import KillConfirmScreen from "./TabScreens/KillConfirmScreen";

import CharDatas from "../../assets/rawData/CharDatas.js";

const Tab = createMaterialTopTabNavigator();

function TabNavigationInfo({ navigation, route }) {
  const [charData, setCharDatas] = useState(
    fetchCharDatas(route.params.charName)
  );

  var changeChar = () => {
    setCharDatas(fetchCharDatas("Lucas"));
    navigation.setOptions({ title: "Lucas" });
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
      <Button
        onPress={changeChar}
        title={"cambia"}
        style={{
          position: "absolute",
          zIndex: 99,
          bottom: 5,
          alignSelf: "center",
          shadowColor: "black",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 3, //Because shadow only work on iOS, elevation is same thing but for android.
        }}
      />
    </>
  );
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
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TabNavigationInfo;
