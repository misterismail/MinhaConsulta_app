import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConsultationsListScreen from "../screens/ConsultationsListScreen";
import ScheduleConsultationScreen from "../screens/ScheduleConsultationScreen";
import ConfirmAppointmentScreen from "../screens/ConfirmAppointmentScreen";

// Definindo o RootStackParamList com todas as telas do projeto
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ConsultationsList: undefined;
  ScheduleConsultation: undefined;
  ConfirmAppointment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: "Tela Inicial", headerStyle:{backgroundColor: '#581c87' }, headerTintColor: '#ffffff' }} // Título personalizável
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Acesse sua conta", headerStyle:{backgroundColor: '#581c87' }, headerTintColor: '#ffffff' }} // Título personalizável
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Cadastrar", headerStyle:{backgroundColor: '#581c87' }, headerTintColor: '#ffffff' }} // Título personalizável
      />
      <Stack.Screen
        name="ConsultationsList"
        component={ConsultationsListScreen}
        options={{ title: "Eventos Agendados", headerStyle:{backgroundColor: '#581c87' }, headerTintColor: '#ffffff' }} // Título personalizável
      />
      <Stack.Screen
        name="ScheduleConsultation"
        component={ScheduleConsultationScreen}
        options={{ title: "Agendar Consulta", headerStyle:{backgroundColor: '#581c87' }, headerTintColor: '#ffffff' }} // Título personalizável
      />
      <Stack.Screen
        name="ConfirmAppointment"
        component={ConfirmAppointmentScreen}
        options={{ title: "Confirmação de Agendamento", headerStyle:{backgroundColor: '#581c87' }, headerTintColor: '#ffffff' }} // Título personalizável
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
