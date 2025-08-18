import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Modal, TextInput } from 'react-native-paper'

const AddModal = ({modalVisible, setModalVisible}:any) => {
    //   const [modalVisible, setModalVisible] = useState(false);
  return (
       <Modal
        animationType="slide" // can be "fade" or "none"
        backdropColor={"black"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Android back button
      >
        <View className="absolute left-0 right-0 top-0 bottom-0 bg-black/30 justify-center items-center">
          <View className="bg-white p-10 rounded-xl w-[300px] h-[200px]">
            <Text style={{ fontSize: 18 }}>Hello Popup 👋</Text>
            <TextInput className="border p-3 rounded-xl" />

          
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

export default AddModal

