import {StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Task = (props) => {
  return (
    <View style={styles.items}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View> 
            <Text style={styles.itemText}>{props.text}</Text>  
        </View>
         <View style={styles.circular}></View> 
    </View>  
  );
};
const styles = StyleSheet.create({
    items:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:15,
        borderColor:'#00d8ff',
        borderWidth:1
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 22,
        height: 22,
        backgroundColor: '#00d8ff',
        opacity:0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%'
    },
    circular:{
        width:15,
        height:15,
        borderColor:'#00d8ff',
        borderWidth:2,
        borderRadius:6
    }
});
export default Task;