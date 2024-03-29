import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import DefColors from "../../../../DefColors";
import TumbleTable from "./FuncTables/TechTables/TumbleTable";
import UpThrowTech from "./FuncTables/TechTables/UpThrowTech";
import UpTiltTechTable from "./FuncTables/TechTables/UpTiltTechTable";

function TechInfoScreen({ charDatas }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerView}
    >
      <TumbleTable charDatas={charDatas} />
      <UpThrowTech charDatas={charDatas} />
      <UpTiltTechTable
        charDatas={charDatas}
        marginBott={{
          marginBottom:
            charDatas[0] == "Squirtle" ||
            charDatas[0] == "Ivysaur" ||
            charDatas[0] == "Charizard" ||
            charDatas[0] == "Pyra" ||
            charDatas[0] == "Mythra"
              ? 100
              : 50,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefColors.black,
  },
  containerView: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export default TechInfoScreen;
