import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button, Center, Input, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Alert as RNAlert } from "react-native"; // Importar o Alert do React Native
import { login } from "../api/auth"; // Importe a função de login que você já criou
import { RootStackParamList } from "../navigation/AppNavigator";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      localStorage.setItem("username", username);

      console.log("Token:", token);
      RNAlert.alert("Login realizado com sucesso!");
      navigation.navigate("ConsultationsList");
    } catch (err: unknown) {
      // Verificar se err é uma instância de Error
      if (err instanceof Error) {
        RNAlert.alert("Erro", err.message);
      } else {
        RNAlert.alert("Erro", "Ocorreu um erro inesperado.");
      }
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="purple.600">
        <Box>
          <Input
            placeholder="Usuário"
            mb={4}
            value={username}
            onChangeText={setUsername}
            bg={"#fff"}
            placeholderTextColor="#000000"
            _focus={{
              bg: '#e0e0e0', // Cor de fundo ao focar
              borderColor: '#6200EE', // Cor da borda ao focar (opcional)
            }}
            _hover={{
              bg: '#f0f0f0', // Cor de fundo ao passar o mouse (opcional)
            }}
          />
          <Input
            placeholder="Senha"
            mb={4}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            bg={"white"}
            placeholderTextColor="#000000"
            _focus={{
              bg: '#e0e0e0', // Cor de fundo ao focar
              borderColor: '#6200EE', // Cor da borda ao focar (opcional)
            }}
            _hover={{
              bg: '#f0f0f0', // Cor de fundo ao passar o mouse (opcional)
            }}
          />
          <Button onPress={handleLogin}>Entrar</Button>
          <Button onPress={() => navigation.navigate("SignUp")} mt={4}>
            Cadastrar
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
