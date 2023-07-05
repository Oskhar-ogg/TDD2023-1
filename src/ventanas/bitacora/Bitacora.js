import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, FlatList, SafeAreaView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getBitacora } from '../../../api';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { Card, Text } from '@rneui/themed';

export default function Bitacora() {
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
    navigation.navigate('AgregarBitacora');
  };

  const [bitacora, setBitacora] = useState([]);

  const cargarBitacora = async () => {
    const data = await getBitacora();
    setBitacora(data);
  }

  useEffect(() => {
    cargarBitacora();
  }, []);

  const getColor = (estado) => {
    if (estado === 'Finalizado') {
      return 'green'; // Color verde para el estado "Finalizado"
    } else if (estado === 'En Progreso') {
      return 'yellow'; // Color amarillo para el estado "En progreso"
    } else {
      return 'red'; // Color rojo para el estado "No iniciado" o cualquier otro estado
    }
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={bitacora}
        keyExtractor={(item) => item.bitacora_id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.bitacora_title}</Card.Title>
            <Card.Title>{item.bitacora_fecha}</Card.Title>
            <Text style={{ color: getColor(item.bitacora_estado) }}>{item.bitacora_estado}</Text>
            <Card.Divider />
            <Text style={{ color: '#000000', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', fontSize: 16 }}>{item.bitacora_description}</Text>
            <Card.Divider />
            <Text style={{ color: '#000000', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', fontSize: 16 }}>${item.bitacora_valor_cobrado}</Text>
          </Card>
        )}
        nestedScrollEnabled={true} // Habilitar desplazamiento interno de FlatList
      />
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
      <StatusBar style="auto" />
    </View>
  );
}
