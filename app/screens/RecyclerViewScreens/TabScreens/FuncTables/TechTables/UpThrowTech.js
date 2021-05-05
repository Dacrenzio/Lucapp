import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function UpThrowTech({ charDatas }) {
  let datas = [];
  let stages = ["Battlefield", "Yoshi's Story", "Town&City"];
  let s = 0;
  for (let index = 47; index < 51; index++) {
    if (charDatas[index] != "--" && index == 50) {
      datas.push(["Max Rage:", charDatas[index]]);
      break;
    }
    datas.push([stages[s++], charDatas[index]]);
  }

  return (
    <Table style={styles.table}>
      <Row
        data={["Up-Throw granted tech chase"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.primaryRow}
      />
      {datas.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}
          style={{
            backgroundColor:
              index == 3
                ? DefColors.noteRow
                : index % 2
                ? DefColors.secondaryRow
                : DefColors.primaryRow,
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

export default UpThrowTech;
