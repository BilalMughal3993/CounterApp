import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

import data from "./Data"

const FlatListD= ()=> {
  return (
    <View style={styles.container}>
     <FlatList 
     keyExtractor={(item)=>{
       return item.key;}}
       horizontal
       data={data} 
     renderItem={({item})=>{
       return <Text style={styles.textStyle}>{item.name}</Text>
      }}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:"center",
    margin:20,
    padding:10
  }
  ,
  textStyle:{
    fontSize:30,
    fontWeight:'bold',
    color:'red'
    ,padding:30,
    margin:20,
    backgroundColor:"blue"
  }
});

export default FlatListD