import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import DefColors from "../../../../DefColors";
import BairUntechTable from "./FuncTables/KillConfirmTables/BairUntechTable";
import DairLoopTable from "./FuncTables/KillConfirmTables/DairLoopTable";
import DtiltConfirmTable from "./FuncTables/KillConfirmTables/DtiltConfirmTable";
import UpSmashKillTable from "./FuncTables/KillConfirmTables/UpSmashKillTable";
import UpThrowKillTable from "./FuncTables/KillConfirmTables/UpThrowKillTable";

function KillConfirmScreen({ charDatas }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerView}>
        <UpThrowKillTable charDatas={charDatas} />
        <UpSmashKillTable charDatas={charDatas} />
        <DtiltConfirmTable charDatas={charDatas} />
        <DairLoopTable charDatas={charDatas} />
        <BairUntechTable
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefColors.black,
  },
  containerView: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export default KillConfirmScreen;
