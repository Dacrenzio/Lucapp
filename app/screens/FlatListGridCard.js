import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  TextInput,
  View,
  Image,
} from "react-native";

import DefColors from "../../DefColors";
import charNames from "../assets/icons/charNames";
import CardItem from "./RecyclerViewScreens/CardItem";

const width = Dimensions.get("window").width;
const numcolumns = width > 420 ? 5 : 3;

function FlatListGridCard({ navigation }) {
  const [dataList, setDataList] = useState(charNames);
  console.log(dataList.length);
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

      <View style={{ flex: 1 }}>
        <FlatList
          data={dataList}
          renderItem={({ item }) => (
            <CardItem
              id={dataList.indexOf(item)}
              itemNum={dataList.length}
              numCol={numcolumns}
              src={item.src}
              name={item.name}
              nav={navigation}
            />
          )}
          numColumns={numcolumns}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
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
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});

export default FlatListGridCard;
