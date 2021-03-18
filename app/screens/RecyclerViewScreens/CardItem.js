import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DefColors from "../../../DefColors";

function CardItem({ id, numCol, src, name, nav }) {
  const onPress = () => {
    nav.navigate("Datas", { charName: name, title: name });
  };
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: id >= 83 - (83 % numCol) ? 30 : 4,
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
    backgroundColor: DefColors.white,
    alignItems: "center",
    margin: 4,
    maxWidth: "31%",
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
    color: DefColors.black,
  },
});

export default CardItem;
