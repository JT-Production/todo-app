import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Category = ({item}:any) => {
  return (
    <TouchableOpacity>
      <View className="p-8 gap-3">
        <MaterialIcons
          name={item.iconName}
          size={20}
          color={item.color}
          className="p-3.5 border border-black/10 rounded-2xl text-center"
        />
        <Text className="text-center">{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
