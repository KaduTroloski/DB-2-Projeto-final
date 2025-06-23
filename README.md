
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
2. Navegue até o diretório do back-end:
`cd ./crud/back-end/`
3. Rode o comando para subir o container do banco de dados:
`docker compose up -d`


---

#### Front-end
1. Requisitos:
   - Node.js instalado
   - NPM istalado
2. Navegue até o diretório do front-end:  
`cd ./crud/front-end/`
3. Instale as dependências do projeto:  
`npm install`
4. Execute o projeto:  
`npm run dev`
5. Acesse o front-end no navegador:  
O vite inicilizará o servidor de desenvolvimento e fornecerá um link, geralmente `http://localhost:5173/`.

### Relatório Final
O relatório final está disponível no arquivo [relatorio-final/template1.docx](relatorio/template1.docx).

### Referências

