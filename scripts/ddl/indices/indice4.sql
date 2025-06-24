-- Índice para a coluna nome_marca da tabela marcas
CREATE NONCLUSTERED INDEX IDX_marcas_nome_marca
ON marcas (nome_marca);
GO

-- Índice para a coluna nome_status da tabela status
CREATE NONCLUSTERED INDEX IDX_status_nome_status
ON status (nome_status);
GO
