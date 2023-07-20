//SECTOR DE IMPORTACIONES
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Alert,
} from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../componentes/estilos/Estilos';
import { useState } from 'react';

import { MontoBitacora, MontoMesBitacora } from '../../api';


//SECTOR DE FUNCIONES
const Tarjeta = () => {

  return (
    <ImageBackground source={require('./../imagenes/tarjeta.jpg')} style={styles.image}>
      <View style={styles.textContainer}>
        <Text style={styles.TextCard}>BALANCE DEL MES</Text>
        <Text style={styles.TextCardBottom}>Saldo Mes =  +${MontoMesBitacora}</Text>
        <Text style={styles.TextCardBottom2}>Gasto Mes = -$</Text>
        <Text style={styles.TextCardBottom2}>Ingreso Total = +${MontoBitacora}</Text>
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
    navigation.navigate('Más');
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
