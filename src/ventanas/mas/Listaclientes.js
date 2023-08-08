import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, RefreshControl, FlatList, TouchableOpacity, Linking, Modal} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { Card,Text, Button, Image, Avatar } from '@rneui/themed';
import {getClientes, getClienteHistoricoCaldera, getClienteHistoricoCalefont} from '../../../api';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import styles from '../../../src/componentes/estilos/Estilos';

export default function ListaCliente() {

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

  const handleWhatsAppButtonPress = (phoneNumber) => {
    if (phoneNumber) {
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=56${phoneNumber}&text&type=phone_number&app_absent=0`;
      Linking.canOpenURL(whatsappUrl)
        .then((supported) => {
          if (supported) {
            return Linking.openURL(whatsappUrl);
          } else {
            console.log(`No se puede abrir la URL: ${whatsappUrl}`);
          }
        })
        .catch((error) => console.error('Error al abrir la URL', error));
    }
  };

  const HistoricoModal = ({visible, onclose, cliente_id}) => {
        const [historicoCaldera, setHistoricoCaldera] = useState([]);
        const [historicoCalefont, setHistoricoCalefont] = useState([]);

        const cargarHistorico = async () => {
            try{
                const historicoCalderaData = await getClienteHistoricoCaldera(cliente_id);
                const historicoCalefontData = await getClienteHistoricoCalefont(cliente_id);

                setHistoricoCaldera(historicoCalderaData);
                setHistoricoCalefont(historicoCalefontData);
            } catch (error) {
                console.error(error);
            }
        };
        return (
          <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onclose}>
            <View>
              <Button title="Cerrar" onPress={onclose} />
              <Text>Historico Caldera</Text>
              <FlatList
                data={historicoCaldera}
                keyExtractor={(item) => item.codigo_cliente.toString()}
                renderItem={({ item }) => (
                  <Card>
                    <Card.Title>Información del Servicio</Card.Title>
                    <Card.Divider />
                    <Text>Marca: {item.caldera_marca}</Text>
                    <Text>Modelo: {item.caldera_modelo}</Text>
                    <Text>Fecha: {item.mantenimiento_fecha}</Text>
                    <Text>Descripción: {item.mantenimiento_descripcion}</Text>
                  </Card>
                )}
                />
                <Text>Historico Calefont</Text>
                <FlatList
                data={historicoCalefont}
                keyExtractor={(item) => item.codigo_cliente.toString()}
                renderItem={({ item }) => (
                  <Card>
                    <Card.Title>Información del Servicio</Card.Title>
                    <Card.Divider />
                    <Text>Marca: {item.calefont_marca}</Text>
                    <Text>Modelo: {item.calefont_modelo}</Text>
                    <Text>Fecha: {item.mantenimiento_fecha}</Text>
                    <Text>Descripción: {item.mantenimiento_descripcion}</Text>
                  </Card>
                )}
                />
            </View>
          </Modal>
        );
  } ;  

  const [modalVisible, setModalVisible] = useState(false);
  const [cliente_id, setCliente_id] = useState(0);

  const handleHistoricoPress = (id) => {
    setCliente_id(id);
    setModalVisible(true);
    cargarHistorico();
  };




 const [refreshing, setRefreshing] = React.useState(false);
 const [cliente, setCliente] = useState([]);
 const isFocused = useIsFocused();
 
 const cargarCliente = async () => {
    try {
      const data = await getClientes();
      setCliente(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      // Manejar el error de la Promesa aquí, por ejemplo, mostrar un mensaje de error al usuario
    }
     }

    const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await cargarCliente();
    setRefreshing(false);
    }, []);

    useEffect(() => {
    cargarCliente();
    }, [isFocused]);


    return (
    <View style = {styles.container}>
        <FlatList
        data={cliente}
         keyExtractor={(item) => item.cliente_id.toString()}
        renderItem={({ item }) => (
        <Card>
          <Avatar
          size={64}
           rounded
          source={require('../../imagenes/avatar.png')}
          />
        <Card.Title>Información del Cliente</Card.Title>
        <Card.Title>{item.cliente_nombre}</Card.Title>
        <Card.Divider />
        <Text>Dirección:  {item.cliente_direccion}</Text>
        <Text>Comuna:  {item.comuna_nombre}</Text>
        <Card.Divider />

        <Text>Numero telefónico: +56{item.cliente_telefono}</Text>
        <View>
        <Button
        title="WhatsApp"
        icon={{
          name: 'whatsapp',
          type: 'font-awesome-5',
          size: 20,
          color: 'white',
        }}
        iconLeft
        iconContainerStyle={{ marginLeft: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'rgb(18, 140, 126)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 50,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => handleWhatsAppButtonPress(item.cliente_telefono)}
      />
        <Button
              title="Ver histórico de servicios"
              icon={{
                name: 'tools',
                type: 'font-awesome-5',
                size: 20,
                color: 'white',
              }}
              iconLeft
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(199, 43, 98, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => handleHistoricoPress(item.cliente_id)}
            />
            <HistoricoModal visible={modalVisible} onclose={() => setModalVisible(false)} cliente_id={cliente_id} />
        </View>
        </Card>

    )}
    refreshControl={ // Componente RefreshControl para FlatList
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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