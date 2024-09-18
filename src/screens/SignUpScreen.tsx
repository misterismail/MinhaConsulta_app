import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, Button, Center, Input, NativeBaseProvider } from 'native-base';
import React from 'react';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type SignUpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignUp'
>;

type Props = {
    navigation: SignUpScreenNavigationProp;
};

const SignUpScreen = ({ navigation }: Props) => {
    return (
        <NativeBaseProvider>
            <Center flex={1} bg="white">
                <Box>
                    <Input placeholder="Nome" mb={4} />
                    <Input placeholder="Email" mb={4} />
                    <Input placeholder="Senha" mb={4} secureTextEntry />
                    <Button onPress={() => navigation.navigate('Login')}>
                        Criar Conta
                    </Button>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
};

export default SignUpScreen;