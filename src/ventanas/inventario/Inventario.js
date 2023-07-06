import { StatusBar } from 'expo-status-bar';
import {View, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card , Text} from '@rneui/themed';
import styles from '../../componentes/estilos/Estilos';

const PlaceholderImage = require('../../recursosvisuales/albin_trotter.jpg');
const PlaceholderImage2 = require('../../recursosvisuales/baxi.jpg');

const  Inventario = () => {
  
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

  return (
    <View style={styles.container}>
      <View style = {styles.CenterContainer}> 
      <ScrollView>     
        <TouchableOpacity onPress={ () => Alert.alert('Debe llevar a una selección de calderas por marca')}>  
        <Card>
  <Card.Title>CALDERAS</Card.Title>
  <Card.Divider />
  <Card.Image style={{  
    flex: 1,
    width: 320,
    height: 350,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'stretch',}}>
    <Image source={PlaceholderImage2} style = {{maxWidth: 320, maxHeight: 440}}/>
  </Card.Image>
  <Card.Divider />
  <Text style={{ marginBottom: 10 }}>Calderas murales y de pie. </Text>   
    <Text style={{ marginBottom: 10 }}>Uso domiciliario e industrial.</Text>
    <Text style={{ marginBottom: 10 }}>Combustibles: gas licuado, gas natural, petróleo y electricidad.</Text>
</Card>

        </TouchableOpacity>
        <TouchableOpacity onPress={ () => Alert.alert('Debe llevar a una selección de calefonts por marca')}>
        <Card>
  <Card.Title>CALEFONTS</Card.Title>
  <Card.Divider />
  <Card.Image style={{ 
    flex: 1,
    width: 320,
    height: 440,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'stretch',}}>
    <Image source={PlaceholderImage} style = {{maxWidth: 320, maxHeight: 440}}/>
  </Card.Image>
  <Card.Divider />
  <Text style={{ marginBottom: 10 }}>Calefonts de uso domiciliario a gas de tipo tiro forzado y tiro natural.</Text>
    <Text style={{ marginBottom: 10 }}> Combustibles: gas licuado y gas natural.
  </Text>
</Card>
</TouchableOpacity>
      </ScrollView>
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


export default Inventario;