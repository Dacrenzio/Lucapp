import React from "react";
import { Text, View, StyleSheet } from "react-native";

function TutorialScreen() {
  return (
    <View style={styles.container}>
      <Text>TutorialScreen Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TutorialScreen;
