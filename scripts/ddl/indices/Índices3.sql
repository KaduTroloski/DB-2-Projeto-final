-- Índice para acelerar filtros por cliente específico e recuperar o produto associado
CREATE INDEX idx_contratos_cd_cliente
ON contratos (cd_cliente)
INCLUDE (cd_produto);

-- Índice para acelerar filtros por data de manutenção no último semestre
CREATE INDEX idx_manutencoes_data_manutencao
ON manutencoes (data_manutencao)
INCLUDE (cd_produto);

-- Índice para acelerar joins entre produtos e modelos
CREATE INDEX idx_produtos_cd_produto
ON produtos (cd_produto)
INCLUDE (cd_modelo);

-- Índice para acelerar agrupamentos por nome do modelo
CREATE INDEX  idx_nome_modelos
ON modelos (nome_modelo)
