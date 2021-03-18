import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DefColors from "../../../../DefColors";

function KillConfirmScreen(props) {
  return (
    <View style={styles.container}>
      <Text>KillConfirmScreen Page</Text>
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
export default KillConfirmScreen;
