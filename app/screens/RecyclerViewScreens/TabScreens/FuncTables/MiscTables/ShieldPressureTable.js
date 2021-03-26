import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function ShieldPressureTable({ charDatas }) {
  let datas = [];
  let notes = [];

  for (let index = 111; index < 116; index++) {
    if (charDatas[index] === "") {
      continue;
    }
    switch (index) {
      case 111:
        datas.push(["Good Trade", charDatas[index]]);
        break;
      case 112:
        datas.push(["Bad trade", charDatas[index]]);
        break;
      case 113:
        datas.push(["Loses", charDatas[index]]);
        break;
      case 114:
        datas.push(["Can N-Airdodge", charDatas[index]]);
        break;
      case 115:
        notes.push("Notes");
        notes.push(charDatas[index]);
    }
  }

  return (
    <Table
      borderStyle={{ borderWidth: 2, borderColor: DefColors.black }}
      style={styles.table}
    >
      <Row
        data={
          charDatas[110] === ""
            ? ["Psi-Magnet U-Air shield pressure"]
            : ["Psi-Magnet U-Air shield pressure", charDatas[110]]
        }
        style={{ backgroundColor: DefColors.tableTitle }}
        textStyle={[styles.row, { padding: 12 }]}
        flexArr={[3, 1]}
      />
      {datas.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}
          style={{
            backgroundColor:
              rowData[0] === "Good Trade" || rowData[0] === "Can N-Airdodge"
                ? DefColors.yesColor
                : DefColors.noColor,
          }}
          textStyle={[styles.row, { fontWeight: "normal" }]}
          flexArr={[1, 1]}
        />
      ))}
      <NoteRows notesData={notes} />
    </Table>
  );
}

let NoteRows = ({ notesData }) => {
  if (notesData.length != 0) {
    return [
      <Row
        borderStyle={{ borderWidth: 2, borderColor: DefColors.black }}
        key={0}
        data={["Note"]}
        style={{ backgroundColor: DefColors.noteRow }}
        textStyle={[styles.row, { fontWeight: "normal" }]}
        flexArr={[1]}
      />,
      <Row
        borderStyle={{ borderWidth: 2, borderColor: DefColors.black }}
        key={1}
        data={[notesData[1]]}
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
  row: {
    textAlign: "center",
    color: DefColors.black,
    padding: 8,
    fontWeight: "bold",
  },
});

export default ShieldPressureTable;
