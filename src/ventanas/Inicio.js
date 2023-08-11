//SECTOR DE IMPORTACIONES
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../componentes/estilos/Estilos';
import { Button, Text } from '@rneui/themed';
import { Card } from 'react-native-paper';

import { MontoBitacora, MontoMesBitacora } from '../../api';


//SECTOR DE FUNCIONES
const Tarjeta = () => {
  const [montoMes, setMontoMes] = useState('');
  const [montoTotal, setMontoTotal] = useState('');

  useEffect(() => {
    // Llamar a la función para obtener el monto del mes
    obtenerMontoMes();

    // Llamar a la función para obtener el monto total
    obtenerMontoTotal();
  }, []);

  const obtenerMontoMes = async () => {
    try {
      const monto = await MontoMesBitacora();
      setMontoMes(monto);
    } catch (error) {
      console.error('Error al obtener el monto del mes:', error);
    }
  };

  const obtenerMontoTotal = async () => {
    try {
      const monto = await MontoBitacora();
      setMontoTotal(monto);
    } catch (error) {
      console.error('Error al obtener el monto total:', error);
    }
  };

  return (
    <ImageBackground source={require('./../imagenes/tarjeta.jpg')} style={styles.image}>
      <View style={styles.textContainer}>
        <Text style={styles.TextCard}>Balance General </Text>
        <Text style={styles.TextCardBottom}>Ingreso Mes = ${montoMes}</Text>
        <Text style={styles.TextCardBottom2}>Gasto Mes = $</Text>
        <Text style={styles.TextCard}>Total = ${montoTotal}</Text>
      </View>
    </ImageBackground>
  );
};

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

  const handleAgregarCitapress = () => {
    navigation.navigate('Agregar Cita');
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
          <View style={styles.imageContainer}>
          <Tarjeta />
          </View>
        </View>
      <View style={styles.BottomContainer}>
      <Card style = {styles.Cardinit}>
        <Text style={styles.TextCard}>Accesos Frecuentes</Text>
        <Text style={styles.TextCard}></Text>
        <Button
          icon={<AntDesign name="addfile" size={24} color="white" />}
          style={styles.buttonInit}
          title=" Agregar Bitácora"
          onPress={handleAgregarBitacoraPress}
          color={'#08546c'}
        />
        <Text style={styles.TextCard}></Text>
     
        <Button
          icon={<FontAwesome name="calendar-plus-o" size={24} color="white" />}
          style={styles.buttonInit}
          title=" Registrar Cita"
          onPress={handleAgregarCitapress}
          color={'#08546c'}
        />
        <Text style={styles.TextCard}></Text>

        <Button
          icon={<FontAwesome name="upload" size={24} color="white" />}
          style={styles.buttonInit}
          title=" Subir Foto Ventas"
          onPress={() => Alert.alert('Debe enviar a la ventana de subir archivo de ventas')}
          color={'#08546c'}
          
        />
        <Text style={styles.TextCard}></Text>
        <Text style={styles.TextCard}></Text>
        </Card>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleInicioPress}>
          <AntDesign name="home" size={24} color="#ffffff" />
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleInventarioPress}>
          <AntDesign name="database" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Inventario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton1} onPress={handleBitacoraPress}>
          <AntDesign name="form" size={24} color="#ffffff" />
          <Text style={styles.buttonText}>Bitácora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAgendaPress}>
          <AntDesign name="calendar" size={24} color="#ffffff" />
          <Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMasPress}>
          <AntDesign name="bars" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}> Más</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
