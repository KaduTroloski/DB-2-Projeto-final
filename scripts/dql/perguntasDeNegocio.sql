-- Verificar qual modelo de produto foi mais alugado por clientes do estado SC no ano e 2025 e qual seu valor médio de contrato.

WITH contratos_modelos AS (
    SELECT nome_modelo, COUNT(nome_modelo) AS numero_contratos, AVG(valor_contrato) as media_valor_contrato
    FROM contratos c
        INNER JOIN dbo.produtos p1 on p1.cd_produto = c.cd_produto
        INNER JOIN dbo.modelos m on m.cd_modelo = p1.cd_modelo
        INNER JOIN dbo.pessoas p2 on c.cd_cliente = p2.cd_pessoa
    WHERE data_inicio >= '2024-01-01' AND data_inicio < '2025-01-01'
        AND estado = 'SC'
    GROUP BY nome_modelo
),
     modelos_ranking AS (
        SELECT *,
            DENSE_RANK() OVER (ORDER BY numero_contratos DESC) AS ranking
        FROM contratos_modelos
     )
SELECT * FROM modelos_ranking
WHERE RANKING = 1
