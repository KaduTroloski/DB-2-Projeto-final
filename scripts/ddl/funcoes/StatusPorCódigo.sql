CREATE FUNCTION dbo.fn_StatusProduto (@cd_produto INT)
RETURNS VARCHAR(20)
AS
BEGIN
    DECLARE @status VARCHAR(20)
    SELECT @status = s.nome_status
    FROM produtos p
    INNER JOIN status s ON p.cd_status = s.cd_status
    WHERE p.cd_produto = @cd_produto

    RETURN @status
END