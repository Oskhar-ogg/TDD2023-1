import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, Alert, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card, ListItem, Icon } from '@rneui/themed';
import styles from '../../componentes/estilos/Estilos';


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
        <TouchableOpacity>  
          <Card>
          <Card.Title>CALDERAS</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: '../../recursosvisuales/Fondo 1.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
        </Card></TouchableOpacity>
        <TouchableOpacity><Card>
          <Card.Title>CALEFONTS</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
        </Card></TouchableOpacity>
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