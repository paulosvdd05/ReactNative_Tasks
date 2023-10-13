import { Alert, Platform } from "react-native";

const server = Platform.OS === 'ios'
    ? 'https://tasks-backend-dxv6.onrender.com' : 'https://tasks-backend-dxv6.onrender.com'

function showError(err){
    if (err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response.data}`)
    }else{
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response}`)

    }
    
}
function showSuccess(msg){
    Alert.alert('Sucesso!', msg)
}

export {server, showError, showSuccess}