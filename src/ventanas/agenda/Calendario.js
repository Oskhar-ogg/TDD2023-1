import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Alert} from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { getAgenda,  deleteAgenda} from '../../../api'; 
import { Text, Card } from 'react-native-paper';
import {Button} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio ',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene.',
    'Feb.',
    'Mar.',
    'Abr.',
    'May.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dic.',
  ],
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles ',
    'Jueves',
    'Viernes',
    'Sábado',
  ],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: 'Hoy',
};
LocaleConfig.defaultLocale = 'es';

const Calendario = () => {
  
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
  const handleDelete = async (agenda_id) => {
    Alert.alert("Eliminar Cita", "¿Estás seguro que deseas eliminar esta cita?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Eliminar",
        onPress: async () => {
          await deleteAgenda(agenda_id);
          console.log('Cita eliminada correctamente');
      },
      },
    ])
};

  const [items, setItems] = useState({});

  const cargarItems = async  () => {
    try {
      const agendas = await getAgenda(); // Obtiene los datos de la agenda desde tu API

      const formattedItems = {};

      agendas.forEach((agenda) => {
        const date = agenda.agenda_fecha;
        const dateString = new Date(date).toISOString().split('T')[0];

        if (!formattedItems[dateString]) {
          formattedItems[dateString] = [];
        }

        formattedItems[dateString].push({
          agenda_id: agenda.agenda_id,
          agenda_cliente: agenda.agenda_cliente,
          agenda_direccion: agenda.agenda_direccion,
          agenda_motivo: agenda.agenda_motivo,
          agenda_hora: agenda.agenda_hora,
          agenda_fecha: agenda.agenda_fecha,
        });
      });

      setItems(formattedItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarItems();
    console.log(setItems);
    console.log('citas cargadas correctamente');
  }, []);

  class Reservation extends React.PureComponent {
    render() {
      const { item } = this.props;
      const {
        agenda_id,
        agenda_cliente,
        agenda_direccion,
        agenda_motivo,
        agenda_hora,
        agenda_fecha,
      } = item;
      console.log(item);
  
      return (
        <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
              <Card>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Cita N°: {agenda_id}</Text>
                <Text>Cliente: {agenda_cliente}</Text>
                <Text>Lugar: {agenda_direccion}</Text>
                <Text>Motivo: {agenda_motivo}</Text>
                <Text>Hora: {agenda_hora}</Text>
                <Text>Fecha: {new Date(agenda_fecha).toLocaleDateString()}</Text>
              </View>
              <Button
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
                  width: 50,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  alignContent: 'right',
                }}
                onPress={() => handleDelete(agenda_id)} // Corregir el argumento de la función handleDelete
              />
              </Card>
        </TouchableOpacity>
      );
    }
  }; 
  const renderItem = (item) => {
    return <Reservation item={item} />;
  };
 
  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={cargarItems}
        selected={new Date().toISOString().split('T')[0]}
        renderItem={renderItem}

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
};

export default Calendario;