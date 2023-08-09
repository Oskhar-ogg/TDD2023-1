import React, { useState } from 'react';
import { View, Button, TouchableOpacity, TextInput} from 'react-native';
import {saveCliente} from '../../../api';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { AntDesign } from '@expo/vector-icons';
import { Card, Text } from '@rneui/themed';

export default function AgregarCliente() {

    const navigation = useNavigation();

    const handleInicioPress = () => {
        navigation.navigate('MDIAPP V0.8');
    }

    const handleInventarioPress = () => {
        navigation.navigate('Inventario');
    }

    const handleBitacoraPress = () => {
        navigation.navigate('Bitácora');
    }


    const handleAgendaPress = () => {
        navigation.navigate('Agenda');
    }

    const handleMasPress = () => {
        navigation.navigate('Más');
    }

    const handleClientePress = () => {
        navigation.navigate('Lista Clientes');
    }

    const handleAgregarCliente = () => {

        try{
        saveCliente(clienteData);
        handleClientePress();
        }
        catch (error) {
            console.log(error);
        }
    }

    const [clienteData, setClienteData] = useState({
        cliente_nombre: '',
        cliente_direccion: '',
        cliente_telefono: '',
        comuna_id: 1,
    });
    const handleInputChange = (key, value) => {
        setClienteData({ ...clienteData, [key]: value });
    };
    return (
        <View style={styles.container}>
            <View style={styles.CenterContainer}>
                <Card style={styles.Card}>
                <Card.Title>INGRESO DE UN NUEVO CLIENTE</Card.Title>
                <Card.Divider />
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa el nombre del cliente"
                    value={clienteData.cliente_nombre}
                    onChangeText={(text) => handleInputChange('cliente_nombre', text)}
                />
                <Card.Divider />          
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa la dirección del cliente"
                    value={clienteData.cliente_direccion}
                    onChangeText={(text) => handleInputChange('cliente_direccion', text)}
                />
                <Card.Divider />
                <TextInput
                    style={styles.input}
                    placeholder="Telefono cliente (SIN +56)"
                    value={clienteData.cliente_telefono}
                    onChangeText={(text) => handleInputChange('cliente_telefono', text)}
          />
          <Button title="Agregar contacto cliente" onPress={handleAgregarCliente}/>
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
          <Text style={styles.buttonText}>Más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}