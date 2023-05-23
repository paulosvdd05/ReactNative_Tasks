<h1>Projeto Tasks</h1>
Aplicativo de gerenciamento de tarefas diarias, semanais e mensais para Android e IOS com react-native.
BACK-END:
Para o back-end foi criado uma API para conversar com o front e assim realizar as interações necessárias com o banco. Nele utilizei Express para a criação da API e PostgreSQL como banco de dados. Junto as funções middlewares para realizar consultas e inserções no banco, também utilizei o padrão JWT para trabalhar com a segurança da API, onde com o auxílio da biblioteca bcrypt encriptar as senhas se tornou um processo bem mais simples!
FRONT-END:
Para o front utilezei diversas bibliotecas como React-Navigation para a navegação, Gesture Handler para alguns efeitos visuais, React Native Elements para icones, AsyncStorage para guardar informações do login para o usuario nao ter a necessidade de logar toda vez que abrir o aplicativo, Gravatar para puxar a foto de perfil do email do usuario, e por fim Axios para integrar o back-end desenvolvido anteriormente. Alem das bibliotecas utilizei state para a manipulação dos estados dos componentes.
