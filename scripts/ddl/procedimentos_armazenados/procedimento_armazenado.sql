-- PROCEDURE PARA ADICIONAR PESSOAS COM VALIDACOES NECESSARIAS
CREATE PROCEDURE adicionar_pessoa (
    @cpf CHAR(11),
    @nome VARCHAR(100),
    @data_nascimento DATE,
    @sexo CHAR(1),
    @email VARCHAR(35),
    @telefone CHAR(11),
    @rua varchar(100),
    @numero smallint,
    @bairro varchar(50),
    @cidade varchar(50),
    @estado char(2),
    @cep char(8)
)
AS
    BEGIN
        IF @sexo NOT IN ('F', 'M')
            BEGIN
                THROW 50001, 'VALOR PARA SEXO DE PESSOA INVALIDO.', 1;
            END

        INSERT INTO pessoas (cpf, nome_pessoa, data_nascimento, sexo, email, telefone, rua, numero, bairro, cidade, estado, cep)
        VALUES (@cpf, @nome, @data_nascimento, @sexo, @email, @telefone, @rua, @numero, @bairro, @cidade, @estado, @cep);
    END
GO

CREATE PROCEDURE excluir_pessoa (
    @cd_pessoa CHAR(11)
)
AS
    BEGIN
        DECLARE
            @contagem_funcionarios INT,
            @contagem_contratos INT;

        SELECT @contagem_funcionarios = COUNT(cd_funcionario)
        FROM funcionarios
        WHERE cd_pessoa = @cd_pessoa

        IF @contagem_funcionarios > 0
            BEGIN
               THROW 50001, 'PESSOA CADASTRADA COMO FUNCIONARIO. NAO E POSSIVEL EXCLUIR.', 1;
            END

        SELECT @contagem_contratos = COUNT(cd_contrato)
        FROM contratos
        WHERE cd_cliente = @cd_pessoa

        IF @contagem_contratos > 0
        BEGIN
           THROW 50001, 'PESSOA POSSUI UM CONTRATO. NAO E POSSIVEL EXCLUIR.', 1;
        END

        DELETE FROM pessoas
        WHERE cd_pessoa = @cd_pessoa;
    END
GO
