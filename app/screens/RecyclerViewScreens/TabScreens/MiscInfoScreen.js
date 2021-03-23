import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DefColors from "../../../../DefColors";
import DashAttackTable from "./FuncTables/MiscTables/DashAttackTable";
import UairOosTable from "./FuncTables/MiscTables/UairOosTable";
import ZairUpAirTable from "./FuncTables/MiscTables/ZairUpAirTable";
import AbsorbableMovesTable from "./FuncTables/MiscTables/AbsorbableMovesTable";

function MiscInfoScreen({ route }) {
  let charDatas = route.params.arrayItem;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerView}>
        <UairOosTable charDatas={charDatas} />
        <DashAttackTable charDatas={charDatas} />
        <ZairUpAirTable charDatas={charDatas} />
        <AbsorbableMovesTable charDatas={charDatas} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefColors.white,
  },
  containerView: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export default MiscInfoScreen;
