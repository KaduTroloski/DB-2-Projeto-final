SELECT
  p.cd_produto,
  pes_cliente.cidade,
  pes_tecnico.nome_pessoa AS nome_tecnico,
  m.data_manutencao
FROM manutencoes m
JOIN produtos p ON m.cd_produto = p.cd_produto
JOIN contratos c ON p.cd_produto = c.cd_produto
JOIN pessoas pes_cliente ON c.cd_cliente = pes_cliente.cd_pessoa
JOIN funcionarios f_tecnico ON m.cd_tecnico = f_tecnico.cd_funcionario
JOIN pessoas pes_tecnico ON f_tecnico.cd_pessoa = pes_tecnico.cd_pessoa
WHERE m.data_manutencao < CURRENT_DATE - INTERVAL '2 months'
  AND pes_cliente.cidade = 'São Paulo';