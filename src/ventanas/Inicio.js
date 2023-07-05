//SECTOR DE IMPORTACIONES
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Alert,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';



//SECTOR DE FUNCIONES
const Tarjeta = () => {
  return (
    <ImageBackground source={require('./../imagenes/tarjeta.jpg')} style={styles.image}>
      <View style={styles.textContainer}>
        <Text style={styles.TextCard}>BALANCE DEL MES</Text>
        <Text style={styles.TextCardBottom}>Ingreso Mes =  +$</Text>
        <Text style={styles.TextCardBottom2}>Gasto Mes = -$</Text>
      </View>
    </ImageBackground>
  );
} ;


//SECTOR DE MUESTREO Y ESTILOS
export default function Inicio() {

  const navigation = useNavigation();

  const handleInicioPress = () => {
    navigation.navigate('MDIAPP V0.8');
    };
    const handleInventarioPress = () => {
    navigation.navigate('Inventario');
    };
    const handleAgendaPress = () => {
    navigation.navigate('Agenda');
    };
    const handleMasPress = () => {
    navigation.navigate('Mas');
    };
    const handleBitacoraPress = () => {
    navigation.navigate('Bitácora');
    };
    const handleAgregarBitacoraPress = () => {
      navigation.navigate('Agregar Bitácora');
      };


  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <View style ={styles.imageContainer}>
        <Tarjeta/>
      </View>
      </View>
      <View style={styles.BottomContainer}>
        <Text  style={styles.Text2}>Accesos Rápidos</Text>
        <Button style={styles.button}
        title="Agregar Bitácora"
        onPress={handleAgregarBitacoraPress}
      />
              <Button style={styles.button}
        title="Subir Archivo_Compras"
        onPress={() => Alert.alert('Debe enviar a la ventana de subir archivo de compras')}
      />
              <Button style={styles.button}
        title="Subir_Archivo_Ventas"
        onPress={() => Alert.alert('Debe enviar a la ventana de subir archivo de ventas')}
      />
        </View>
        <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleInicioPress}
        >
          <AntDesign name="home" size={24} color="#ffffff" /><Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleInventarioPress}
        >
          <AntDesign name="database" size={24} color="#FFFFFF" /><Text style={styles.buttonText}>Inventario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={handleBitacoraPress}
        >
          <AntDesign name="form" size={24} color="#ffffff" /><Text style={styles.buttonText}>Bitácora</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAgendaPress}
        >
          <AntDesign name="calendar" size={24} color="#ffffff" /><Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleMasPress}
        >
          <AntDesign name="bars" size={24} color="#FFFFFF" /><Text style={styles.buttonText}> Más</Text>
        </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    fontSize: 20,
    alignContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  appName: {
    fontSize: 18,
    alignItems: 'center',
  },
  login: {
    fontSize: 16,
  },
  TopContainer:{
    flex: 1,  
    backgroundColor: '#022534',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  imageContainer:{
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  image: {
    flex: 0.67,
    width: 355,
    height: 225,
    borderRadius: 17,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor : '#fff',
    resizeMode: 'cover',
  },

  BottomContainer:{
    flex: 1,
    backgroundColor: '#022534',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Text:{  
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text2:{  
    color: '#fff',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextCard:{  
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  TextCardBottom:{  
    color: 'green',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  TextCardBottom2:{  
    color: 'red',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo semi-transparente
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#08546c',
    height: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  roundButton1: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 50,
    backgroundColor: '#033342',
    borderColor: '#fff',
    borderWidth: 2,
  }
});
