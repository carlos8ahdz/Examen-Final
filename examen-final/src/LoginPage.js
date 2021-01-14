import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, TextInput, Alert, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function LoginPage() {
  const [text, setText] = useState({
    nombre: '',
    correo: ''
  });
  const { nombre, correo } = text;

  const handleChangeText = (nombre, value) => {
    setText({
      ...text,
      [nombre]: value

    });
  }
  
  const alert = () => {
    if(nombre == '' || correo == '') {
      Alert.alert(
        "Error",
        "Ingresa tus datos",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } 
    else{
      Alert.alert(
        "Inicio exitoso",
        `Nombre: ${nombre}, correo: ${correo}`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
        Actions.home();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxed}>
        <Image
          style={[styles.box, styles.tinyLogo]}
          source={require('../Last.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#FFF"
          onChangeText={value => handleChangeText('nombre', value)}
          value={nombre}
          placeholder={'Nombre'}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#FFF"
          onChangeText={value => handleChangeText('correo', value)}
          value={correo}
          placeholder={'Correo'}
        />
        <Button
          onPress={alert}
          color='#20b2aa'
          title="Aceptar"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxed: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    height: '60%',
    width: '100%',

  },
  box: {
    width: 100,
    height: 100,
  },
  tinyLogo: {
    width: 200,
    height: 150,
    borderRadius: 10
  },
  text: {
    color: 'white',
  },
  textInput: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#00ffff',
    color: 'white',
  },
});