import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from '../../componentes/estilos/Estilos';

const Mas = () => {

    const [origen, setOrigen] = React.useState({
        latitude: -36.744022,
        longitude: -73.083476,
    });

    return (
      <View style = {styles.container}>
        <MapView style = {styles.map}
        initialRegion={{
            latitude: origen.latitude,
            longitude: origen.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
          >
            <Marker
            draggable 
            coordinate={origen}
            onDragEnd={ (direccion) => setOrigen(direccion.nativeEvent.coordinate)}>
              
            </Marker>
        </MapView>
                </View>
    );
  };
  
  
  
export default Mas;
