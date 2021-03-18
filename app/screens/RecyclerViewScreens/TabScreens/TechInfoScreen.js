import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DefColors from "../../../../DefColors";

function TechInfoScreen(props) {
  return (
    <View style={styles.container}>
      <Text>TechInfoScreen Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefColors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TechInfoScreen;
