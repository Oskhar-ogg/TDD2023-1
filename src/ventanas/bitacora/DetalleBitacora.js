import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getBitacoras, deleteBitacora } from '../../../api';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../src/componentes/estilos/Estilos';
import { Card, Text, Button} from '@rneui/themed';