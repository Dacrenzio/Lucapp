import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
  View,
  Image,
} from "react-native";

import DefColors from "../../DefColors";
import charNames from "../assets/icons/charNames";
import CardItem from "./RecyclerViewScreens/CardItem";

function FlatListGridCard({ navigation }) {
  const [dataList, setDataList] = useState(charNames);
  const [numColumns, setNumColumns] = useState(
    Math.floor(Dimensions.get("window").width / 130)
  );

  var key;

  const searchFilter = (text) => {
    if (text) {
      let newData = charNames.filter((item) => {
        return item.name.toLowerCase().includes(text.toLowerCase());
      });
      setDataList(newData);
    } else {
      setDataList(charNames);
    }
  };

  Dimensions.addEventListener("change", () => {
    key = Math.floor(Dimensions.get("window").width / 130);
  });

  return (
    <View style={styles.list}>
      <View style={styles.input}>
        <Image
          source={require("../assets/search-icon.png")}
          style={{ height: 20, width: 20, margin: 10 }}
        />
        <TextInput
          placeholder="Search a char here"
          autoCorrect={false}
          selectTextOnFocus={true}
          placeholderTextColor="#888888"
          textAlign="left"
          maxLength={18}
          style={{ width: "80%", color: DefColors.white, fontSize: 18 }}
          onChangeText={(text) => searchFilter(text)}
        />
      </View>

      <FlatList
        data={dataList}
        renderItem={({ item }) => (
          <CardItem
            id={dataList.indexOf(item)}
            itemNum={dataList.length}
            numCol={numColumns}
            src={item.src}
            name={item.name}
            nav={navigation}
          />
        )}
        numColumns={numColumns}
        style={{ alignSelf: "center", flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignContent: "center",
  },
  input: {
    alignSelf: "center",
    height: 45,
    width: "85%",
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: DefColors.tableTitle,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default FlatListGridCard;
