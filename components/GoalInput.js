import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
const GoalInput = props => {
  const [enteredGoal, typedGoal] = useState("");
  const goalInputHandler = inputText => {
    typedGoal(inputText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);

    typedGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="course goal"
          style={styles.textStyle}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.stylebutton}>
          <View style={styles.botton}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.botton}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textStyle: {
    width: "80%",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    alignItems: "center"
  },
  stylebutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  botton: {
    width: "40%"
  }
});

export default GoalInput;
