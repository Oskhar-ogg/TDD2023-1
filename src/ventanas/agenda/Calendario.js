import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../componentes/estilos/Estilos';
import { getAgenda, saveAgenda, deleteAgenda } from '../../../api';


LocaleConfig.locales['es'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
  'Octubre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene.','Feb.','Mar.','Abr.','May.','Jun.','Jul.','Ago.','Sep.','Oct.','Nov.','Dic.'], 
  dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mié.','Jue.','Vie.','Sáb.'],
  today: 'Hoy\'hoy'
};
LocaleConfig.defaultLocale = 'es';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

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

const [items, setItems] = useState({});

useEffect(() => {
    loadItems();
  }, []);


  const loadItems = async () => {
    try {
      const agendas = await getAgenda();
      const newItems = {};

      agendas.forEach((agenda) => {
        const time = new Date(agenda.agenda_fecha).getTime();
        const strTime = timeToString(time);

        if (!newItems[strTime]) {
          newItems[strTime] = [];
        }

        newItems[strTime].push({
          name: agenda.agenda_cliente,
          agenda_cliente: agenda.agenda_cliente,
          agenda_direccion: agenda.agenda_direccion,
          agenda_hora: agenda.agenda_hora,
          agenda_fecha: agenda.agenda_fecha
        });
      });

      setItems(newItems);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = React.memo(({ item }) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Cliente: {item.agenda_cliente}</Text>
              <Text>Dirección: {item.agenda_direccion}</Text>
              <Text>Hora: {item.agenda_hora}</Text>
              <Text>Fecha: {new Date(item.agenda_fecha).toLocaleDateString()}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  });

return (
  <View style={styles.container}>
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2023-06-27'}
      renderItem={(item) => (
        <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
          <Card>
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Cliente: {item.agenda_cliente}</Text>
                <Text>Dirección: {item.agenda_direccion}</Text>
                <Text>Hora: {item.agenda_hora}</Text>
                <Text>Fecha: {new Date(item.agenda_fecha).toLocaleDateString()}</Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
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
          <AntDesign name="plus" size={24} color="#ffffff" /><Text style={styles.buttonText}>Bitácora</Text>
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
};


export default Calendario;
