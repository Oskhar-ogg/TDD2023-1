import React, { useState } from 'react';
import { View, Button, TouchableOpacity, TextInput } from 'react-native';
import { saveBitacora } from '../../../api';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { AntDesign } from '@expo/vector-icons';
import { Card, Text } from '@rneui/themed';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';


export default function AgregarBitacora() {
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

  const [bitacoraData, setBitacoraData] = useState({
    bitacora_title: '',
    bitacora_description: '',
    bitacora_estado: '',
    bitacora_pago: '',
    bitacora_valor_cobrado: '',
    bitacora_foto: '',
    bitacora_fecha: ''
  });

  const handleInputChange = (key, value) => {
    setBitacoraData({ ...bitacoraData, [key]: value });
  };

  const handleAgregarBitacora = () => {
    console.log(bitacoraData);
    try {
      saveBitacora(bitacoraData);
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

  const handleDateConfirm = (date) => {
    hideDatePicker();
    const formattedDate = date.toDateString();
    handleInputChange('bitacora_fecha', formattedDate);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.CenterContainer}>
        <Card>
          <TextInput
            placeholder="Título"
            value={bitacoraData.bitacora_title}
            onChangeText={(text) => handleInputChange('bitacora_title', text)}
          />
          <TextInput
            placeholder="Descripción"
            value={bitacoraData.bitacora_description}
            onChangeText={(text) => handleInputChange('bitacora_description', text)}
          />
      <TextInput
        placeholder="Estado"
        value={bitacoraData.bitacora_estado}
        onChangeText={(text) => handleInputChange('bitacora_estado', text)}
      />
      <TextInput
        placeholder="Pago"
        value={bitacoraData.bitacora_pago}
        onChangeText={(text) => handleInputChange('bitacora_pago', text)}
      />
      <TextInput
        placeholder="Valor Cobrado"
        value={bitacoraData.bitacora_valor_cobrado}
        onChangeText={(text) => handleInputChange('bitacora_valor_cobrado', text)}
      />
      <TextInput
        placeholder="Foto"
        value={bitacoraData.bitacora_foto}
        onChangeText={(text) => handleInputChange('bitacora_foto', text)}
      />
          <TouchableOpacity onPress={showDatePicker}>
            <Text>{bitacoraData.bitacora_fecha || 'Fecha'}</Text>
          </TouchableOpacity>
          <DateTimePickerAndroid
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
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
