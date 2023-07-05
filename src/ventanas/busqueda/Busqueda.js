import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Linking } from 'react-native';
import axios from 'axios';


const Busqueda = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchTools = async () => {
        try {
          const sodimacUrl = `https://www.sodimac.cl/sodimac-cl/search/${searchTerm}`;
          const easyUrl = `https://www.easy.cl/webapp/wcs/stores/servlet/SearchDisplay?searchTerm=${searchTerm}`;
      
          const [sodimacResponse, easyResponse] = await Promise.all([
            axios.get(sodimacUrl),
            axios.get(easyUrl),
          ]);
      
          const sodimacItems = sodimacResponse.data.items; // Ajusta esto según la estructura de los datos de Sodimac
          const easyItems = easyResponse.data.items; // Ajusta esto según la estructura de los datos de Easy
      
          const combinedResults = [...sodimacItems, ...easyItems];
          setSearchResults(combinedResults);
        } catch (error) {
          console.log('Error en la búsqueda de herramientas:', error);
        }
      };
      return (
        <View>
          <TextInput
            placeholder="Buscar herramientas"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Button title="Buscar" onPress={searchTools} />
      
          <FlatList
            data={searchResults}
            renderItem={({ item }) => (
              <Text onPress={() => Linking.openURL(item.url)}>{item.title}</Text>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      );
};            

export default Busqueda;