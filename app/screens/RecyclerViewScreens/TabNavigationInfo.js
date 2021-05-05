import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MiscInfoScreen from "./TabScreens/MiscInfoScreen";
import TechInfoScreen from "./TabScreens/TechInfoScreen";
import KillConfirmScreen from "./TabScreens/KillConfirmScreen";

import CharDatas from "../../assets/rawData/CharDatas.js";

const Tab = createMaterialTopTabNavigator();

function TabNavigationInfo({ route }) {
  const char = fetchCharDatas(route.params.charName);
  return (
    <Tab.Navigator backBehavior="none">
      <Tab.Screen
        name="Misc Info"
        component={MiscInfoScreen}
        initialParams={{ arrayItem: char }}
      />
      <Tab.Screen
        name="Tech chase"
        component={TechInfoScreen}
        initialParams={{ arrayItem: char }}
      />
      <Tab.Screen
        name="Kill Confirm"
        component={KillConfirmScreen}
        initialParams={{ arrayItem: char }}
      />
    </Tab.Navigator>
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

export default TabNavigationInfo;
