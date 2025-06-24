-- Índice para acelerar filtros por cliente específico e recuperar o produto associado
CREATE INDEX IF NOT EXISTS idx_contratos_cd_cliente
ON contratos (cd_cliente)
INCLUDE (cd_produto);

-- Índice para acelerar filtros por data de manutenção no último semestre
CREATE INDEX IF NOT EXISTS idx_manutencoes_data_manutencao
ON manutencoes (data_manutencao)
INCLUDE (cd_produto);

-- Índice para acelerar joins entre produtos e modelos
CREATE INDEX IF NOT EXISTS idx_produtos_cd_produto
ON produtos (cd_produto)
INCLUDE (cd_modelo);

-- Índice para acelerar agrupamentos por nome do modelo
CREATE INDEX IF NOT EXISTS idx_modelos_cd_modelo
ON modelos (cd_modelo)
INCLUDE (nome_modelo);
