CREATE FUNCTION dbo.fn_ProdutosPorFornecedor (@cd_fornecedor INT)
RETURNS TABLE
AS
RETURN
(
    SELECT p.cd_produto, m.nome_modelo, s.nome_status
    FROM produtos p
    INNER JOIN modelos m ON p.cd_modelo = m.cd_modelo
    INNER JOIN status s ON p.cd_status = s.cd_status
    WHERE p.cd_fornecedor = @cd_fornecedor
)