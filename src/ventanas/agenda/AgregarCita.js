import React, { useState } from 'react';
import { View, Button, TouchableOpacity, TextInput, Switch} from 'react-native';
import { saveAgenda } from '../../../api';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { AntDesign } from '@expo/vector-icons';
import { Card, Text } from '@rneui/themed';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';

export default function AgregarCita () {
   
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
    
    const [citaData, setCitaData] = useState({
        agenda_cliente: '',
        agenda_direccion: '',
        agenda_motivo: '',
        agenda_hora: '00:00', // Formato HH:mm
        agenda_fecha: new Date().toISOString().split('T')[0], // Formato yyyy-mm-dd

      });
      const handleInputChange = (key, value) => {
        setCitaData({ ...citaData, [key]: value });
      };

      const handleDateConfirm = (event, selectedDate) => {
        if (selectedDate) {
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        handleInputChange('agenda_fecha', formattedDate);
        }
        hideDatePicker();  
      
        };
        const handleTimeConfirm = (event, selectedTime) => {
           if (selectedTime) {
            const hours = String(selectedTime.getHours()).padStart(2, '0');
            const minutes = String(selectedTime.getMinutes()).padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;
            handleInputChange('agenda_hora', formattedTime);
           }
              hideTimePicker();
        };
        const [isDatePickerVisible, setDatePickerVisible] = useState(false);

      const showDatePicker = () => {
        setDatePickerVisible(true);
        };

        const hideDatePicker = () => {
        setDatePickerVisible(false);
        };
        
        const [isTimePickerVisible, setTimePickerVisible] = useState(false);

        const showTimePicker = () => {
        setTimePickerVisible(true);
        }

        const hideTimePicker = () => {
        setTimePickerVisible(false);
        }

        const handleAgregarCita = () => {
            console.log(citaData);
            try {
                saveAgenda(citaData);
                navigation.navigate('Agenda');
                }
                catch (error) {
                console.log(error);
                }

    };
    return (
        <View style={styles.container}>
            <View style={styles.CenterContainer}>
            <Card>
             <Card.Title>Reservación</Card.Title>   
            <TextInput
            style={styles.input}
            placeholder="Nombre del cliente"
            value={citaData.agenda_nombre}
            onChangeText={(text) => handleInputChange('agenda_cliente', text)}
            />
            <Card.Divider />
            <TextInput
            style={styles.input}
            placeholder="Lugar Coordinado"
            value={citaData.agenda_direccion}
            onChangeText={(text) => handleInputChange('agenda_direccion', text)}
            />
            <Card.Divider />
            <TextInput
            style={styles.input}
            placeholder="Motivo de la cita"
            value={citaData.agenda_motivo}
            onChangeText={(text) => handleInputChange('agenda_motivo', text)}
            />
            <Card.Divider />
            <Text>Fecha de la cita</Text>
            <TouchableOpacity onPress={showDatePicker}>
            <Text>{citaData.agenda_fecha || 'Fecha'}</Text>
            </TouchableOpacity>
            {isDatePickerVisible && (
            <DateTimePickerAndroid
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateConfirm}
            />
            )}
            <Card.Divider />
            <Text>Hora de la cita</Text>
            <TouchableOpacity onPress={showTimePicker}>
            <Text>{citaData.agenda_hora || 'Hora'}</Text>
            </TouchableOpacity>
            {isTimePickerVisible && (
            <DateTimePickerAndroid
            value={new Date()}
            mode="time"
            display="default"
            onChange={handleTimeConfirm}
            />
    )}
    <Button title="Agregar Cita" onPress={handleAgregarCita} />
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
