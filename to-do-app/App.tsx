import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList } from 'react-native';

interface Task{
  id: string;
  title:string;
}

export default function App() {
  const[task, setTask]= useState<string>('');
  conts [taskList, setTaskList]= useState<Task[]>([]);

  const handleAddTask = () =>{
    if(task.length > 0){
      setTaskList(currentTaskList =>[...cirrentTaskList,{id:Math.random().toString(), title: task}]);
    }
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>TO DO APP</Text>
    <View style={styles.inputContainer}>
      <TextInput
              style={styles.input}
              placeholder="Nhap cong viec"
              placeholderTextColor="#666"  
            />
    </View>
    <TouchableOpacity style={styles.nutButton}>
        <Text style={styles.buttonText}  >Them</Text>
    </TouchableOpacity>
    
    <FlatList
      style = {styles.listContainer}
      data ={taskList}
      keyExtractor= {({item})=>item.id} 
      renderItem={({item})=>(
      <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.title}</Text></View>)}

    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title:{
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
  },
  inputContainer:{
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  
  input:{
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  nutButton:{
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer:{
    marginTop:20,
  },
  taskList:{},
  taskItem:{
    padding:10,
    marginVertical:5,
    backgroundColor:'#f0f0f0',
    borderWidth:1,
    borderRadius:5
  },
  taskText:{
    fontSize:16,
  },

});
