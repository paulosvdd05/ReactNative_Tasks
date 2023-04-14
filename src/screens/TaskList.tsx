<<<<<<< HEAD
import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={todayImage}>

                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>
                        TaskList
                    </Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    }
})
=======
import React, {Component} from "react";
import {View, Text} from 'react-native'

export default class TaskList extends Component{
    render(){
        return(
            <View>
                <Text>TaskList</Text>
            </View>
        )
    }
}
>>>>>>> 49e2fcc4164cf082647ebc38db074df2126cfc05
