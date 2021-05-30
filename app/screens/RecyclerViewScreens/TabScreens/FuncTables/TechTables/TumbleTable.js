import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function TumbleTable({ charDatas }) {
  let datas = [];
  let moves = [
    "Sweet Z-air",
    "Sour Z-Air",
    "Sour F-Air",
    "Sour f-Tilt",
    "Sour B-Air",
  ];
  let m = 0;
  for (let index = 27; index < 47; ) {
    datas.push([
      moves[m++],
      charDatas[index++],
      charDatas[index++],
      charDatas[index++],
      charDatas[index++],
    ]);
  }
  return (
    <Table style={styles.table}>
      <Row
        data={["Tumble Percents"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.primaryRow}
      />
      <Row
        data={["Rage", "0", "50", "100", "150"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={styles.row}
        flexArr={[5, 2, 2, 2, 2]}
      />
      {datas.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}
          style={{
            backgroundColor:
              index % 2 ? DefColors.secondaryRow : DefColors.primaryRow,
          }}
          textStyle={styles.row}
          flexArr={[5, 2, 2, 2, 2]}
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
  primaryRow: {
    textAlign: "center",
    color: DefColors.black,
    padding: 12,
    fontWeight: "bold",
  },
  row: {
    textAlign: "center",
    color: DefColors.black,
    padding: 6,
  },
});

export default TumbleTable;
