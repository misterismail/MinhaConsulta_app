## Pastas

* **components/**: Para armazenar componentes reutilizáveis (ainda vamos criar).
* **screens/**: Contém as telas principais do aplicativo.
* **navigation/**: Centraliza a configuração da navegação entre as telas.

* ## AppNavigator.tsx

* **Importações:** Importa as bibliotecas e os componentes necessários. <kbd>React</kbd> é importado para o uso do JSX, <kbd>createNativeStackNavigator</kbd> é a função para criar o stack navigator, e as telas são importadas para serem usadas nas rotas do navegador.

* **Definição do Tipo RootStackParamList:** Define os tipos de parâmetros esperados para cada tela no navegador. Neste caso, como não há parâmetros esperados em nenhuma das telas, todos os valores são <kbd>undefined</kbd>.

* **Criação do Stack Navigator:** Cria uma instância do stack navigator com base no tipo <kbd>RootStackParamList</kbd>. Isso define o tipo de navegação para garantir a segurança dos tipos em todo o aplicativo.

* **Definição do Componente AppNavigator:** Define o componente <kbd>AppNavigator</kbd> que renderiza o stack navigator. O <kbd>Stack.Navigator</kbd> configura as rotas do aplicativo e define a tela inicial (<kbd>initialRouteName</kbd>) como "Welcome". Cada <kbd>Stack.Screen</kbd> configura uma rota, associando um nome à tela correspondente.

* **Exportação do AppNavigator:** Exporta o componente <kbd>AppNavigator</kbd> para que possa ser usado em outros lugares, como o arquivo <kbd>App.tsx</kbd>.

* ## App.tsx

* **Importações:** 
* <kbd>React</kbd> é importado para permitir o uso de JSX.
* <kbd>NavigationContainer</kbd> é importado de <kbd>@react-navigation/native</kbd> para fornecer um contexto de navegação para o aplicativo.
* <kbd>NativeBaseProvider</kbd> é importado de <kbd>native-base</kbd> para fornecer o contexto necessário para os componentes do Native Base.
* <kbd>AppNavigator</kbd> é importado de <kbd>./src/navigation/AppNavigator</kbd> para gerenciar as rotas e navegação entre as telas do aplicativo.

* **Definição do Componente App:**
* <kbd>< NativeBaseProvider></kbd>: Envolve o aplicativo, fornecendo o contexto necessário para que os componentes do Native Base funcionem corretamente e utilizando o tema definido.
* <kbd>< NavigationContainer></kbd>: Envolve o <kbd>AppNavigator</kbd>, fornecendo o contexto de navegação necessário para que o stack navigator funcione corretamente.
* <kbd>< AppNavigator /></kbd>: Renderiza o componente <kbd>AppNavigator</kbd>, que define as rotas e a navegação entre as diferentes telas do aplicativo.
Exportação do Componente App: Exporta o componente <kbd>App</kbd> como padrão para que possa ser utilizado como ponto de entrada do aplicativo.

* ## WelcomeScreen.tsx

* **Importações:**
* <kbd>React</kbd>: Importado para permitir o uso de JSX.
* <kbd>NativeBaseProvider</kbd>, <kbd>Box</kbd>, <kbd>Button</kbd>, <kbd>Center</kbd>: Componentes do Native Base para construir a interface do usuário.
* <kbd>NativeStackNavigationProp</kbd>: Tipo de navegação para stack navigator do React Navigation.
* <kbd>RootStackParamList</kbd>: Tipo que define as rotas e parâmetros disponíveis na navegação, importado de <kbd>AppNavigator</kbd>.

* **Tipo <kbd>WelcomeScreenNavigationProp</kbd>:**
* Define o tipo de navegação para a tela de boas-vindas. Usa <kbd>NativeStackNavigationProp</kbd> com * <kbd>RootStackParamList</kbd> e a rota <kbd>'Welcome'</kbd>.

* **Tipo <kbd>Props</kbd>:**
* Define as propriedades que o componente <kbd>WelcomeScreen</kbd> aceita, especificamente o objeto de navegação.

* **Componente <kbd>WelcomeScreen</kbd>:**
* <kbd>< NativeBaseProvider></kbd>: Envolve o conteúdo, fornecendo o contexto do Native Base.
* <kbd>< Center></kbd>: Centraliza seu conteúdo horizontal e verticalmente, e usa um fundo branco.
* <kbd>< Box></kbd>: Um contêiner que pode ser usado para estilizar e organizar o layout.
* <kbd>< Button></kbd>: Um botão que, ao ser pressionado, navega para a tela de Login usando * <kbd>navigation</kbd>.navigate('Login').

* **Exportação do Componente:**
* Exporta o componente <kbd>WelcomeScreen</kbd> como padrão para que possa ser utilizado em outras partes do aplicativo.

* ## LoginScreen.tsx

* **Importações:**
* <kbd>React</kbd>: Importado para permitir o uso de JSX.
* <kbd>NativeBaseProvider</kbd>, <kbd>Box</kbd>, <kbd>Button</kbd>, <kbd>Input</kbd>, <kbd>Center</kbd>: Componentes do Native Base para construção e estilização da interface.
* <kbd>NativeStackNavigationProp</kbd>: Tipo de navegação para stack navigator do React Navigation.
* <kbd>RootStackParamList</kbd>: Tipo que define as rotas e parâmetros disponíveis na navegação, importado de <kbd>AppNavigator</kbd>.

* **Tipo <kbd>LoginScreenNavigationProp</kbd>:**
* Define o tipo de navegação para a tela de login. Usa <kbd>NativeStackNavigationProp</kbd> com <kbd>RootStackParamList</kbd> e a rota <kbd>'Login'</kbd>.

* **Tipo <kbd>Props</kbd>:**
* Define as propriedades que o componente <kbd>LoginScreen</kbd> aceita, especificamente o objeto de navegação.

* **Componente <kbd>LoginScreen</kbd>:**
* <kbd>< NativeBaseProvider></kbd>: Envolve o conteúdo, fornecendo o contexto do Native Base.
* <kbd>< Center></kbd>: Centraliza seu conteúdo horizontal e verticalmente, com fundo branco.
* <kbd>< Box></kbd>: Um contêiner que organiza os elementos dentro da tela.
* <kbd>< Input></kbd>: Campos de entrada para o e-mail e senha. O campo de senha tem a propriedade * <kbd>secureTextEntry para ocultar o texto.
* <kbd>< Button></kbd>: Dois botões:
O primeiro botão navega para a tela de listagem de consultas ao ser pressionado.
O segundo botão navega para a tela de cadastro.

* **Exportação do Componente:**
Exporta o componente <kbd>LoginScreen</kbd> como padrão para que possa ser utilizado em outras partes do aplicativo.


* ## SignUpScreen.tsx

* **Importações:**
* <kbd>React</kbd>: Importado para permitir o uso de JSX.
* <kbd>NativeBaseProvider</kbd>, <kbd>Box</kbd>, <kbd>Button</kbd>, <kbd>Input</kbd>, <kbd>Center</kbd>: Componentes do Native Base para construção e estilização da interface.
* <kbd>NativeStackNavigationProp</kbd>: Tipo de navegação para stack navigator do React Navigation.
* <kbd>RootStackParamList</kbd>: Tipo que define as rotas e parâmetros disponíveis na navegação, importado de <kbd>AppNavigator</kbd>.

* **Tipo <kbd>SignUpScreenNavigationProp</kbd>:**
* Define o tipo de navegação para a tela de cadastro. Usa <kbd>NativeStackNavigationProp</kbd> com * <kbd>RootStackParamList</kbd> e a rota <kbd>'SignUp'</kbd>.

* **Tipo <kbd>Props</kbd>:**
* Define as propriedades que o componente <kbd>SignUpScreen</kbd> aceita, especificamente o objeto de navegação.

* **Componente <kbd>SignUpScreen</kbd>:**
* <kbd>< NativeBaseProvider></kbd>: Envolve o conteúdo, fornecendo o contexto do Native Base.
* <kbd>< Center></kbd>: Centraliza seu conteúdo horizontal e verticalmente, com fundo branco.
* <kbd>< Box></kbd>: Um contêiner que organiza os elementos dentro da tela.
* <kbd>< Input></kbd>: Campos de entrada para nome, e-mail e senha. O campo de senha tem a propriedade <kbd>secureTextEntry</kbd> para ocultar o texto.
* <kbd>< Button></kbd>: Um botão:
Navega para a tela de login quando pressionado.

* **Exportação do Componente:**
* Exporta o componente <kbd>SignUpScreenM</kbd> como padrão para que possa ser utilizado em outras partes do aplicativo.


* ## ConsultationsListScreen.tsx


* **Importações:**
* <kbd>React</kbd>: Importado para permitir o uso de JSX.
* <kbd>NativeBaseProvider</kbd>, <kbd>Box</kbd>, <kbd>Button</kbd>, <kbd>Center</kbd>, <kbd>FlatList</kbd>, <kbd>Text</kbd>: Componentes do Native Base para construção e estilização da interface.
* <kbd>NativeStackNavigationProp</kbd>: Tipo de navegação para stack navigator do React Navigation.
* <kbd>RootStackParamList</kbd>: Tipo que define as rotas e parâmetros disponíveis na navegação, importado de AppNavigator.

* **Tipo <kbd>ConsultationsListScreenNavigationProp</kbd>:**
* Define o tipo de navegação para a tela de listagem de consultas. Usa <kbd>NativeStackNavigationProp</kbd> com <kbd>RootStackParamList</kbd> e a rota <kbd>'ConsultationsList'</kbd>.

* **Tipo <kbd>Props</kbd>:**
* Define as propriedades que o componente <kbd>ConsultationsListScreen aceita, especificamente o objeto de navegação.

* **Dados Mockados <kbd>mockConsultations</kbd>:**
* Array de objetos representando consultas simuladas, cada uma com um <kbd>id</kbd>, nome do <kbd>doctor</kbd>, <kbd>date</kbd> e <kbd>status</kbd>.

* **Componente <kbd>ConsultationsListScreen</kbd>:**
* <kbd>< NativeBaseProvider></kbd>: Envolve o conteúdo, fornecendo o contexto do Native Base.
* <kbd>< Center></kbd>: Centraliza seu conteúdo horizontal e verticalmente, com fundo branco.
* <kbd>< Box></kbd>: Um contêiner que organiza os elementos dentro da tela.
* <kbd>< FlatList></kbd>: Componente para exibir uma lista de itens roláveis:
    * <kbd>data</kbd>: Fonte de dados para a lista, usando <kbd>mockConsultations</kbd>.
    * <kbd>renderItem</kbd>: Função para renderizar cada item da lista:
    * <kbd>< Box></kbd>: Contêiner para cada item, com borda inferior, margem e preenchimento.
    * <kbd>< Text></kbd>: Exibe detalhes da consulta como o nome do médico, data e status.
    * <kbd>< Button></kbd>: Um botão que navega para a tela de agendamento de consultas quando pressionado.
    * <kbd>keyExtractor</kbd>: Função para extrair uma chave única para cada item da lista usando o <kbd>id</kbd>.

* **Exportação do Componente:**
* Exporta o componente <kbd>ConsultationsListScreen</kbd> como padrão para que possa ser utilizado em outras partes do aplicativo.


* ## ScheduleConsultationScreen.tsx

* **Importações:**
* <kbd>React</kbd>: Importado para permitir o uso de JSX.
* <kbd>NativeBaseProvider</kbd>, <kbd>Box</kbd>, <kbd>Button</kbd>, <kbd>Input</kbd>, <kbd>Center</kbd>, <kbd>Select</kbd>, <kbd>CheckIcon</kbd>: Componentes do Native Base usados para construir e estilizar a interface.
* <kbd>NativeStackNavigationProp</kbd>: Tipo de navegação para stack navigator do React Navigation.
* <kbd>RootStackParamList</kbd>: Tipo que define as rotas e parâmetros disponíveis na navegação, importado de <kbd>AppNavigator</kbd>.

* **Tipo <kbd>ScheduleConsultationScreenNavigationProp</kbd>:**
* Define o tipo de navegação para a tela de agendamento de consultas, usando <kbd>/NativeStackNavigationProp<kbd> com <kbd>/RootStackParamList<kbd> e a rota <kbd>'ScheduleConsultation'</kbd>.

* **Tipo <kbd>Props</kbd>:**
* Define as propriedades que o componente <kbd>ScheduleConsultationScreen</kbd> aceita, especificamente o objeto de navegação.

* **Componente <kbd>ScheduleConsultationScreen</kbd>:**
* <kbd>< NativeBaseProvider></kbd>: Envolve o conteúdo, fornecendo o contexto do Native Base.
* <kbd>< Center></kbd>: Centraliza o conteúdo horizontal e verticalmente, com fundo branco.
* <kbd>< Box></kbd>: Um contêiner para organizar os elementos dentro da tela.
* <kbd>< Select></kbd>: Componente para selecionar um item de uma lista:
    * <kbd>placeholder</kbd>: Texto exibido quando nenhum item está selecionado.
    * <kbd>< Select.Item></kbd>: Itens que podem ser selecionados, cada um com um <kbd>label</kbd> e um <kbd>value</kbd>.
* <kbd>< Input></kbd>: Campo de entrada para o usuário inserir a data da consulta.
* <kbd>< Button></kbd>: Botão que navega para a tela de confirmação de agendamento quando pressionado, com o texto "Agendar".

* **Exportação do Componente:**
* Exporta o componente <kbd>ScheduleConsultationScreen</kbd> como padrão para que possa ser utilizado em outras partes do aplicativo.


* ## ConfirmAppointmentScreen.tsx

* **Importações:**
* <kbd>React</kbd>: Importado para permitir o uso de JSX.
* <kbd>NativeBaseProvider</kbd>, <kbd>Box</kbd>, <kbd>Button</kbd>, <kbd>Center</kbd>, <kbd>Text</kbd>: Componentes do Native Base usados para construir e estilizar a interface.
* <kbd>NativeStackNavigationProp</kbd>: Tipo de navegação para stack navigator do React Navigation.
* <kbd>RootStackParamList</kbd>: Tipo que define as rotas e parâmetros disponíveis na navegação, importado de <kbd>AppNavigator</kbd>.

* **Tipo <kbd>ConfirmAppointmentScreenNavigationProp</kbd>:**
* Define o tipo de navegação para a tela de confirmação de agendamento, usando <kbd>NativeStackNavigationProp</kbd> com <kbd>RootStackParamList</kbd>e a rota <kbd>'ConfirmAppointment'</kbd>.

* **Tipo <kbd>Props</kbd>:**
* Define as propriedades que o componente <kbd>ConfirmAppointmentScreen</kbd> aceita, especificamente o objeto de navegação.

* **Componente ConfirmAppointmentScreen:**
* <kbd>< NativeBaseProvider></kbd>: Envolve o conteúdo, fornecendo o contexto do Native Base.
* <kbd>< Center></kbd>: Centraliza o conteúdo horizontal e verticalmente, com fundo branco.
* <kbd>< Box></kbd>: Um contêiner para organizar os elementos dentro da tela.
* <kbd>< Text></kbd>: Exibe a mensagem "Consulta agendada com sucesso!".
* <kbd>< Button></kbd>: Botão que navega de volta para a tela de listagem de consultas quando pressionado, com o texto "Voltar para Consultas". O espaçamento superior (<kbd>mt={4}</kbd>) é adicionado para separar o botão do texto.

* **Exportação do Componente:**
* Exporta o componente <kbd>ConfirmAppointmentScreen</kbd> como padrão para que possa ser utilizado em outras partes do aplicativo.


## Neste MVP estamos usando:
1. **Navegação:** Usamos <kbd>React Navigation</kbd> para gerenciar a navegação entre as telas, com a função <kbd>Stack.Navigator</kbd>.
2. **Estilização:** Utilizamos <kbd>Native Base</kbd> para os componentes principais como <kbd>Box</kbd>, <kbd>Text</kbd>, <kbd>Button</kbd>, e <kbd>Input</kbd>.
3. **Mock de Dados:** Por enquanto, estamos exibindo dados mockados, que podem ser substituídos por dados reais depois.
4. **Design Responsivo:** Através dos componentes do <kbd>Native Base</kbd>, as telas já são responsivas.