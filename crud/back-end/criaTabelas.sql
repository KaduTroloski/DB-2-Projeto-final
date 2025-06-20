create database Projeto
GO 
USE Projeto

CREATE TABLE pessoas
(
    cd_pessoa       INT PRIMARY KEY     NOT NULL,
    cpf             CHAR(11) UNIQUE     NOT NULL,
    nome_pessoa     VARCHAR(100) UNIQUE NOT NULL,
    data_nascimento DATE                NOT NULL,
    sexo            CHAR(1)             NOT NULL,
    email           VARCHAR(35)         NOT NULL,
    telefone        CHAR(11)            NOT NULL,
    rua             VARCHAR(100)        NOT NULL,
    numero          SMALLINT            NOT NULL,
    bairro          VARCHAR(50)         NOT NULL,
    cidade          VARCHAR(50)         NOT NULL,
    estado          CHAR(2)             NOT NULL,
    cep             CHAR(8)             NOT NULL
);
GO

CREATE TABLE fornecedores
(
    cd_fornecedor INT PRIMARY KEY    NOT NULL,
    razao_social  VARCHAR(100),
    cnpj          VARCHAR(14) UNIQUE NOT NULL,
    telefone      CHAR(11),
    rua           VARCHAR(100)       NOT NULL,
    numero        SMALLINT           NOT NULL,
    bairro        VARCHAR(50)        NOT NULL,
    cidade        VARCHAR(50)        NOT NULL,
    estado        CHAR(2)            NOT NULL,
    cep           CHAR(8)            NOT NULL
);
GO

CREATE TABLE marcas
(
    cd_marca   INT PRIMARY KEY NOT NULL,
    nome_marca VARCHAR(50)     NOT NULL
);
GO

CREATE TABLE status
(
    cd_status   INT PRIMARY KEY NOT NULL,
    nome_status VARCHAR(20)     NOT NULL
);
GO

CREATE TABLE cargos
(
    cd_cargo   INT PRIMARY KEY NOT NULL,
    nome_cargo VARCHAR(20)     NOT NULL
);
GO

CREATE TABLE log_pessoa
(
    cd_log    INT PRIMARY KEY NOT NULL,
    usuario   VARCHAR(100),
    acao      CHAR(1),
    descricao VARCHAR(255),
    data_hora DATETIME        NOT NULL
);
GO

CREATE TABLE modelos
(
    cd_modelo   INT PRIMARY KEY NOT NULL,
    nome_modelo VARCHAR(50),
    ano_modelo  SMALLINT,
    cd_marca    INT             NOT NULL,
    FOREIGN KEY (cd_marca) REFERENCES marcas (cd_marca)
);
GO

CREATE TABLE funcionarios
(
    cd_funcionario INT PRIMARY KEY NOT NULL,
    cd_pessoa      INT             NOT NULL,
    cd_cargo       INT             NOT NULL,
    FOREIGN KEY (cd_pessoa) REFERENCES pessoas (cd_pessoa),
    FOREIGN KEY (cd_cargo) REFERENCES cargos (cd_cargo)
);
GO

CREATE TABLE produtos
(
    cd_produto    INT PRIMARY KEY NOT NULL,
    cd_status     INT             NOT NULL,
    cd_fornecedor INT             NOT NULL,
    cd_modelo     INT             NOT NULL,
    FOREIGN KEY (cd_status) REFERENCES status (cd_status),
    FOREIGN KEY (cd_fornecedor) REFERENCES fornecedores (cd_fornecedor),
    FOREIGN KEY (cd_modelo) REFERENCES modelos (cd_modelo)
);
GO

CREATE TABLE manutencoes
(
    cd_manutencao   INT PRIMARY KEY NOT NULL,
    cd_tecnico      INT             NOT NULL,
    cd_produto      INT             NOT NULL,
    data_manutencao DATE            NOT NULL,
    descricao       VARCHAR(200),
    FOREIGN KEY (cd_tecnico) REFERENCES funcionarios (cd_funcionario),
    FOREIGN KEY (cd_produto) REFERENCES produtos (cd_produto)
);
GO

CREATE TABLE contratos
(
    cd_contrato    INT PRIMARY KEY NOT NULL,
    data_inicio    DATE            NOT NULL,
    data_fim       DATE,
    data_vigencia  DATE            NOT NULL,
    valor_contrato NUMERIC(10, 2),
    cd_cliente     INT             NOT NULL,
    cd_produto     INT             NOT NULL,
    cd_vendedor    INT             NOT NULL,
    FOREIGN KEY (cd_cliente) REFERENCES pessoas (cd_pessoa),
    FOREIGN KEY (cd_produto) REFERENCES produtos (cd_produto),
    FOREIGN KEY (cd_vendedor) REFERENCES funcionarios (cd_funcionario)
);
GO
