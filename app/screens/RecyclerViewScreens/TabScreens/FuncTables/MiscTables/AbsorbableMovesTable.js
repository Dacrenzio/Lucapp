import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function AbsorbableMovesTable({ charDatas }) {
  if (charDatas[5].length === 0) {
    return null;
  } else {
    let datas = [];
    for (let index = 5; index < 27; index++) {
      if (charDatas[index] === "") {
        break;
      }
      datas.push([charDatas[index++], charDatas[index]]);
    }

    return <AbsorbableMovesTableRender datas={datas} />;
  }
}

const AbsorbableMovesTableRender = ({ datas }) => {
  return (
    <Table style={styles.table}>
      <Row
        data={["Heal Percentages"]}
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
          textStyle={[
            styles.row,
            {
              fontWeight: "normal",
              padding: 6,
            },
          ]}
          flexArr={[1.5, 1]}
        />
      ))}
    </Table>
  );
};

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

export default AbsorbableMovesTable;
