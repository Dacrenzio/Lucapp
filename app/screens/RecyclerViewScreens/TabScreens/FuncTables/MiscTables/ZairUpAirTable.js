import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import DefColors from "../../../../../../DefColors";

function ZairUpAir({ charDatas }) {
  return (
    <Table
      borderStyle={{ borderWidth: 2, borderColor: DefColors.black }}
      style={styles.table}
    >
      <Row
        data={["Zair to Up-Air", charDatas[2]]}
        textStyle={{
          textAlign: "center",
          color: DefColors.black,
          padding: 12,
          fontWeight: "bold",
        }}
        flexArr={[3, 1]}
      />
    </Table>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: 40,
    backgroundColor: DefColors.tableTitle,
    marginHorizontal: 40,
  },
});

export default ZairUpAir;
