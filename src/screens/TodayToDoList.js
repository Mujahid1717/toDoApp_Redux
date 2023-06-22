import { StyleSheet, Text, View, TextInput,KeyboardAvoidingView, TouchableOpacity,Platform, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Task from '../components/Task';

const TodayToDoList = () => {
    const [task,setTask] = useState();
    const [taskItems,setTaskItems] = useState([]);
   
    const handleTaskAdd = () => {
        if(task){
            setTaskItems([...taskItems, task])
            setTask('');
        }else{
            alert('Please Enter The Task')
        }    
    }
    const completedTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy);

    }
  return (
    <View style={styles.container}>
      {/* Today's Task Screen */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
            <View style={styles.items}>
        {/* this is where the task will go!!         */}
        {
            taskItems.map((item, index)=>{
                return (
                    <TouchableOpacity key={index} onPress={()=>{completedTask(index)}}>
                        <Task  text={item} />
                    </TouchableOpacity>
                )
                })
        }
            </View>
      </View>
       {/* write a task section */}
       <KeyboardAvoidingView 
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style = {styles.writeTaskWrapper}
         >
         <TextInput placeholder="write a task" 
            style = {styles.input}
            value = {task}
            onChangeText={(text)=>setTask(text)}
         />
         <TouchableOpacity onPress={()=>handleTaskAdd()}>
            <View style = {styles.addWrapper}>
                <Text style= {styles.addText}> +</Text>
            </View>
         </TouchableOpacity>
         </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e9e9e9'
    },
    taskWrapper:{
        paddingTop:80,
        paddingHorizontal:20,
    },
    sectionTitle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    items:{
        marginTop:30
    },
    writeTaskWrapper:{
        position:'absolute',
        flexDirection:'row',
        bottom:60,
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    input:{
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:'#FFF',
        borderRadius:60,
        borderWidth:1,
        borderColor:'#00d8ff',
        width:250,
    },
    addWrapper:{
        height:60,
        width:60,
        backgroundColor:'#00d8ff',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#00d8ff',
    },
    addText:{}
});
export default TodayToDoList;