import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    console.log(props.disabled);
    return (
        <TouchableOpacity onPress={props.onPress}
        disabled={props.disabled} 
        style={props.title === "Log Out" ? 
        styles.logOutButton : styles.button}>
            <Text   style={props.title === "Log Out" ? 
        styles.logOutButtonText : styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '90%',
        margin: 10,
        backgroundColor: '#E82223',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '700',
        color:'#FFFFFF'
    },
    logOutButton: {
        width: '90%',
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 10,
        borderColor:'#E82223',
        borderWidth:1,
        padding: 10,
        position:'absolute',
        bottom:40

    },
    
    logOutButtonText: {
        fontSize: 14,
        fontWeight: '700',
        color:'#E82223'
    },
})
