# Boas vindas ao repositório do projeto TryBeer!

<h3>O Trybeer é uma aplicação web com o objetivo de conectar vendedores de bebidas
com clientes que buscam comprar do conforto de sua casa! O Delivery de cerveja
que as pessoas buscam!</h3>

### Instalando as dependências

O projeto está dividido em três partes: front-end, back-end e a raiz que conecta ambos.
Para instalar todas as dependências você pode fazer pelo seguinte comando na raiz do projeto:

```
npm install
```
ou
```
 yarn install
```
__________________________________________________________________________________
<p>Ao entrar no front-end do projeto, após inicializar com um "npm start", por exemplo, você será estará na página inicial da aplicação:</p>

<img src="https://i.ibb.co/VHwXG6L/home.png" alt="Imagem da página inicial do projeto Trybeer (web)" />


<p>Logo em seguida, você pode se cadastar e fazer login na aplicação, e navegar como quiser!</p>

### Página de produtos

<img src="https://i.ibb.co/84BhgPt/produtos.png" alt="Página de produtos da aplicação" />

<h1>Pontos de atenção</h1>

- A aplicação utiliza o MYSQL como banco de dados, sendo necessário a criação do banco com o nome "Trybeer" para que seja utilizado na aplicação.
- É necessário que seja feita a configuração das variáveis de ambiente para que o banco de dados funcione perfeitamente.

<h1>Como configurar o banco de dados MYSQL (back-end)</h1>

Haverá um arquivo chamado script.sql onde já contém a criação de do banco e alguns inserts.

Para rodar o arquivo basta rodar o comando:

``` mysql -u root -p ```

Isso fará com que abra o terminal do MySQL se abra. Depois, basta executar o comando:

``` source pasta_do_projeto/script.sql ```

Assim já irá criar o banco e terá alguns dados inseridos. É essencial seguir esses passos!

Haverá um arquivo no caminho: sd-03-trybeer-4/cypress/plugins/index.js. Neste arquivo, na linha 17, Haverá a seguinte comando:
```
const connection = my.createConnection({host: process.env.HOSTNAME, user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD});
``` 
Você irá precisar configurar as variáveis globais do MySQL. Você pode usar esse Conteúdo de variáveis de ambiente com NodeJS como referência.
As variáveis são:
- HOSTNAME
- MYSQL_USER
- MYSQL_PASSWORD

############################### DIVIRTA-SE ######################################




