import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MiscInfoScreen from "./TabScreens/MiscInfoScreen";
import TechInfoScreen from "./TabScreens/TechInfoScreen";
import KillConfirmScreen from "./TabScreens/KillConfirmScreen";

const Tab = createMaterialTopTabNavigator();

function TabNavigationInfo({ route }) {
  const char = route.params.charName;
  return (
    <Tab.Navigator backBehavior="none">
      <Tab.Screen
        name="Misc Info"
        component={MiscInfoScreen}
        initialParams={{ arrayItem: [char] }}
      />
      <Tab.Screen
        name="Tech chase"
        component={TechInfoScreen}
        initialParams={{ arrayItem: [char] }}
      />
      <Tab.Screen
        name="Kill Confirm"
        component={KillConfirmScreen}
        initialParams={{ arrayItem: [char] }}
      />
    </Tab.Navigator>
  );
}

function fetchCharDatas(charName) {}

export default TabNavigationInfo;
