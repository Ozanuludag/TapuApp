import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title:{
        fontSize:32,
        fontWeight:'600',
        marginTop:20,
        margin:10,
        color:'black'
    }
})
