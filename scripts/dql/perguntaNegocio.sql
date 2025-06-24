--- Analisar a média de contratos por funcionário vendedor para clientes de uma cidade específica no ano de 2024.

with vendedor_cliente as (
	select cd_contrato from contratos as c
	INNER JOIN funcionarios as f on c.cd_vendedor = f.cd_funcionario
	INNER JOIN pessoas as p on c.cd_cliente = p.cd_pessoa
	WHERE p.cidade = 'Manau' AND c.data_inicio BETWEEN '2024-01-01' AND '2024-12-31'
	GROUP BY cd_contrato
) select AVG(cd_contrato) as Media from contratos
where contratos.cd_contrato IN (Select cd_contrato from vendedor_cliente)

----- cabarito
Nascimento da Praia: 9 de media

Oliveira: 19 de media

da Rosa das Flores: 14 de media