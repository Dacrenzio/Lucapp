import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function CardItem({ src, name, nav }) {
  const onPress = () => {
    nav.navigate("Datas", { charName: name });
  };
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: name === "Zero Suit Samus" || name === "Zelda" ? 35 : 4,
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
    backgroundColor: "#fff",
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
    color: "#000",
  },
});

export default CardItem;
