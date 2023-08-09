import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Card, Avatar } from '@rneui/base';
import { getClienteHistoricoCaldera, getClienteHistoricoCalefont } from '../../../api';
import styles from '../../../src/componentes/estilos/Estilos';


export default function HistoricoCliente () {

    const [historicoCaldera, setHistoricoCaldera] = useState([]);
    const [historicoCalefont, setHistoricoCalefont] = useState([]);

    const handleHistoricoCaldera = async () => {
        try {
            const response = await getClienteHistoricoCaldera();
            setHistoricoCaldera(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleHistoricoCalefont = async () => {
        try {
            const response = await getClienteHistoricoCalefont();
            setHistoricoCalefont(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleHistoricoCaldera();
        handleHistoricoCalefont();
    }
    , []);

    return (
        <View style={styles.container}>
            <View style={styles.CenterContainer}>
                <Card style={styles.Card}>
                    <Card.Title>Historico de Calderas</Card.Title>
                    <Card.Divider />
                    <FlatList
                        data={historicoCaldera}
                        renderItem={({ item }) => (
                           
                                <Card>
                                    <Card.Title>Mantenimiento Historico del equipo</Card.Title>
                                    <Card.Divider />
                                    <Text>Dueño del equipo: {item.cliente_nombre}</Text>
                                    <Text>Marca: {item.caldera_marca}</Text>
                                    <Text>Modelo: {item.caldera_modelo}</Text>
                                    <Text>Fecha de ultima mantención: {item.mantenimiento_fecha}</Text>
                                    <Text>Servicio Ejecutado: {item.mantenimiento_descripcion}</Text>
                                </Card>
                        )}
                    />
                </Card>
                <Card style={styles.Card}>
                    <Card.Title>Historico de Calefont</Card.Title>
                    <Card.Divider />
                    <FlatList
                        data={historicoCalefont}
                        renderItem={({ item }) => (
                                <Card>
                                    <Card.Title>Mantenimiento Historico del equipo</Card.Title>
                                    <Card.Divider />
                                    <Text>Dueño del equipo: {item.cliente_nombre}</Text>
                                    <Text>Marca: {item.calefont_marca}</Text>
                                    <Text>Modelo: {item.calefont_modelo}</Text>
                                    <Text>Fecha de ultima mantención: {item.mantenimiento_fecha}</Text>
                                    <Text>Servicio Ejecutado: {item.mantenimiento_descripcion}</Text>
                                </Card>

                        )}
                    />
                </Card>
            </View>
        </View>
    );
};