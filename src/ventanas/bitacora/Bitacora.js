import React, { useEffect, useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, FlatList, RefreshControl, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getBitacora, deleteBitacora } from '../../../api';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { Card, Text, Button} from '@rneui/themed';
import { useIsFocused } from '@react-navigation/native';

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
    navigation.navigate('Más');
  };
  
  const handleBitacoraPress = () => {
    navigation.navigate('Bitácora');
  };
  

  const [refreshing, setRefreshing] = React.useState(false);
  const [bitacora, setBitacora] = useState([]);
  const isFocused = useIsFocused();

  const cargarBitacora = async () => {
    try {
      const data = await getBitacora();
      setBitacora(data);
    } catch (error) {
      console.error(error);
      // Manejar el error de la Promesa aquí, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await cargarBitacora();
    setRefreshing(false);
  }, []);

  const handleDelete = async (bitacora_id) => {
    Alert.alert("Eliminar bitácora", "¿Estás seguro que deseas eliminar esta bitácora?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Eliminar",
        onPress: async () => {
          await deleteBitacora(bitacora_id);
          console.log('Bitacora eliminada correctamente');
          await cargarBitacora();
      },
      },
    ])
};
  
  useEffect(() => {
    cargarBitacora();
   console.log('Bitacora cargada correctamente');
  }, [isFocused]);


    
  const getColor = (estado) => {
    if (estado === 'Finalizado') {
      return 'green'; // Color verde para el estado "Finalizado"
    } else if (estado === 'En proceso') {
      return 'yellow'; // Color amarillo para el estado "En progreso"
    } else {
      return 'red'; // Color rojo para el estado "No iniciado" o cualquier otro estado
    }
  };

  return (
    <View style={styles.container}>
      <View>
      <FlatList 
        data={bitacora}
        keyExtractor={(item) => item.bitacora_id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.bitacora_title}</Card.Title>
            <Card.Title>{new Date(item.bitacora_fecha).toLocaleDateString()}</Card.Title>
            <Text style={{ color: getColor(item.bitacora_estado) }}>{item.bitacora_estado}</Text>
            <Card.Divider />
            <Text style={{ color: '#000000', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', fontSize: 16 }}>{item.bitacora_description}</Text>
            <Card.Divider />
            <Text style={{ color: '#000000', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', fontSize: 16 }}>${item.bitacora_valor_cobrado}</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button
                title="Eliminar Bitácora"
                icon={{ name: 'trash', type: 'font-awesome', size: 15, color: 'white' }}
                iconCenter
                iconContainerStyle={{ marginLeft: 5 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(199, 43, 98, 1)',
                  borderColor: 'transparent',
                  borderWidth: 2,
                  borderRadius: 50,
                }}
                containerStyle={{
                  width: 175,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => handleDelete(item.bitacora_id)} // Corregir el argumento de la función handleDelete
              />
            </View>
          </Card>
        )}
        refreshControl={ // Componente RefreshControl para FlatList
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        nestedScrollEnabled={true} // Habilitar desplazamiento interno de FlatList
      />
      </View>
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