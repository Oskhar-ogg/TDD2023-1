import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

import Inicio from './src/ventanas/Inicio';
import Calendario from './src/ventanas/agenda/Calendario';
import Inventario from './src/ventanas/inventario/Inventario';
import Mas from './src/ventanas/mas/Mas';
import Bitacora from './src/ventanas/bitacora/Bitacora';
import AgregarBitacora from './src/ventanas/bitacora/AgregarBitacora';
import Busqueda from './src/ventanas/busqueda/Busqueda';
import ListaCalefont from './src/ventanas/inventario/ListaCalefont';
import ListaCalderas from './src/ventanas/inventario/ListaCalderas';
import AgregarCita from './src/ventanas/agenda/AgregarCita';
import Login from './src/ventanas/login';
import ListaClientes from './src/ventanas/mas/Listaclientes';
import AgregarCliente from './src/ventanas/mas/AgregarCliente';
import Mantenimiento from './src/ventanas/mas/mantenimiento';
import HistoricoCliente from './src/ventanas/mas/Historicocliente';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#08546c" }, headerTitleStyle: { color: "#ffffff" }, headerTitleAlign: "center" }}>
    <Stack.Screen name="MDIAPP V0.8" component={Inicio} options={({ navigation }) => ({
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 15 }}>
        <TouchableOpacity onPress={() => handleMicrophonePress()}>
        <Ionicons name="mic-circle-sharp" size={35} color="white" />
        </TouchableOpacity>
      </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="log-out-sharp" size={30} color="#ffffff"  />
        </TouchableOpacity>
      ),
    })}/>
    <Stack.Screen name="Inventario" component={Inventario} />
    <Stack.Screen name="Agregar Cita" component={AgregarCita} />
    <Stack.Screen name="Agenda" component={Calendario} 
    options={({ navigation }) => ({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Agregar Cita')}>
          <FontAwesome name="calendar-plus-o" size={30} color="white" />
        </TouchableOpacity>
      ),
    })}/>
    <Stack.Screen name="ListaCalderas" component={ListaCalderas} />
    <Stack.Screen name="ListaCalefont" component={ListaCalefont} />
    <Stack.Screen
      name="Bitácora"
      component={Bitacora}
      options={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Agregar Bitácora')}>
            <AntDesign name="addfile" size={30} color="white" />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen name="Agregar Bitácora" component={AgregarBitacora} />
    <Stack.Screen name="Búsqueda" component={Busqueda} />
    <Stack.Screen name="Más" component={Mas} />
    <Stack.Screen name="Mantenimiento" component={Mantenimiento} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Lista Clientes" component={ListaClientes} options={({ navigation }) => ({
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Agregar Clientes')}>
        <Ionicons name="person-add" size={35} color="white" />
        </TouchableOpacity>
      </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Mantenimiento')}>
          <Ionicons name="hammer" size={30} color="#ffffff"  />
        </TouchableOpacity>
      ),
    })}/>
    <Stack.Screen name="Agregar Clientes" component={AgregarCliente} />
    <Stack.Screen name="Historico Cliente" component={HistoricoCliente} />
  </Stack.Navigator>
</NavigationContainer>
  );
};
export default App;



