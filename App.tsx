import React from 'react';
import { NativeBaseProvider, Box, Text, Center } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <Text fontSize="2xl" color="primary.500" fontWeight="bold" fontFamily="Roboto">
            Olá, nosso app está configurado com Native Base!
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}