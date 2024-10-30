import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Center,
  Input,
  NativeBaseProvider,
  Select
} from "native-base";
import React from "react";
import { RootStackParamList } from "../navigation/AppNavigator"; // Importação da tipagem correta

type ScheduleConsultationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ScheduleConsultation"
>;

type Props = {
  navigation: ScheduleConsultationScreenNavigationProp;
};

const ScheduleConsultationScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="purple.600">
        <Box>
          <Input placeholder="Training:" mb={4}
            bg={"white"}
            placeholderTextColor="#000000"
            _focus={{
              bg: '#e0e0e0', // Cor de fundo ao focar
              borderColor: '#6200EE', // Cor da borda ao focar (opcional)
            }}
            _hover={{
              bg: '#f0f0f0', // Cor de fundo ao passar o mouse (opcional)
            }} />
          <Input placeholder="Responsável:" mb={4}
            bg={"white"}
            placeholderTextColor="#000000"
            _focus={{
              bg: '#e0e0e0', // Cor de fundo ao focar
              borderColor: '#6200EE', // Cor da borda ao focar (opcional)
            }}
            _hover={{
              bg: '#f0f0f0', // Cor de fundo ao passar o mouse (opcional)
            }} />
          <Select placeholder="Selecione o tipo" mb={4}
            bg={"white"}
            placeholderTextColor="#000000"
          >
            <Select.Item label="Mandatório" value="Mandatório" />
            <Select.Item label="Desenvolvimento" value="Desenvolvimento" />
            <Select.Item label="Evento" value="Evento" />
            <Select.Item label="Encontro Área" value="Encontro Área" />
            <Select.Item label="Visita Internacional" value="Visita Internacional" />
            <Select.Item label="Campanha" value="Campanha" />
            <Select.Item label="Ativação" value="Ativação" />

          </Select>
          <Select placeholder="Selecione o área" mb={4}
            bg={"white"}
            placeholderTextColor="#000000">
            <Select.Item label="PDLI" value="PDLI" />
            <Select.Item label="SF Training" value="SF Training" />
            <Select.Item label="HSE" value="HSE" />
            <Select.Item label="DE&I" value="DE&I" />
            <Select.Item label="Talent Management" value="Talent Management" />
            <Select.Item label="Cultura" value="Cultura" />
          </Select>
          <Select placeholder="Selecione o formato" mb={4}
            bg={"white"}
            placeholderTextColor="#000000">
            <Select.Item label="Presencial" value="Presencial" />
            <Select.Item label="Online" value="Online" />
            <Select.Item label="Hibrido" value="Hibrido" />
          </Select>
          <Select placeholder="Selecione a audiencia" mb={4}
            bg={"white"}
            placeholderTextColor="#000000">
            <Select.Item label="Todos" value="Todos" />
            <Select.Item label="Sede" value="Sede" />
            <Select.Item label="Suzano" value="Suzano" />
            <Select.Item label="Campinas" value="Campinas" />
            <Select.Item label="Força de Vendas" value="Força de Vendas" />
          </Select>
          <Input placeholder="Selecione a data" mb={4}
            bg={"white"}
            placeholderTextColor="#000000"
            _focus={{
              bg: '#e0e0e0', // Cor de fundo ao focar
              borderColor: '#6200EE', // Cor da borda ao focar (opcional)
            }}
            _hover={{
              bg: '#f0f0f0', // Cor de fundo ao passar o mouse (opcional)
            }} />
          <Button onPress={() => navigation.navigate("ConfirmAppointment")}>
            Agendar
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ScheduleConsultationScreen;
