import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function UpSmashKillTable({ charDatas }) {
  let datas = [charDatas[75], charDatas[76], charDatas[77], charDatas[78]];

  return (
    <Table style={styles.table}>
      <Row
        data={["Up-Smash Kill %"]}
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
      <Row
        data={[
          "% for: FD, PS2, Lylat. Yoshis.\n~ +8% for: BF, T&C, Smashville, Unova, Kalos",
        ]}
        style={{ backgroundColor: DefColors.noteRow }}
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

export default UpSmashKillTable;
