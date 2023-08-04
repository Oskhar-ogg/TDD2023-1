import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from '../../componentes/estilos/Estilos';
import { AntDesign } from '@expo/vector-icons';

const Opciones = () => {

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

  // Array con las opciones
  const opciones = [
    'Guardar boletas',
    'Guardar facturas',
    'Lista de clientes',
    'Inventario de herramientas',
    'Mapa',
    'Perfil del especialista',
    'Configuraciones de la aplicación',
  ];

  return (
    <View style = {styles.OptionsContainer} >
        {/* Iterar sobre el array de opciones */}
        {opciones.map((opcion, index) => (

          <TouchableOpacity>
          <ListItem key={index} bottomDivider>
            <Icon name="chevron-right" type="evilicon" color="#000" />
            <ListItem.Content>
              <ListItem.Title>{opcion}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
        ))}

        <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleInicioPress}>
          <AntDesign name="home" size={24} color="#ffffff" /><Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleInventarioPress}>
          <AntDesign name="database" size={24} color="#FFFFFF" /><Text style={styles.buttonText}>Inventario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton1} onPress={handleBitacoraPress}>
          <AntDesign name="form" size={24} color="#ffffff" /><Text style={styles.buttonText}>Bitácora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAgendaPress}>
          <AntDesign name="calendar" size={24} color="#ffffff" /><Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMasPress}>
          <AntDesign name="bars" size={24} color="#FFFFFF" /><Text style={styles.buttonText}>Más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Opciones;
