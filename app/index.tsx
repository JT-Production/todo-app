import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { images } from "@/constants/images";
import { category, todos } from "@/constants/dummyData";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Menu, Provider } from "react-native-paper";
import TodoIList from "@/components/TodoIList";
import Category from "@/components/Category";
import { SwipeListView } from "react-native-swipe-list-view";
export default function Index() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [todoItem, setTodoItem] = useState("");
  const [todoo, setTodo] = useState(todos);

  const toggleCompletion = (index: number) => {
    setIsCompleted((prev) => !prev);
    setTodo((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].compeleted = !updatedTodos[index].compeleted; // Toggle completion state
      return updatedTodos;
    });
  };

  const addTodo = () => {
    if (todoItem.trim() === "") {
      alert("Please enter a todo item");

      return;
    }
    if (selectedCategory.trim() === "") {
      alert("Please select a category");
      return;
    }
    alert("Todo added successfully");

    todoo.push({
      compeleted: false,
      todo: todoItem,
      category: selectedCategory,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    setTodoItem("");
    setSelectedCategory("");
    setModalVisible(false);
  };
  const deleteTodo = (index: number) => {
    setTodo((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1); // Remove the todo at the specified index
      return updatedTodos;
    });
  };
  return (
    <View className="flex-1  bg-white/30">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="absolute bottom-20 right-10 z-20 bg-primary p-5 rounded-xl"
      >
        <View>
          <AntDesign name="plus" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100, minHeight: "100%" }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {/* Modal Popup */}
        <Modal
          animationType="slide" // can be "fade" or "none"
          backdropColor={"black"}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Android back button
        >
          <View className="absolute left-0 right-0 top-0 bottom-0 bg-black/20 justify-center items-center">
            <View className="bg-white p-10 rounded-xl w-[300px] h-[380px]">
              <Text className="font-bold text-lg">Todo</Text>
              <TextInput
                className="border p-3 py-5 rounded-xl mb-5 mt-2"
                value={todoItem}
                onChangeText={(text: string) => {
                  setTodoItem(text);
                }}
              />
              <Text className="font-bold text-lg">Category</Text>
              <View className="mt-2 flex flex-row flex-wrap gap-2 ">
                {category.map((item, index) => (
                  <Text
                    key={item.id}
                    className={`border p-2 py-4 text-center rounded-xl w-[72px] ${
                      selectedCategory === item.title
                        ? "border-0 bg-black text-white"
                        : ""
                    }`}
                    onPress={() => setSelectedCategory(item.title)}
                  >
                    {item.title}
                  </Text>
                ))}
              </View>

              <TouchableOpacity className="mt-20 flex flex-row justify-end gap-3">
                <Text className="p-3 " onPress={() => setModalVisible(false)}>
                  Close
                </Text>
                <Text
                  className="p-3 px-7 rounded-md bg-primary font-semibold"
                  onPress={() => {
                    addTodo();
                  }}
                >
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View className="flex flex-row justify-between px-5 py-4 mt-2">
          <Image
            source={images.logo}
            className=" h-12 rounded-xl w-20 "
            resizeMode="contain"
          />
          <View className="flex-row flex gap-2 items-center">
            <EvilIcons name="search" size={30} color="black" className="p-2 " />
            <Image
              source={{ uri: "https://avatar.iran.liara.run/public/11" }}
              className="h-10"
              style={{ width: 40, height: 40 }}
            />
          </View>
        </View>
        <View className="mx-5 bg-primary py-10 px-5 mt-5 rounded-3xl">
          <Text className="text-2xl font-bold ">Manage Your time well</Text>
        </View>
        <Text className="px-5 mt-5 text-xl font-semibold">Categories</Text>
        <View>
          <FlatList
            horizontal
            data={category}
            keyExtractor={(items) => items.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-2" />}
            renderItem={({ item, index }) => (
              <Category item={item} key={index} />
            )}
          />
          <SwipeListView
            data={todoo}
            ListHeaderComponent={() => (
              <View>
                <Text className="px-5 text-xl font-semibold py-5">
                  You have {todoo.length} tasks for today
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.todo.toString()}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View className="w-4 h-3" />}
            // Visible item
            renderItem={({ item, index }) => (
              <TodoIList
                item={item}
                toggleCompletion={toggleCompletion}
                index={index}
              />
            )}
            // Hidden swipe actions
            renderHiddenItem={({ index }) => (
              <View
             
                className="flex-1 flex-row justify-end bg-[#ff9130] rounded-2xl mx-7 h-[150px]"
              >
                <TouchableOpacity
                  style={{
                    width: 75,
                  }}
                  className=" bg-[#ff9130] flex items-center justify-center"
                   onPress={() => setModalVisible(true)}
                >
                  <Text style={{ color: "#fff" }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 75,
                  }}
                  className="rounded-2xl bg-[#ff3b30] flex items-center justify-center"
                  onPress={() => deleteTodo(index)}
                >
                  <Text style={{ color: "#fff" }}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={0}
            rightOpenValue={-155} // swipe left to reveal delete
            ListEmptyComponent={
              <View className="flex-row item-center justify-center py-40">
                <Text className="text-xl font-bold text-black/30">
                  No Todo found
                </Text>
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
