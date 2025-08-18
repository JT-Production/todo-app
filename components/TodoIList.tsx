import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const TodoIList = ({ item, toggleCompletion, index }: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => toggleCompletion(index)} >
      <View className="py-10 px-5 gap-3 flex flex-row items-center bg-white mx-5 rounded-2xl  shadow-xs">
        <View
          className={`  rounded-full ${
            item.compeleted ? "bg-primary border-0 p-[8.5px]" : "border-2 p-3"
          } ${index % 2 ? "border-purple-500" : "border-blue-500"}`}
        >
          {" "}
          {item.compeleted ? (
            <Feather name="check" size={10} color="black" />
          ) : null}
        </View>

        <Text
          className={`text-lg ${
            item.compeleted ? "line-through text-black/30" : ""
          }`}
        >
          {item.todo}
        </Text>
        <View className="ml-auto flex flex-row items-center gap-3">
          <Text>{item.time}</Text>
          <Text className="p-1 text-xs bg-green-300 text-center rounded-sm order-2">
            {item.category}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoIList;
