import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon}/>
            <TextInput placeholderTextColor='#ccc' autoCapitalize='none' {...props} style={styles.input}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:40,
        backgroundColor: '#fff',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        color:'#333',
        marginLeft:20
    },
    input:{
        marginLeft:20,
        width:'70%',
        color:'#333',
        backgroundColor:'#fff'
    }
})