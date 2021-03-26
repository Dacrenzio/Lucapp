import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function DashAttackTable({ charDatas }) {
  if (charDatas[3] === "No") {
    return (
      <Table style={styles.table}>
        <Row
          data={["Dash-Attack at ledge", "No"]}
          style={{ backgroundColor: DefColors.tableTitle }}
          textStyle={styles.row}
          flexArr={[2, 1]}
        />
      </Table>
    );
  } else {
    return (
      <Table style={styles.table}>
        <Row
          data={["Dash-Attack at ledge", charDatas[3]]}
          style={{ backgroundColor: DefColors.tableTitle }}
          textStyle={styles.row}
          flexArr={[2, 1]}
        />
        <Row
          data={["Kill percentage:", charDatas[4]]}
          style={{ backgroundColor: DefColors.primaryRow }}
          textStyle={[styles.row, { fontWeight: "normal", padding: 8 }]}
          flexArr={[2, 1]}
        />
      </Table>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    width: 310,
    marginTop: 40,
  },
  row: {
    textAlign: "center",
    color: DefColors.black,
    padding: 12,
    fontWeight: "bold",
  },
});

export default DashAttackTable;
