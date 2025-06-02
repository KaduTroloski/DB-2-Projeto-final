
CREATE TABLE clientes (
    cd_cliente INT AUTO_INCREMENT PRIMARY KEY,
    cpf_cnpj VARCHAR(14) NOT NULL UNIQUE,
    nome_cliente VARCHAR(100),
    endereco VARCHAR(200)
);


CREATE TABLE funcionarios (
    cd_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    email VARCHAR(100) UNIQUE
);


CREATE TABLE fornecedores (
    cd_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100)
);


CREATE TABLE impressoras (
    cd_impressora INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100),
    marca VARCHAR(50),
    status VARCHAR(20)
);

CREATE INDEX idx_modelo_marca ON impressoras(modelo, marca);


CREATE TABLE aluguel (
    cd_aluguel INT AUTO_INCREMENT PRIMARY KEY,
    cd_cliente INT NOT NULL,
    cd_impressora INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE,
    FOREIGN KEY (cd_cliente) REFERENCES clientes(cd_cliente),
    FOREIGN KEY (cd_impressora) REFERENCES impressoras(cd_impressora)
);

CREATE INDEX idx_cliente_imp ON aluguel(cd_cliente, cd_impressora);


CREATE TABLE manutencao (
    cd_manutencao INT AUTO_INCREMENT PRIMARY KEY,
    cd_impressora INT NOT NULL,
    cd_funcionario INT,
    data_manutencao DATE NOT NULL,
    descricao VARCHAR(200),
    FOREIGN KEY (cd_impressora) REFERENCES impressoras(cd_impressora),
    FOREIGN KEY (cd_funcionario) REFERENCES funcionarios(cd_funcionario)
);

CREATE INDEX idx_imp_data ON manutencao(cd_impressora, data_manutencao);


CREATE TABLE contrato (
    cd_contrato INT AUTO_INCREMENT PRIMARY KEY,
    cd_cliente INT NOT NULL,
    data_assinatura DATE NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (cd_cliente) REFERENCES clientes(cd_cliente)
);

CREATE INDEX idx_cliente_contrato ON contrato(cd_cliente);


CREATE TABLE log (
    cd_log INT AUTO_INCREMENT PRIMARY KEY,
    cd_funcionario INT,
    acao VARCHAR(100),
    data_hora DATETIME NOT NULL,
    FOREIGN KEY (cd_funcionario) REFERENCES funcionarios(cd_funcionario)
);

CREATE INDEX idx_func_data ON log(cd_funcionario, data_hora);
