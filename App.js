import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [isAddMode, setAddMode] = useState(false);
  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random.toString(), value: goalTitle }
    ]);
    setAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalHandelr = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Press To Add Note" onPress={() => setAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandelr}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
