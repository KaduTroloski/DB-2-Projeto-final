WITH Produtos_Canon_Desativados AS
(
    SELECT p.cd_produto
    FROM produtos p
    INNER JOIN modelos m ON p.cd_modelo = m.cd_modelo
    INNER JOIN marcas ma ON m.cd_marca = ma.cd_marca
    INNER JOIN status s ON p.cd_status = s.cd_status
    WHERE ma.nome_marca = 'CANON'
      AND s.nome_status = 'DESATIVADO'
)
SELECT c.cd_contrato,
       c.data_inicio,
       c.data_fim,
       c.valor_contrato
FROM contratos c
WHERE c.cd_produto IN (SELECT cd_produto FROM Produtos_Canon_Desativados)
  AND YEAR(c.data_inicio) = 2024;
