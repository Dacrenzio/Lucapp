import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import DefColors from "../../../DefColors";

function CardItem({ id, itemNum, numCol, src, name, nav, set }) {
  const onPress = () => {
    set(name);
    nav.navigate("Datas");
  };

  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: id >= itemNum - 1 - ((itemNum - 1) % numCol) ? 30 : 4,
        },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={src} />
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: DefColors.black,
    backgroundColor: DefColors.black,
    alignItems: "center",
    margin: 4,
    width: 122,
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 110,
    margin: 6,
  },
  text: {
    paddingBottom: 3,
    paddingHorizontal: 7,
    minWidth: 90,
    maxWidth: 120,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: DefColors.white,
  },
});

export default CardItem;
