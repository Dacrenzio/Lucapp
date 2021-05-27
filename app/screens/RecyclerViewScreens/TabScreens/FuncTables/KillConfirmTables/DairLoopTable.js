import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function DairLoopTable({ charDatas }) {
  let dairPercData = [
    [charDatas[83], charDatas[84]],
    [charDatas[79], charDatas[80], charDatas[81], charDatas[82]],
    [charDatas[85]],
  ];

  return (
    <Table style={styles.table}>
      <Row
        data={["D-Air Loop"]}
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={styles.primaryRow}
      />
      <Row
        data={["Front", "Back"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={styles.row}
      />
      <Row
        data={dairPercData[0]}
        style={{ backgroundColor: DefColors.primaryRow }}
        textStyle={styles.row}
      />
      <Row
        data={["0", "50", "100", "150"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={styles.row}
      />
      <Row
        data={dairPercData[1]}
        style={{
          backgroundColor: DefColors.primaryRow,
        }}
        textStyle={styles.row}
      />
      <NoteRows notesData={dairPercData[2][0]} />
    </Table>
  );
}

let NoteRows = ({ notesData }) => {
  if (notesData != "") {
    return [
      <Row
        key={0}
        data={["Note"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={[styles.row, { fontWeight: "normal" }]}
        flexArr={[1]}
      />,
      <Row
        key={1}
        data={[notesData]}
        style={{ backgroundColor: DefColors.primaryRow }}
        textStyle={[styles.row, { fontWeight: "normal" }]}
        flexArr={[1]}
      />,
    ];
  } else {
    return null;
  }
};

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

export default DairLoopTable;
