import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.stylelist}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  stylelist: {
    padding: 10,
    backgroundColor: "#CCC",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalItem;
