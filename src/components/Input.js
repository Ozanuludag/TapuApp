import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = (props) => {
    return (
        <View>
           <TextInput 
           style={styles.input} 
           placeholder={props.placeholder}
           value={props.value}
           onChangeText={props.onChangeText}
           
           />
        </View>
    )
}
export default Input

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#BBC3CF',
        margin:10,
        fontSize:16,
        fontWeight:'400'
    }
})
