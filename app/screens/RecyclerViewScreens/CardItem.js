import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function CardItem({ src, name }) {
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: name === "Zero Suit Samus" || name === "Zelda" ? 35 : 4,
        },
      ]}
    >
      <Image style={styles.image} source={src} />
      <Text style={styles.text}>{name}</Text>
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
    marginBottom: 3,
    minWidth: 90,
    maxWidth: 120,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CardItem;
