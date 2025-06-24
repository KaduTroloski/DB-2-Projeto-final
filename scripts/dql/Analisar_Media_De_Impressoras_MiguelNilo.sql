CREATE NONCLUSTERED INDEX idx_data_inicio_produto
ON contratos (data_inicio)
INCLUDE (cd_produto);

-- Define a data de corte (últimos 3 meses) -- 
WITH ultimos_contratos AS (
    SELECT *
    FROM contratos
    WHERE data_inicio >= DATEADD(MONTH, -3, GETDATE())
),

-- Junta com produtos e modelos para identificar impressoras --
impressoras_alugadas AS (
    SELECT 
        uc.cd_cliente,
        p.cd_produto
    FROM ultimos_contratos uc
    JOIN produtos p ON uc.cd_produto = p.cd_produto
    JOIN modelos m ON p.cd_modelo = m.cd_modelo
    WHERE m.nome_modelo LIKE '%impressora%'
),

-- Conta o total de impressoras por cliente --
total_por_cliente AS (
    SELECT 
        cd_cliente,
        COUNT(cd_produto) AS total_impressoras
    FROM impressoras_alugadas
    GROUP BY cd_cliente
)

-- Resultado final: média de impressoras alugadas por cliente --
SELECT 
    cd_cliente,
    total_impressoras / 3.0 AS media_mensal_alugada
FROM total_por_cliente
WHERE cd_cliente = 3;
