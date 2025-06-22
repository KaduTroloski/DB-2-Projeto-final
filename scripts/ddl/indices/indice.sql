-- Tabela pessoas
CREATE INDEX idx_pessoas_estado
    ON pessoas (estado);
-- Para usar o indice na consulta WHERE estado = '...'.

-- Tabela contratos
CREATE INDEX idx_contratos_data_inicio
    ON contratos (data_inicio, cd_cliente)
    INCLUDE (valor_contrato);
-- Para usar o indice na consulta WHERE data_inicio =  = '...';
-- E no JOIN com a tabela clientes.
-- Include no valor_contrato para tirar a media sem precisar de lookup.
