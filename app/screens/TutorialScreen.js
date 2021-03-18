import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DefColors from "../../DefColors";

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
    backgroundColor: DefColors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TutorialScreen;
