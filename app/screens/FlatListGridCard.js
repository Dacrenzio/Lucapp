import React from "react";
import { StyleSheet, FlatList, SafeAreaView, Dimensions } from "react-native";

import charNames from "../assets/icons/charNames";
import CardItem from "./RecyclerViewScreens/CardItem";

var dataList = [];
for (const char of charNames) {
  dataList.push(char);
}

const width = Dimensions.get("window").width;
const numcolumns = width > 500 ? 5 : 3;

function FlatListGridCard({ navigation }) {
  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        data={dataList}
        renderItem={({ item }) => (
          <CardItem
            id={item.key}
            numCol={numcolumns}
            src={item.src}
            name={item.name}
            nav={navigation}
          />
        )}
        numColumns={numcolumns}
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
