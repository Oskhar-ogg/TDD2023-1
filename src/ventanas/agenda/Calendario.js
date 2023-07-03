import { useState } from 'react';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button, Alert} from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

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
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 1 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(15, Math.floor(Math.random() * 3)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 15);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="MDI" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

const navigation = useNavigation();
const handleInicioPress = () => {
navigation.navigate('Inicio');
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
navigation.navigate('Bitacora');
};

  return (
    <View style = {styles.container}>
        <View style={styles.topBar}>
        <Ionicons name="md-water" size={24} color="#ffffff" /><Text style={styles.logo}>MDIBIOBÍO</Text>
      </View>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-06-27'}
        renderItem={renderItem}
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
  
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBar: {
    backgroundColor: '#08546c',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
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

export default Calendario;
