import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ConfirmAppointmentScreen from '../screens/ConfirmAppointmentScreen';
import ConsultationsListScreen from '../screens/ConsultationsListScreen';
import LoginScreen from '../screens/LoginScreen';
import ScheduleConsultationScreen from '../screens/ScheduleConsultationScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

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
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConsultationsList" component={ConsultationsListScreen} />
            <Stack.Screen name="ScheduleConsultation" component={ScheduleConsultationScreen} />
            <Stack.Screen name="ConfirmAppointment" component={ConfirmAppointmentScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;