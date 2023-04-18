
import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import commonStyles from '../commonStyles'

import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={todayImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.tittle}>Hoje</Text>
                    <Text style={styles.subtittle}>{today}</Text>
                </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>
                        Tarefa #01
                    </Text>
                    <Text>
                        Tarefa #02
                    </Text>
                    <Text>
                        Tarefa #03
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
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    tittle:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secundary,
        marginLeft:20,
        marginBottom:20
    },
    subtittle:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.secundary,
        marginLeft:20,
        marginBottom:30
    }
})
