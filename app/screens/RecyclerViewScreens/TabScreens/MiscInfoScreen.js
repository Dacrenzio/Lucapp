import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import DefColors from "../../../../DefColors";
import DashAttackTable from "./FuncTables/MiscTables/DashAttackTable";
import UairOosTable from "./FuncTables/MiscTables/UairOosTable";
import ZairUpAirTable from "./FuncTables/MiscTables/ZairUpAirTable";
import AbsorbableMovesTable from "./FuncTables/MiscTables/AbsorbableMovesTable";
import ShieldPressureTable from "./FuncTables/MiscTables/ShieldPressureTable";

function MiscInfoScreen({ charDatas }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerView}
    >
      <UairOosTable charDatas={charDatas} />
      <DashAttackTable charDatas={charDatas} />
      <ZairUpAirTable charDatas={charDatas} />
      <AbsorbableMovesTable charDatas={charDatas} />
      <ShieldPressureTable
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
    justifyContent: "center",
  },
});
export default MiscInfoScreen;
