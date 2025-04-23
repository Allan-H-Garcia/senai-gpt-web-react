# Senai GPT React


1. Verifique a versão do node, na sua maquina com o seguinte comando no prompt de comando:
node --version

2. Caso necessario atualize o node, baixando o arquivo no site Nodejs
   
3. Entre na pasta do projeto e abra o CMD e insira o comando:
npm create vite@latest senai-gpt-web-react -- --template react

4. Atualize as blibiotecas do node dentro do VSCode, insira no terminal o seguinte comando:(isso é necessario porque nao sobe os arquivos no git, entao precisa fazer toda vez)
npm install

5. use o comando: npm run dev
para executar o codigo

# como organizar as informações no codigo ( iniciando um novo projeto )

linkar pagina no "App.jsx"
![image](https://github.com/user-attachments/assets/f6be3cac-489a-4cab-b846-12f80016f483)

linkar "global.css" e "App.jsx" no  *"Main.jsx"*
![image](https://github.com/user-attachments/assets/9f889fa5-137a-4b73-a207-3baf99fdeb4d)

caso já tenha feito o codigo fora do react importe ele para o arquivo final ( arquivo com react ), na pastinha pages - uma pasta para cada pagina com seus respectivos codigos - não esqueca de linkar os codigos

# Criando uma pagina de login

vamos criar uma função onde ira constar os dados a serem enviados para o servidor e o .hmtl

esse é o codigo para a variavel de login e password
![image](https://github.com/user-attachments/assets/0db6439a-4131-4dfa-b82f-e0eee6d8b875)
* o useState está assim:
   useState("") - para não constar indefinido

para o botão funcionar, vamos criar uma variavel com o async para o envio de dados para o backend
![image](https://github.com/user-attachments/assets/f5b645dd-9b8e-4002-ad7e-cc6c3257fe7d)

o que significa essa imagem?
 o codigo leva as informaçoes para o back e aguarda resposta, o metodo post funciona para enviar as informações, o boy stringfy vai transformar as informações em string para .json

Vendo se rodou
![image](https://github.com/user-attachments/assets/8b7b85b7-6634-4f34-bbf9-6cabcc3895bd)

o primeiro if refere-se a caso de certo a operaçao
onde ele armazena o token da seção para facilitar o acesso do usuario e direciona a pagina para a tela de chat
a partir do else refere-se a caso a operação de errado onde o 401 refere-se a credenciais incorretas
e




