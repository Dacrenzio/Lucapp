import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MiscInfoScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.arrayItem[0]} Misc info Page</Text>
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
export default MiscInfoScreen;
