CREATE TRIGGER trg_log_clientes
AFTER INSERT OR UPDATE OR DELETE ON clientes
REFERENCING OLD AS OLD_ROW NEW AS NEW_ROW
FOR EACH ROW
BEGIN ATOMIC
  DECLARE v_acao INT;
  DECLARE v_funcionario INT;

  SET v_funcionario = 1;

  IF (OLD_ROW.cd_cliente IS NULL) THEN
    SET v_acao = 1; -- INSERT

  ELSEIF (NEW_ROW.cd_cliente IS NULL) THEN
    SET v_acao = 3; -- DELETE

  ELSE
    SET v_acao = 2; -- UPDATE
  END IF;


  INSERT INTO log (cd_funcionario, acao, data_hora)
  VALUES (v_funcionario, v_acao, CURRENT_TIMESTAMP);
END;
