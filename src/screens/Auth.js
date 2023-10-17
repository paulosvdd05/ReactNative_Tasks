import React, { Component } from 'react'
import { Alert, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import backgroundImage from '../../assets/imgs/Task2.png'
import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput'

import { server, showError, showSuccess } from '../common'
import { Image } from '@rneui/base'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
    carregando: false
}

export default class Auth extends Component {

    state = {
        ...initialState

    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    signup = async () => {

        try {
            this.setState({ carregando: true }, async () => {
                await axios.post(`${server}/signup`, {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                })
                this.setState({ carregando: false })
                showSuccess('Usuário cadastrado!!')
                this.setState({ ...initialState })
            })

        } catch (e) {
            showError(e)
        }
    }

    signin = async () => {
        try {
            this.setState({ carregando: true }, async () => {
                const res = await axios.post(`${server}/signin`, {
                    email: this.state.email,
                    password: this.state.password,
                })
                .catch((e) => {
                    showError(e)
                    this.setState(initialState)
                })

                //salvar token, nome e email no asyncstorage para o proximo uso do app
                axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
                AsyncStorage.setItem('userData', JSON.stringify(res.data))
                this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Home',
                                params: res.data,
                            },
                        ],
                    })
                )
                this.setState({ carregando: false })
            })

        } catch (e) {
            showError(e)
        }
    }

    render() {

        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim().length >= 3)
            validations.push(this.state.password === this.state.confirmPassword)
        }

        const validForm = validations.reduce((t, a) => t && a)


        return (
            <>
                <SafeAreaView
                    style={styles.background}>
                    <Image style={styles.title} source={backgroundImage} />
                    <View style={styles.formContainer}>
                        <Text style={styles.subTitle}>
                            {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                        </Text>
                        {this.state.stageNew &&
                            <AuthInput icon='user' placeholder='Nome'
                                value={this.state.name}
                                style={styles.input}
                                onChangeText={name => this.setState({ name })} />
                        }

                        <AuthInput icon='at' placeholder='E-mail'
                            value={this.state.email}
                            style={styles.input}
                            onChangeText={email => this.setState({ email })} />
                        <AuthInput icon='lock' placeholder='Senha'
                            value={this.state.password}
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })} />
                        {this.state.stageNew &&
                            <AuthInput icon='asterisk' placeholder='Confirmação de Senha'
                                value={this.state.confirmPassword}
                                style={styles.input}
                                secureTextEntry={true}
                                onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                        }
                        <TouchableOpacity onPress={this.signinOrSignup}
                            disabled={!validForm}>
                            <View style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]}>
                                <Text style={styles.buttonText}>
                                    {this.state.carregando ? <ActivityIndicator size={25} color='#fff' /> : this.state.stageNew ? 'Registrar' : 'Entrar'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={
                        () => this.setState({ stageNew: !this.state.stageNew })
                    } style={{ padding: 10 }}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                        </Text>
                    </TouchableOpacity>

                </SafeAreaView>
                <View style={{ backgroundColor: '#004AAD' }}>
                    <Text style={styles.footer}>Developed by Paulo Sergio Dias</Text>
                </View>

            </>

        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#004AAD'
    },
    title: {
        width: 250,
        height: 100,
        marginBottom: 10
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    input: {
        marginTop: 10,
        backgroundColor: '#fff',
        color:'#000'
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
        borderRadius: 25,
        shadowColor: '#171717',
        elevation: 10,
    },
    button: {
        backgroundColor: '#070',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        fontSize: 20
    },
    footer: {
        textAlign: 'center',
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: '#fff'
    }
})