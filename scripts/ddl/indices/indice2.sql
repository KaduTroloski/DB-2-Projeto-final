-- Índice para acelerar filtros por data de manutenção
CREATE INDEX IF NOT EXISTS idx_manutencoes_data_manutencao
ON manutencoes (data_manutencao);

-- Índice para acelerar filtros por cidade do cliente
CREATE INDEX IF NOT EXISTS idx_pessoas_cidade
ON pessoas (cidade);

-- Índice para acelerar joins entre contratos e produtos
CREATE INDEX IF NOT EXISTS idx_contratos_cd_produto
ON contratos (cd_produto);
