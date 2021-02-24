import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";

import charNames from "../assets/icons/charNames";
import CardItem from "./RecyclerViewScreens/CardItem";

var dataList = [];
for (const char of charNames) {
  dataList.push(char);
}

function FlatListGridCard({ navigation }) {
  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        data={dataList}
        renderItem={({ item }) => <CardItem src={item.src} name={item.name} />}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FlatListGridCard;
