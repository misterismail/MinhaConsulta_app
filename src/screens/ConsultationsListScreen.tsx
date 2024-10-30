import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator"; // Certifique-se de importar isso

interface Consultation {
  id: number;
  date: string;
  doctor: string;
  specialty: string;
  status: string;
  username: string;
}

type ConsultationsListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ConsultationsListScreen"
>;

const ConsultationsListScreen = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const navigation = useNavigation<ConsultationsListScreenNavigationProp>();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    axios
      .get(`http://localhost:3000/api/consultations?username=${storedUsername}`)
      .then((response) => {
        setConsultations(response.data.consultations);
      })
      .catch((error) => {
        console.error("Erro ao buscar consultas:", error);
      });
  }, []);

  const renderItem = ({ item }: { item: Consultation }) => (
    <View style={styles.consultationItem}>
      <Text>Paciente: {item.username}</Text>
      <Text>Data: {item.date}</Text>
      <Text>Médico: {item.doctor}</Text>
      <Text>Especialidade: {item.specialty}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Botão na parte superior */}
      <View style={styles.header}>
        <Button title="Voltar" onPress={() => navigation.navigate("Welcome")} />
      </View>
      {/* Botão na parte superior */}
      <View style={styles.header}>
        <Button title="Cadastrar" onPress={() => navigation.navigate("ScheduleConsultation")} />
      </View>

      {/* Lista de consultas */}
      <FlatList
        data={consultations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#9333ea",
  },
  header: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "##9333ea",
    alignItems: "flex-start",
  },
  consultationItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
});

export default ConsultationsListScreen;
