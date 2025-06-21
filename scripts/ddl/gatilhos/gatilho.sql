IF OBJECT_ID('trg_log_alteracao_pessoas', 'TR') IS NOT NULL
    DROP TRIGGER trg_log_alteracao_pessoas;
GO

CREATE TRIGGER trg_log_alteracao_pessoas
ON pessoas
AFTER INSERT, UPDATE, DELETE
AS 
BEGIN
 SET NOCOUNT ON;    

    DECLARE @acao VARCHAR(10); 
    DECLARE @usuario VARCHAR(100)  = SYSTEM_USER;
    DECLARE @data_hora DATETIME = GETDATE()

    IF EXISTS(SELECT * FROM inserted) AND NOT EXISTS(SELECT * FROM deleted)
        SET @acao = 'INSERT'
    ELSE IF EXISTS(SELECT * FROM deleted) AND NOT EXISTS(SELECT * FROM inserted)
        SET @acao = 'DELETE'
    ELSE IF EXISTS(SELECT * FROM inserted) AND EXISTS(SELECT * FROM deleted)
        SET @acao = 'UPDATE';

    IF @acao in ('INSERT', 'UPDATE')
    BEGIN
        INSERT INTO log_clientes (acao, usuario, data_hora, id_pessoa, nome, email)
        SELECT 
            @acao, 
            @usuario, 
            @data_hora, 
            (SELECT * FROM inserted FOR JSON AUTO)
    END
    ELSE
    BEGIN
        INSERT INTO log_clientes (acao, usuario, data_hora, id_pessoa, nome, email)
        SELECT 
            @acao, 
            @usuario, 
            @data_hora, 
            (SELECT * FROM deleted FOR JSON AUTO)
    END
END
GO