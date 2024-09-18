import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, Button, Center, Input, NativeBaseProvider } from 'native-base';
import React from 'react';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Login'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
    return (
        <NativeBaseProvider>
            <Center flex={1} bg="white">
                <Box>
                    <Input placeholder="Email" mb={4} />
                    <Input placeholder="Senha" mb={4} secureTextEntry />
                    <Button onPress={() => navigation.navigate('ConsultationsList')}>
                        Entrar
                    </Button>
                    <Button onPress={() => navigation.navigate('SignUp')} mt={4}>
                        Cadastrar
                    </Button>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
};

export default LoginScreen;