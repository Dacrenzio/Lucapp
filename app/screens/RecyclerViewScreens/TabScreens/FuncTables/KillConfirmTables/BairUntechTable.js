import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function BairUntechTable({ charDatas, marginBott }) {
  let datas = [charDatas[86], charDatas[87], charDatas[88], charDatas[89]];

  return (
    <Table style={[styles.table, marginBott]}>
      <Row
        data={["B-Air loop"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.primaryRow}
      />
      <Row
        data={["0", "50", "100", "150"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={styles.row}
      />
      <Row
        data={datas}
        style={{
          backgroundColor: DefColors.primaryRow,
        }}
        textStyle={styles.row}
      />
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

export default BairUntechTable;
