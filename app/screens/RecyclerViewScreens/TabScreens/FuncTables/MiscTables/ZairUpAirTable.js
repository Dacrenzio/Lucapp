import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function ZairUpAir({ charDatas }) {
  return (
    <Table
      borderStyle={{ borderWidth: 2, borderColor: DefColors.black }}
      style={styles.table}
    >
      <Row
        data={["Zair to Up-Air", charDatas[2]]}
        textStyle={styles.text}
        flexArr={[2, 1]}
      />
    </Table>
  );
}

const styles = StyleSheet.create({
  table: {
    width: 310,
    marginTop: 40,
    backgroundColor: DefColors.tableTitle,
  },
  text: {
    textAlign: "center",
    color: DefColors.black,
    padding: 12,
    fontWeight: "bold",
  },
});

export default ZairUpAir;
