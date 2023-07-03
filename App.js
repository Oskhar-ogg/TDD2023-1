//SECTOR DE IMPORTACIONES
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import  {NavigationContainer, NavigationAction, useNavigation}  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Inicio from './src/ventanas/Inicio';
import Calendario from './src/ventanas/agenda/Calendario';
import Inventario from './src/ventanas/inventario/Inventario';
import Mas from './src/ventanas/mas/Mas';
import Bitacora from './src/ventanas/bitacora/Bitacora';
//
//SECTOR DE FUNCIONES

//
//SECTOR DE MUESTREO EN PANTALLA
const App = () => {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Inventario" component={Inventario}  />
        <Stack.Screen name="Agenda" component={Calendario} />
        <Stack.Screen name="Mas" component={Mas} />
        <Stack.Screen name="Bitacora" component={Bitacora} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
// SECTOR ESTILOS CSS 

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

//