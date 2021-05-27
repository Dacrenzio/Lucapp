import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function DtiltConfirmTable({ charDatas }) {
  let dtiltFair = [
    charDatas[116],
    charDatas[117],
    charDatas[118],
    charDatas[119],
  ];
  let dtiltFsmash;
  if (charDatas[120] != "") {
    dtiltFsmash = [
      charDatas[120],
      charDatas[117],
      charDatas[118],
      charDatas[119],
    ];
  } else {
    dtiltFsmash = ["Has an escape option"];
  }

  return (
    <Table style={styles.table}>
      <Row
        data={["D-Tilt confirm %"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.primaryRow}
      />
      <Row
        data={["0", "50", "100", "150"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={styles.row}
      />
      <Row
        data={["D-Tilt -> F-Air"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.row}
      />
      <Row
        data={dtiltFair}
        style={{
          backgroundColor: DefColors.primaryRow,
        }}
        textStyle={styles.row}
      />
      <Row
        data={["D-Tilt -> F-Smash"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.row}
      />
      <Row
        data={dtiltFsmash}
        style={{
          backgroundColor:
            dtiltFsmash[0] != "Has an escape option"
              ? DefColors.primaryRow
              : DefColors.noColor,
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

export default DtiltConfirmTable;
