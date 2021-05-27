import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function UpTiltTechTable({ charDatas, marginBott }) {
  let datas = [];
  let stages = [
    "Battlefield Side Plat",
    "Yoshi's Story Side Plat",
    "PS2 Plat",
    "Smashville Plat",
    "Town&City Side Plat",
  ];
  let m = 0;
  for (let index = 90; index < 110; ) {
    datas.push([stages[m++]]);
    datas.push([
      charDatas[index++],
      charDatas[index++],
      charDatas[index++],
      charDatas[index++],
    ]);
  }
  return (
    <Table style={[styles.table, marginBott]}>
      <Row
        data={["Up-Tilt Forced Tech"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.primaryRow}
      />
      <Row
        data={["0", "50", "100", "150"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={styles.row}
      />
      {datas.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}
          style={{
            backgroundColor:
              index % 2 == 1 ? DefColors.primaryRow : DefColors.noteRow,
          }}
          textStyle={styles.row}
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

export default UpTiltTechTable;
