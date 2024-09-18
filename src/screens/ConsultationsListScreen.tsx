import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, Button, Center, FlatList, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type ConsultationsListScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ConsultationsList'
>;

type Props = {
    navigation: ConsultationsListScreenNavigationProp;
};

const mockConsultations = [
    { id: '1', doctor: 'Dr. João', date: '10/10/2024', status: 'Confirmada' },
    { id: '2', doctor: 'Dra. Maria', date: '12/10/2024', status: 'Pendente' },
];

const ConsultationsListScreen = ({ navigation }: Props) => {
    return (
        <NativeBaseProvider>
            <Center flex={1} bg="white">
                <Box>
                    <FlatList
                        data={mockConsultations}
                        renderItem={({ item }) => (
                            <Box borderBottomWidth="1" mb={4} p={2}>
                                <Text>Consulta com {item.doctor}</Text>
                                <Text>Data: {item.date}</Text>
                                <Text>Status: {item.status}</Text>
                                <Button mt={2} onPress={() => navigation.navigate('ScheduleConsultation')}>
                                    Detalhes
                                </Button>
                            </Box>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </Box>
            </Center>
        </NativeBaseProvider>
    );
};

export default ConsultationsListScreen;