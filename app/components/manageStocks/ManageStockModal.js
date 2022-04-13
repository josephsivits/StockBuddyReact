import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'

// future implementation

const ManageStockModal = () => {
  return (
    <View>
      <Modal
      animationType='fade'
        transparent={true}
        visible={true}
        
      >

      </Modal>
    </View>
  )
}

export default ManageStockModal


const styles = StyleSheet.create({
  stockGrade: {
    width:20,
    height:20,
  },
  stockInfo: {
    marginLeft:10,
    marginRight:10,
  },
  modalContainer: {
    width:'80%',
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderRadius:10,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  button:{
    backgroundColor:'#8F84F5',
    padding:10,
    borderRadius:10,
    margin:10,
  }
})