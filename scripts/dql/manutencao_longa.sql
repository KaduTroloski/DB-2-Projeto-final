USE Projeto;
GO

WITH manutencoes_tecnicos_hp AS (
    SELECT 
        p.nome_pessoa AS nome_tecnico
    FROM manutencoes m
    INNER JOIN funcionarios f ON m.cd_tecnico = f.cd_funcionario
    INNER JOIN pessoas p ON f.cd_pessoa = p.cd_pessoa
    INNER JOIN produtos pr ON m.cd_produto = pr.cd_produto
    INNER JOIN modelos mo ON pr.cd_modelo = mo.cd_modelo
    INNER JOIN marcas ma ON mo.cd_marca = ma.cd_marca
    WHERE f.cargo = 'TÉCNICO'
      AND ma.nome_marca = 'HP'
)

, total_por_tecnico AS (
    SELECT 
        nome_tecnico,
        COUNT(*) AS total_manutencoes
    FROM manutencoes_tecnicos_hp
    GROUP BY nome_tecnico
)

SELECT 
    nome_tecnico,
    total_manutencoes
FROM total_por_tecnico
ORDER BY total_manutencoes DESC;