
## Projeto Sistema de aluguel de equipamentos - GRUPO D

Neste projeto iremos fazer um sistema de aluguel de equipamentos eletronicos.
Este projeto foi desenvolvido com Typescript no back-end e Javascript no front-end, envolvendo um CRUD na tabela de Clientes, o back-end faz a conversão das tabelas do banco de dados para objetos typescript por meio da biblioteca prisma, e no front-end sera ussado a bilbioteca axios para o consumo do back-end.

### Integrantes
Kauan Custodio Propodoski -KaduTroloski<br>
Henrique da Silva Ronzani  -HenriqueRonzani<br>
Leonardo da Silva Joaquim -LeonardoSilvaJoaquim11<br>
Miguel Nilo Rosa -MiguelNilo<br>
Nathan Rocha Gomes  -NathanRochaGomes<br>
Gustavo Pereira Marazzi  -gumarazzi23<br>
Bianca Alves Fernandes -bianca-satc<br>
...

### Modelo Físico
Utilizamos a ferramenta de modelagem de dados [dbdiagram.io](https://dbdiagram.io/) para criação do modelo físico do banco de dados, para posterior exportação dos scripts DDL das tabelas e relacionamentos.<br>
Arquivo fonte: [Modelo Fisico](https://dbdiagram.io/d/DB-2_Modelo_Fisico-68473a6c57d78cbaf6a4ba27).<br>
  
### Dicionário de Dados


### Scripts SQL
Para este projeto foi utilizado o banco de dados [Azure SQL](https://azure.microsoft.com/pt-br/products/azure-sql/database) <br>

Abaixo, segue os scripts SQL separados por tipo:
+ [Tabelas](scripts/ddl/tabelas)
+ [Índices](scripts/ddl/indices)
+ [Gatilhos](scripts/ddl/gatilhos)
+ [Procedimentos armazenados](scripts/ddl/procedimentos-armazenados)
+ [Funções](scripts/ddl/funcoes)
+ [DML](scripts/dml)

### Código Fonte do CRUD
## Front-End:
- Linguagem de Programação Javascript.
- Utilizando Node para a criação do ambiente.
- Framework de Javascript ReactJS
- Ant Design para a tabela dinâmica e estilização.
- Axios para consumo da API do back-end via HTTP.
- React Imask para formatação de campos de entrada.

## Back-End:
- Lingaguem de Programação Typescript.
- Utilizando Node para a criação do ambiente.
- Blibiotecas Prisma.
- Framework Express
- Docker para a inicialização do banco de dados

### Passos para execução do CRUD

[Codigo Fonte](crud/)

#### Back-End
1. Requisitos:
   - Docker instalado
   - Node.js instalado
   - NPM instalado
    
3. Navegue até o diretório do back-end:
`cd ./crud/back-end/`

5. Rode o comando para instalar as dependencias:
`npm install`

6. Atualize o arquivo .env gerado com as informações do banco.

---

#### Front-end
1. Requisitos:
   - Node.js instalado
   - NPM instalado
     
2. Navegue até o diretório do front-end:  
`cd ./crud/front-end/`

4. Instale as dependências do projeto:  
`npm install`

---

#### Inicialização

1. Primero deve concluir os passos de execução do BACK-END e FRONT-END

2. Va para a pasta principal do CRUD:
`cd ..`

3. Execute o comando para instalar as dependencias:
`npm install`

4. Após verificar que todas as dependecia estão instaladas rode o projeto:
`npm run start-all`

5. Após a inicalização abra o front-end pelo navegador, ele estara localizado na seguinte URL:
`localhost:3000`

6. Caso queira testar o CRUD via algum software estilo Postman ou Insomnia o back-end estara localizado na URL:
`localhost:3001`

### Relatório Final
O relatório final está disponível no arquivo [relatorio-final/template1.docx](relatorio/template1.docx).

### Referências

