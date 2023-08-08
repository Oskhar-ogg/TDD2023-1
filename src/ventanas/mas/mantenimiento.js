import React, { useEffect, useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, FlatList, RefreshControl, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getMantencionesCaldera, getMantencionesCalefont } from '../../../api';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { Card, Text, Button} from '@rneui/themed';
import { useIsFocused } from '@react-navigation/native';


export default function Mantenimiento() {

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

    const [refreshing, setRefreshing] = React.useState(false);
    const [mantencionesCaldera, setMantencionesCaldera] = useState([]);
    const [mantencionesCalefont, setMantencionesCalefont] = useState([]);
    const isFocused = useIsFocused();

    const cargarMantencionesCaldera = async () => {
        try {
            const data = await getMantencionesCaldera();
            setMantencionesCaldera(data);
        } catch (error) {
            console.error(error);
        }
    };

    const cargarMantencionesCalefont = async () => {
        try {
            const data = await getMantencionesCalefont();
            setMantencionesCalefont(data);
        } catch (error) {
            console.error(error);
        }
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await cargarMantencionesCaldera();
        await cargarMantencionesCalefont();
        setRefreshing(false);
    }, []);

    useEffect(() => {
        cargarMantencionesCaldera();
        cargarMantencionesCalefont();
    }, [isFocused]);

    return (
    <View style={styles.container}>
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
    )

}

