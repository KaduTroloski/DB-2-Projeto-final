USE Projeto;
GO

WITH manutencoes_epson_tecnicos AS (
    SELECT 
        f.cd_funcionario,
        p_tec.nome_pessoa AS nome_tecnico,
        COUNT(*) AS total_manutencoes
    FROM manutencoes m
        INNER JOIN funcionarios f ON m.cd_tecnico = f.cd_funcionario
        INNER JOIN pessoas p_tec ON f.cd_pessoa = p_tec.cd_pessoa
        INNER JOIN produtos prod ON m.cd_produto = prod.cd_produto
        INNER JOIN modelos mod ON prod.cd_modelo = mod.cd_modelo
        INNER JOIN marcas mar ON mod.cd_marca = mar.cd_marca
    WHERE 
        f.cargo = 'TÉCNICO'
        AND mar.nome_marca = 'Epson'
    GROUP BY f.cd_funcionario, p_tec.nome_pessoa
)

SELECT TOP 1 
    nome_tecnico,
    total_manutencoes
FROM manutencoes_epson_tecnicos
ORDER BY total_manutencoes DESC;