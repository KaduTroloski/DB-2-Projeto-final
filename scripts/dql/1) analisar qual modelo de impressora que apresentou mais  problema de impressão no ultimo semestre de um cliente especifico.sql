SELECT mo.nome_modelo, COUNT(*) AS total_problemas
FROM contratos c
JOIN produtos p ON c.cd_produto = p.cd_produto
JOIN manutencoes m ON m.cd_produto = p.cd_produto
JOIN modelos mo ON p.cd_modelo = mo.cd_modelo
WHERE c.cd_cliente = 3
  AND m.data_manutencao >= CURRENT_DATE - 6 MONTHS
GROUP BY mo.nome_modelo
ORDER BY total_problemas DESC
FETCH FIRST 1 ROW ONLY;
