import React, { useState } from 'react';
import { View, Button, TouchableOpacity, TextInput, Switch} from 'react-native';
import { saveBitacora } from '../../../api';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { AntDesign } from '@expo/vector-icons';
import { Card, Text } from '@rneui/themed';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';
export default function AgregarBitacora() {

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);


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

  const [bitacoraData, setBitacoraData] = useState({
    bitacora_title: '',
    bitacora_description: '',
    bitacora_estado: '',
    bitacora_valor_cobrado: '0',
    bitacora_fecha: new Date().toISOString().split('T')[0], // Formato yyyy-mm-dd
    tecnico_id: 1,
  });
  
  const handleInputChange = (key, value) => {
    setBitacoraData({ ...bitacoraData, [key]: value });
  };

  const handleAgregarBitacora = () => {
    const data = {
      ...bitacoraData
    };
    console.log(data);
    try {
      saveBitacora(data);
      handleBitacoraPress();
      // Lógica adicional después de agregar la bitácora (por ejemplo, actualizar la lista de bitácoras)
    } catch (error) {
      console.log(error);
    }
  };
  

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (event, selectedDate) => {
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      handleInputChange('bitacora_fecha', formattedDate);
    }
    hideDatePicker();
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.CenterContainer}>
        <Card style={styles.Card}>
          <Card.Title>INGRESO DE NUEVA BITÁCORA</Card.Title>
          <Card.Divider />
          <TextInput
            style={styles.input}
            placeholder="Ingresa el titulo de la bitácora"
            value={bitacoraData.bitacora_title}
            onChangeText={(text) => handleInputChange('bitacora_title', text)}
          />
          <Card.Divider />          
          <TextInput
            style={styles.input}
            placeholder="Ingresa el avance (puedes ocupar el micrófono))"
            value={bitacoraData.bitacora_description}
            onChangeText={(text) => handleInputChange('bitacora_description', text)}
          />
          <Card.Divider />
          <TextInput
            style={styles.input}
            placeholder="Estado (Vigente / Finalizado/ En progreso)"
            value={bitacoraData.bitacora_estado}
            onChangeText={(text) => handleInputChange('bitacora_estado', text)}
          />
          <Card.Divider />
          <Text>¿Hubo Pago?</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={toggleSwitch}
          />
          {isSwitchOn && (
          <TextInput
          style={styles.input}
          placeholder="$0"
          value={bitacoraData.bitacora_valor_cobrado}
          onChangeText={(text) => handleInputChange('bitacora_valor_cobrado', text)}
          />)}
          <Card.Divider />
          <Text>Fecha</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <Text>{bitacoraData.bitacora_fecha || 'Fecha'}</Text>
          </TouchableOpacity>
          {isDatePickerVisible && (
            <DateTimePickerAndroid
              value={new Date()}
              mode="date"
              display="default"
              onChange={handleDateConfirm}
            />
          )}
          <Button title="Agregar" onPress={handleAgregarBitacora}/>
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
