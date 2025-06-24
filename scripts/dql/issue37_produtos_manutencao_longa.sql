USE Projeto;
GO

WITH produtos_manutencao_longa AS (
    SELECT 
        m.cd_manutencao,
        m.cd_produto,
        m.data_manutencao,
        m.descricao as descricao_manutencao,
        DATEDIFF(MONTH, m.data_manutencao, GETDATE()) as meses_em_manutencao,
        p_tec.nome_pessoa as nome_tecnico,
        p_tec.cd_pessoa as cd_tecnico
    FROM manutencoes m
        INNER JOIN funcionarios f ON m.cd_tecnico = f.cd_funcionario
        INNER JOIN pessoas p_tec ON f.cd_pessoa = p_tec.cd_pessoa
    WHERE DATEDIFF(MONTH, m.data_manutencao, GETDATE()) > 2
),
clientes_por_cidade AS (
    SELECT 
        c.cd_contrato,
        c.cd_produto,
        p_cli.nome_pessoa as nome_cliente,
        p_cli.cidade,
        p_cli.estado,
        m_prod.nome_modelo,
        mar.nome_marca
    FROM contratos c
        INNER JOIN pessoas p_cli ON c.cd_cliente = p_cli.cd_pessoa
        INNER JOIN produtos prod ON c.cd_produto = prod.cd_produto
        INNER JOIN modelos m_prod ON prod.cd_modelo = m_prod.cd_modelo
        INNER JOIN marcas mar ON m_prod.cd_marca = mar.cd_marca
),
manutencoes_detalhadas AS (
    SELECT 
        pml.cd_manutencao,
        pml.cd_produto,
        pml.data_manutencao,
        pml.descricao_manutencao,
        pml.meses_em_manutencao,
        pml.nome_tecnico,
        cpc.nome_cliente,
        cpc.cidade,
        cpc.estado,
        cpc.nome_modelo,
        cpc.nome_marca,
        CONCAT(cpc.nome_marca, ' ', cpc.nome_modelo) as produto_completo
    FROM produtos_manutencao_longa pml
        INNER JOIN clientes_por_cidade cpc ON pml.cd_produto = cpc.cd_produto
)
SELECT 
    cidade,
    estado,
    nome_tecnico,
    COUNT(*) as total_produtos_manutencao,
    STRING_AGG(produto_completo, ', ') as produtos_em_manutencao,
    AVG(meses_em_manutencao) as media_meses_manutencao,
    MAX(meses_em_manutencao) as maior_tempo_manutencao,
    STRING_AGG(CONCAT(nome_cliente, ' (', meses_em_manutencao, ' meses)'), '; ') as detalhes_clientes
FROM manutencoes_detalhadas
GROUP BY cidade, estado, nome_tecnico
ORDER BY cidade, nome_tecnico, total_produtos_manutencao DESC;