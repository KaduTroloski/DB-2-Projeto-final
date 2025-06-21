
IF NOT EXISTS(SELECT name FROM sys.databases WHERE name = 'Projeto')
BEGIN
    CREATE DATABASE Projeto;
END;
GO

USE Projeto;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'pessoas')
BEGIN
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
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'fornecedores')
BEGIN
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
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'marcas')
BEGIN
CREATE TABLE marcas
(
    cd_marca   INT PRIMARY KEY NOT NULL,
    nome_marca VARCHAR(50)     NOT NULL
);
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'status')
BEGIN
CREATE TABLE status
(
    cd_status   INT PRIMARY KEY NOT NULL,
    nome_status VARCHAR(20)     NOT NULL
);
END;
GO


IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'cargos')
BEGIN
CREATE TABLE cargos
(
    cd_cargo   INT PRIMARY KEY NOT NULL,
    nome_cargo VARCHAR(20)     NOT NULL
);
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'log_pessoa')
BEGIN
CREATE TABLE log_pessoa
(
    cd_log    INT PRIMARY KEY NOT NULL,
    usuario   VARCHAR(100),
    acao      CHAR(1),
    descricao VARCHAR(255),
    data_hora DATETIME        NOT NULL
);
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'modelo')
BEGIN
CREATE TABLE modelos
(
    cd_modelo   INT PRIMARY KEY NOT NULL,
    nome_modelo VARCHAR(50),
    ano_modelo  SMALLINT,
    cd_marca    INT             NOT NULL,
    FOREIGN KEY (cd_marca) REFERENCES marcas (cd_marca)
);
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'funcionarios')
BEGIN
CREATE TABLE funcionarios
(
    cd_funcionario INT PRIMARY KEY NOT NULL,
    cd_pessoa      INT             NOT NULL,
    cd_cargo       INT             NOT NULL,
    FOREIGN KEY (cd_pessoa) REFERENCES pessoas (cd_pessoa),
    FOREIGN KEY (cd_cargo) REFERENCES cargos (cd_cargo)
);
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'produtos')
BEGIN
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
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'manutencoes')
BEGIN
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
END;
GO

IF NOT EXISTS(SELECT 1 FROM sys.tables WHERE name = 'contratos')
BEGIN
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
END;
GO

IF NOT EXISTS(SELECT 1 FROM log_pessoa)
BEGIN
INSERT INTO log_pessoa (cd_log, usuario, acao, descricao, data_hora) VALUES
(1, 'wsales', 'U', 'Aut in tenetur vel eveniet aperiam perferendis.', '2023-10-03 23:18:00'),
(2, 'sabrina81', 'D', 'Harum assumenda dignissimos laudantium deserunt.', '2025-05-31 19:41:04'),
(3, 'amanda30', 'D', 'Aliquid similique reprehenderit quis impedit architecto minus laborum.', '2025-04-06 14:20:58'),
(4, 'oliveiramaria-vitoria', 'D', 'Iste illo nostrum libero consectetur consequuntur excepturi.', '2025-03-02 02:06:29'),
(5, 'enogueira', 'D', 'Rerum laborum cupiditate porro ipsa.', '2023-11-22 01:57:35'),
(6, 'jjesus', 'D', 'Laudantium facilis impedit repellat minus voluptate.', '2024-02-28 18:57:15'),
(7, 'raulgoncalves', 'U', 'Sed vel dignissimos.', '2024-04-13 18:58:24'),
(8, 'martinsdiogo', 'U', 'Ipsum nemo repellendus qui in nesciunt temporibus.', '2025-06-08 07:12:12'),
(9, 'biancada-conceicao', 'U', 'Laborum consequuntur facilis iste.', '2024-12-13 10:29:22'),
(10, 'leticiacostela', 'U', 'Eaque perspiciatis iusto itaque consequuntur.', '2024-01-05 18:04:54');
END;
GO 

IF NOT EXISTS(SELECT 1 FROM pessoas)
BEGIN
INSERT INTO pessoas (cd_pessoa, cpf, nome_pessoa, data_nascimento, sexo, email, telefone, rua, numero, bairro, cidade, estado, cep) VALUES
(1, '60915478366', 'Lara Aragao', '1986-03-02', 'M', 'azevedosofia@bol.com.br', '97190021800', 'Feira de Campos', 823, 'Paraiso', 'Mendes', 'SE', '62120563'),
(2, '20341869589', 'Alexandre Araujo', '1988-09-24', 'M', 'estherfarias@hotmail.com', '93177084246', 'Viela Pinto', 4662, 'Maravilha', 'Monteiro de Pereira', 'MS', '51933647'),
(3, '93185720695', 'Luna Oliveira', '2000-10-12', 'M', 'araujoluiz-henrique@da.net', '92185003006', 'Via de Costa', 2743, 'Vila Tirol', 'Azevedo da Prata', 'PI', '68610003'),
(4, '69257103803', 'Maria Fernanda Farias', '1985-08-25', 'M', 'pereirakaique@bol.com.br', '09004929926', 'Trecho Fogaca', 1664, 'Leticia', 'Fernandes de Fogaca', 'PI', '72515888'),
(5, '30168795221', 'Enzo Novaes', '1968-05-28', 'F', 'fogacabernardo@melo.com', '95159501200', 'Residencial Bryan Cunha', 6639, 'Lagoa', 'Jesus', 'BA', '70023998'),
(6, '79251360812', 'Luiz Miguel Freitas', '1990-03-05', 'M', 'natalianovaes@ramos.br', '93180072713', 'Estacao Rodrigo Rezende', 5219, 'Vila Pilar', 'Souza de Dias', 'ES', '68240978'),
(7, '58723941600', 'Pedro Henrique da Mata', '1981-07-18', 'M', 'viananicolas@uol.com.br', '08002043391', 'Residencial Carolina Martins', 9210, 'Joao Paulo Ii', 'Alves', 'RN', '80136260'),
(8, '75024618920', 'Arthur Almeida', '1979-02-26', 'M', 'fmoura@teixeira.br', '91184993636', 'Vila da Cunha', 3448, 'Fazendinha', 'Oliveira', 'MG', '33631780'),
(9, '57069218303', 'Vitor Rodrigues', '2005-11-24', 'M', 'limahelena@uol.com.br', '98473344299', 'Vereda de da Mata', 5207, 'Monsenhor Messias', 'Monteiro Verde', 'SP', '98470041'),
(10, '26513789419', 'Catarina Lima', '1974-11-30', 'F', 'isabella01@correia.br', '98175378992', 'Distrito Catarina Costela', 38, 'Aeroporto', 'Carvalho de Silva', 'AC', '44208184'),
(11, '36471209878', 'Esther Moura', '1986-05-29', 'F', 'nfarias@hotmail.com', '96197036745', 'Jardim Moura', 9416, 'Vila Piratininga', 'Sales', 'MT', '74361443'),
(12, '75042968300', 'Clara Oliveira', '1961-08-25', 'F', 'danielmoreira@da.com', '03004114622', 'Viela Lais Vieira', 2776, 'Itatiaia', 'Caldeira', 'RN', '38947310'),
(13, '62415907316', 'Sarah Rocha', '1987-12-13', 'F', 'lopesbianca@correia.br', '09003656872', 'Estacao Rodrigues', 1619, 'Sport Club', 'Nascimento da Praia', 'AC', '22814652'),
(14, '51490738223', 'Nicole Moura', '1989-03-24', 'M', 'mvieira@bol.com.br', '93143077223', 'Trecho Campos', 602, 'Vila Betania', 'Moura', 'PR', '31591457'),
(15, '30916875466', 'Rodrigo Sales', '1977-11-14', 'F', 'davi-lucasfernandes@gmail.com', '95136605202', 'Praia Esther Fogaca', 8880, 'Olhos Dagua', 'Azevedo de Minas', 'SE', '07984467'),
(16, '95842673029', 'Sarah Araujo', '1980-09-09', 'M', 'sabrinacavalcanti@hotmail.com', '94174217172', 'Estrada Peixoto', 5428, 'Apolonia', 'Nascimento do Amparo', 'RS', '60448355'),
(17, '09152376443', 'Yasmin Porto', '1973-06-11', 'F', 'gabrielamonteiro@duarte.org', '97155683946', 'Largo de Duarte', 6703, 'Vila Antena Montanhes', 'Vieira', 'SC', '22837013'),
(18, '50982764111', 'Antonio Teixeira', '1975-10-18', 'M', 'wsales@nunes.br', '92112653228', 'Praia Evelyn da Conceicao', 2377, 'Cdi Jatoba', 'da Rosa das Flores', 'SC', '76750626'),
(19, '42305687117', 'Sr. Vitor Hugo Rezende', '2000-12-09', 'F', 'clima@uol.com.br', '95183464005', 'Vereda Yuri Duarte', 7486, 'Conjunto Santa Maria', 'Peixoto de Minas', 'GO', '66130546'),
(20, '89714306566', 'Maysa Jesus', '1967-12-01', 'M', 'enzo22@sales.com', '03008550524', 'Setor de Barros', 6642, 'Santa Maria', 'Araujo', 'RS', '06662529');
END;
GO

IF NOT EXISTS(SELECT 1 FROM cargos)
BEGIN
INSERT INTO cargos (cd_cargo, nome_cargo) VALUES
(1, 'Tecnico'),
(2, 'Vendedor');
END;
GO

IF NOT EXISTS(SELECT 1 FROM funcionarios)
BEGIN
INSERT INTO funcionarios (cd_funcionario, cd_pessoa, cd_cargo) VALUES
(1, 6, 2),
(2, 19, 2),
(3, 4, 2),
(4, 14, 1),
(5, 16, 1),
(6, 11, 1),
(7, 5, 1),
(8, 2, 2),
(9, 5, 1),
(10, 6, 1);
END;
GO

IF NOT EXISTS(SELECT 1 FROM fornecedores)
BEGIN
INSERT INTO fornecedores (cd_fornecedor, razao_social, cnpj, telefone, rua, numero, bairro, cidade, estado, cep) VALUES
(1, 'Cardoso', '09617432000110', '61992802904', 'Trecho Benicio Azevedo', 6399, 'Vila Cloris', 'Monteiro de Goias', 'TO', '82461242'),
(2, 'da Mota S.A.', '64109328000123', '84997860057', 'Feira Francisco da Mata', 1258, 'Santa Ines', 'da Conceicao', 'RS', '65896731'),
(3, 'Moura e Filhos', '70143682000177', '31999703732', 'Morro Cardoso', 8096, 'Vila Antena Montanhes', 'Mendes da Praia', 'TO', '31128100'),
(4, 'Silva da Mota - ME', '96487502000168', '84994371525', 'Aeroporto Rezende', 5341, 'Sport Club', 'Porto de Pires', 'BA', '20560194'),
(5, 'Moreira', '06173925000110', '84994701706', 'Lagoa da Luz', 8627, 'Havai', 'Martins da Serra', 'RR', '04472747'),
(6, 'Ferreira', '17935286000108', '41994840387', 'Parque Pinto', 9719, 'Vila Independencia 2a Secao', 'Almeida', 'SP', '02766947'),
(7, 'Pinto Lima S/A', '39745612000149', '84999391218', 'Aeroporto Samuel Nunes', 9333, 'Lorena', 'da Rocha do Oeste', 'SE', '23945019'),
(8, 'da Rosa Martins e Filhos', '98256374000177', '61992017686', 'Praia Cavalcanti', 2416, 'Saudade', 'Pinto Alegre', 'PE', '67218866'),
(9, 'Jesus', '84725031000108', '71999319948', 'Favela de Cardoso', 5208, 'Embauas', 'Dias da Mata', 'BA', '27620364'),
(10, 'Peixoto', '83742510000161', '21997307214', 'Feira Maite da Rosa', 200, 'Sao Sebastiao', 'da Mota', 'MG', '83013144'),
(11, 'Rezende S/A', '36279108000102', '71990443738', 'Ladeira Nascimento', 6074, 'Vila Ecologica', 'Silva', 'RJ', '79716607'),
(12, 'Cardoso da Conceicao - EI', '91256084000184', '84995337478', 'Vereda de Rocha', 2215, 'Vila Nova Cachoeirinha 3a Secao', 'Araujo Grande', 'RJ', '99392629'),
(13, 'Carvalho Pereira S.A.', '67431802000127', '51999161657', 'Trevo Martins', 8581, 'Conjunto Taquaril', 'da Mota de Lima', 'ES', '73943660'),
(14, 'Rocha', '70953628000197', '21996249710', 'Trecho Caue Monteiro', 9732, 'Vila Sao Francisco', 'Silva', 'RR', '24729668'),
(15, 'Oliveira Sales - EI', '86753149000167', '41996341648', 'Condominio Catarina da Cruz', 9808, 'Vila Nova Dos Milionarios', 'Moura Paulista', 'AP', '35605771'),
(16, 'Azevedo', '13472609000105', '48997640215', 'Parque Dias', 8976, 'Pilar', 'da Cruz', 'SC', '80095012'),
(17, 'Cunha S.A.', '26973014000185', '21998657982', 'Campo Julia Pinto', 4405, 'Inconfidencia', 'Rocha', 'RJ', '03303915'),
(18, 'Duarte da Costa - ME', '52048739000177', '41995475024', 'Viela Gomes', 6945, 'Acaiaca', 'Costa Grande', 'RJ', '34712215'),
(19, 'Cunha Aragao e Filhos', '59180672000179', '51998927096', 'Favela de Barros', 1682, 'Monsenhor Messias', 'Freitas', 'MA', '00467081'),
(20, 'Viana e Filhos', '07695432000103', '81990170275', 'Area Sophia Azevedo', 1142, 'Lindeia', 'Mendes', 'SE', '21044883');
END;
GO

IF NOT EXISTS(SELECT 1 FROM marcas)
BEGIN
INSERT INTO marcas (cd_marca, nome_marca) VALUES
(1, 'Samsung'),
(2, 'Apple'),
(3, 'Dell'),
(4, 'Canon'),
(5, 'HP'),
(6, 'Sony'),
(7, 'LG'),
(8, 'Philips'),
(9, 'Panasonic'),
(10, 'Asus');
END;
GO

IF NOT EXISTS(SELECT 1 FROM modelos)
BEGIN
INSERT INTO modelos (cd_modelo, nome_modelo, ano_modelo, cd_marca) VALUES
(1, 'Galaxy S24', 2015, 1),
(2, 'Latitude 5000 Series', 2024, 3),
(3, 'PowerEdge R660', 2021, 3),
(4, 'MacBook Air M2', 2022, 2),
(5, 'iPhone 15 Pro', 2021, 2),
(6, 'Sony Bravia XR A80L', 2024, 6),
(7, 'PlayStation 5', 2020, 6),
(8, 'LG Gram 14', 2023, 7),
(9, 'LG OLED evo C3', 2023, 7),
(10, 'HP Envy Photo 7855', 2019, 5),
(11, 'HP Spectre x360', 2023, 5),
(12, 'Hue Smart Bulb Starter Kit', 2021, 8),
(13, 'OLED807', 2023, 8),
(14, 'SoundSlayer', 2022, 9),
(15, 'Lumix GH6', 2022, 9),
(16, 'Zenbook 14 OLED', 2023, 10),
(17, 'TUF Gaming VG28UQL1A', 2022, 10),
(18, 'Canon ImageClass MF743Cdw', 2022,4),
(19, 'Canon B2 sheetfed inkjet press', 2024,4),
(20, 'Impressora Samsung M3325ND', 2019, 1);
END;
GO

IF NOT EXISTS(SELECT 1 FROM status)
BEGIN
INSERT INTO status (cd_status, nome_status) VALUES
(1, 'Em manutencao'),
(2, 'No estoque'),
(3, 'Alocada'),
(4, 'Desativada');
END;
GO

IF NOT EXISTS(SELECT 1 FROM produtos)
BEGIN
INSERT INTO produtos (cd_produto, cd_status, cd_fornecedor, cd_modelo) VALUES
(1, 1, 10, 1),
(2, 4, 5, 7),
(3, 2, 17, 10),
(4, 2, 11, 2),
(5, 1, 9, 6),
(6, 4, 17, 9),
(7, 4, 19, 2),
(8, 3, 12, 6),
(9, 3, 9, 4),
(10, 3, 18, 1);
END;
GO

IF NOT EXISTS(SELECT 1 FROM contratos)
BEGIN
INSERT INTO contratos (cd_contrato, data_inicio, data_fim, data_vigencia, valor_contrato, cd_cliente, cd_produto, cd_vendedor) VALUES
(1, '2025-11-21', '2026-04-08', '2025-12-14', 8862.81, 18, 9, 2),
(2, '2025-09-13', '2026-04-13', '2025-09-15', 32936.34, 9, 8, 4),
(3, '2025-02-14', '2025-09-28', '2025-03-03', 38851.92, 13, 4, 5),
(4, '2025-06-02', '2026-02-26', '2025-06-13', 14189.52, 16, 3, 1),
(5, '2023-01-24', '2023-03-21', '2023-02-15', 4142.4, 12, 8, 8),
(6, '2025-11-20', '2026-08-25', '2025-11-28', 9108.68, 15, 10, 10),
(7, '2025-02-26', '2025-12-18', '2025-03-15', 47228.85, 13, 9, 2),
(8, '2025-11-24', '2026-08-21', '2025-11-29', 19726.04, 2, 8, 7),
(9, '2024-08-09', '2025-07-31', '2024-09-08', 12666.85, 13, 2, 10),
(10, '2025-12-31', '2026-11-16', '2026-01-23', 2681.12, 10, 4, 5),
(11, '2025-06-06', '2025-08-11', '2025-06-22', 40262.13, 8, 10, 2),
(12, '2025-06-08', '2025-08-09', '2025-06-22', 30474.38, 3, 8, 2),
(13, '2023-02-27', '2023-09-29', '2023-03-07', 28233.72, 18, 8, 8),
(14, '2024-12-04', '2025-03-13', '2024-12-23', 28850.31, 18, 7, 10),
(15, '2025-11-29', '2026-03-08', '2025-12-03', 14035.23, 6, 5, 7),
(16, '2023-10-06', '2023-12-28', '2023-10-17', 38277.38, 9, 8, 1),
(17, '2025-12-13', '2026-06-27', '2025-12-21', 19359.52, 18, 5, 10),
(18, '2023-11-09', '2024-06-30', '2023-12-07', 9510.82, 8, 6, 7),
(19, '2023-03-06', '2023-10-19', '2023-03-21', 11582.14, 8, 9, 10),
(20, '2023-06-22', '2023-08-24', '2023-07-03', 12109.24, 14, 3, 3);
END;
GO

IF NOT EXISTS(SELECT 1 FROM manutencoes)
BEGIN
INSERT INTO manutencoes (cd_manutencao, cd_tecnico, cd_produto, data_manutencao, descricao) VALUES
(1, 10, 10, '2025-03-04', 'Problema no funcionamento geral.'),
(2, 7, 5, '2025-03-07', 'Verificacao de ruido incomum.'),
(3, 9, 5, '2025-03-10', 'Ajuste de componentes internos.'),
(4, 8, 6, '2025-03-13', 'Reparo de falha intermitente.'),
(5, 4, 4, '2025-03-16', 'Substituicao de peca danificada.'),
(6, 7, 1, '2025-03-19', 'Limpeza e lubrificacao.'),
(7, 2, 7, '2025-03-22', 'Calibracao de sensores.'),
(8, 4, 6, '2025-03-25', 'Otimizacao de desempenho.'),
(9, 10, 10, '2025-03-28', 'Diagnostico de sobrecarga.'),
(10, 5, 6, '2025-03-31', 'Reconfiguracao do sistema.'),
(11, 9, 8, '2025-04-03', 'Correcao de erro de software.'),
(12, 3, 5, '2025-04-06', 'Inspecao de seguranca.'),
(13, 10, 6, '2025-04-09', 'Atualizacao de firmware.'),
(14, 10, 3, '2025-04-12', 'Conserto de circuito eletrico.'),
(15, 5, 2, '2025-04-15', 'Remocao de obstrucao.'),
(16, 8, 6, '2025-04-18', 'Verificacao de vazamento.'),
(17, 3, 8, '2025-04-21', 'Manutencao preventiva.'),
(18, 10, 4, '2025-04-24', 'Ajuste de tensao.'),
(19, 4, 2, '2025-04-27', 'Troca de filtro.'),
(20, 4, 1, '2025-04-30', 'Teste de funcionalidade total.');
END;
GO



