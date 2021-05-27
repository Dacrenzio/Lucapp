import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import DefColors from "../../../../DefColors";
import TumbleTable from "./FuncTables/TechTables/TumbleTable";
import UpThrowTech from "./FuncTables/TechTables/UpThrowTech";
import UpTiltTechTable from "./FuncTables/TechTables/UpTiltTechTable";

function TechInfoScreen({ charDatas }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerView}>
        <TumbleTable charDatas={charDatas} />
        <UpThrowTech charDatas={charDatas} />
        <UpTiltTechTable
          charDatas={charDatas}
          marginBott={{ marginBottom: 50 }}
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
export default TechInfoScreen;
