CREATE FUNCTION dbo.fn_CalcularIdade (@cd_pessoa INT)
RETURNS INT
AS
BEGIN
    DECLARE @idade INT
    SELECT @idade = DATEDIFF(YEAR, data_nascimento, GETDATE())
    FROM pessoas
    WHERE cd_pessoa = @cd_pessoa

    RETURN @idade
END