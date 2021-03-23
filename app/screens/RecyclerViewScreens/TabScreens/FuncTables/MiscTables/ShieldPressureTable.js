import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function ShieldPressureTable({ charDatas }) {
  let datas = [];
  for (let index = 111; index < 116; index++) {
    switch (index) {
      case 111:
    }
  }

  return (
    <Table
      borderStyle={{ borderWidth: 2, borderColor: DefColors.black }}
      style={styles.table}
    >
      <Row
        data={["Psi-Magnet Up-Air shield pressure", charDatas[110]]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.row}
        flexArr={[3, 1]}
      />
      {datas.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}
          style={{
            backgroundColor:
              index % 2 ? DefColors.secondaryRow : DefColors.primaryRow,
          }}
          textStyle={[styles.row, { fontWeight: "normal" }]}
          flexArr={[2, 1]}
        />
      ))}
    </Table>
  );
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

export default ShieldPressureTable;
