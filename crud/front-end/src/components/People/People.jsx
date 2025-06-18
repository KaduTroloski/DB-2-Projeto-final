import Surface from "../Surface/Surface.jsx";
import DataTable from "../DataTable/DataTable.jsx";
import Modal from "../Modal/modal.jsx";
import { useState } from "react";

export default function People() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (record) => {
    setSelectedPerson(record);
    setIsEditing(true);
    setOpenModal(true);
  };

  const handleDelete = (record) => {
    alert(`Deletar ${record.nome_pessoa}`);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPerson(null);
    setIsEditing(false);
  };

  const peopleData = [
    {
      cd_pessoa: 1,
      cpf: "12345678901",
      nome_pessoa: "Ana Clara Souza",
      data_nascimento: "1995-08-14",
      sexo: "F",
      email: "ana.clara@example.com",
      telefone: "11987654321",
      rua: "Rua das Flores",
      numero: 123,
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01001000",
    },
    {
      cd_pessoa: 2,
      cpf: "23456789012",
      nome_pessoa: "Bruno Lima",
      data_nascimento: "1988-03-22",
      sexo: "M",
      email: "bruno.lima@example.com",
      telefone: "21998765432",
      rua: "Av. Brasil",
      numero: 456,
      bairro: "Copacabana",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      cep: "22041001",
    },
    {
      cd_pessoa: 3,
      cpf: "34567890123",
      nome_pessoa: "Carla Mendes",
      data_nascimento: "2000-01-10",
      sexo: "F",
      email: "carla.mendes@example.com",
      telefone: "31987654321",
      rua: "Rua das Palmeiras",
      numero: 789,
      bairro: "Savassi",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30130000",
    },
    {
      cd_pessoa: 4,
      cpf: "45678901234",
      nome_pessoa: "Daniel Rocha",
      data_nascimento: "1992-07-05",
      sexo: "M",
      email: "daniel.rocha@example.com",
      telefone: "41999887766",
      rua: "Rua Curitiba",
      numero: 101,
      bairro: "Centro",
      cidade: "Curitiba",
      estado: "PR",
      cep: "80010000",
    },
    {
      cd_pessoa: 5,
      cpf: "56789012345",
      nome_pessoa: "Elisa Fernandes",
      data_nascimento: "1985-11-30",
      sexo: "F",
      email: "elisa.fernandes@example.com",
      telefone: "51988887777",
      rua: "Av. Bento Gonçalves",
      numero: 234,
      bairro: "Partenon",
      cidade: "Porto Alegre",
      estado: "RS",
      cep: "90650001",
    },
    {
      cd_pessoa: 6,
      cpf: "67890123456",
      nome_pessoa: "Felipe Oliveira",
      data_nascimento: "1997-04-18",
      sexo: "M",
      email: "felipe.oliveira@example.com",
      telefone: "62999887766",
      rua: "Rua 10",
      numero: 321,
      bairro: "Setor Oeste",
      cidade: "Goiânia",
      estado: "GO",
      cep: "74110010",
    },
    {
      cd_pessoa: 7,
      cpf: "78901234567",
      nome_pessoa: "Gabriela Nunes",
      data_nascimento: "1999-09-09",
      sexo: "F",
      email: "gabriela.nunes@example.com",
      telefone: "71987654321",
      rua: "Rua Bahia",
      numero: 654,
      bairro: "Barra",
      cidade: "Salvador",
      estado: "BA",
      cep: "40140140",
    },
    {
      cd_pessoa: 8,
      cpf: "89012345678",
      nome_pessoa: "Henrique Silva",
      data_nascimento: "2001-12-25",
      sexo: "M",
      email: "henrique.silva@example.com",
      telefone: "83988776655",
      rua: "Rua João Pessoa",
      numero: 777,
      bairro: "Centro",
      cidade: "João Pessoa",
      estado: "PB",
      cep: "58013030",
    },
    {
      cd_pessoa: 9,
      cpf: "90123456789",
      nome_pessoa: "Isabela Costa",
      data_nascimento: "1994-06-06",
      sexo: "F",
      email: "isabela.costa@example.com",
      telefone: "85998877665",
      rua: "Av. Beira Mar",
      numero: 888,
      bairro: "Praia de Iracema",
      cidade: "Fortaleza",
      estado: "CE",
      cep: "60060000",
    },
    {
      cd_pessoa: 10,
      cpf: "01234567890",
      nome_pessoa: "João Pedro Almeida",
      data_nascimento: "1980-02-28",
      sexo: "M",
      email: "joao.pedro@example.com",
      telefone: "48999887766",
      rua: "Rua Hercílio Luz",
      numero: 999,
      bairro: "Centro",
      cidade: "Florianópolis",
      estado: "SC",
      cep: "88010000",
    },
  ];

  const columns = [
    { title: "Código", dataIndex: "cd_pessoa", key: "cd_pessoa" },
    { title: "CPF", dataIndex: "cpf", key: "cpf" },
    { title: "Nome", dataIndex: "nome_pessoa", key: "nome_pessoa" },
    {
      title: "Data de Nascimento",
      dataIndex: "data_nascimento",
      key: "data_nascimento",
    },
    { title: "Sexo", dataIndex: "sexo", key: "sexo" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Telefone", dataIndex: "telefone", key: "telefone" },
    { title: "Rua", dataIndex: "rua", key: "rua" },
    { title: "Número", dataIndex: "numero", key: "numero" },
    { title: "Bairro", dataIndex: "bairro", key: "bairro" },
    { title: "Cidade", dataIndex: "cidade", key: "cidade" },
    { title: "Estado", dataIndex: "estado", key: "estado" },
    { title: "CEP", dataIndex: "cep", key: "cep" },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          {" "}
          <button className={"text-light"} onClick={() => handleEdit(record)}>
            Editar
          </button>
          <button className={"text-light"} onClick={() => handleDelete(record)}>
            Deletar
          </button>
        </div>
      ),
    },
  ];

  return (
    <Surface>
      <header className={"flex flex-row justify-between"}>
        <span className={"text-title"}>Dados de Pessoas</span>
        <button
          className={"bg-primary text-light text-button"}
          onClick={() => {
            setSelectedPerson(null);
            setIsEditing(false);
            setOpenModal(true);
          }}
        >
          + Adicionar Pessoa
        </button>
      </header>

      <div>
        <DataTable
          height={600}
          identifier={"cd_pessoa"}
          columns={columns}
          dataSource={peopleData}
        />
      </div>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        personData={selectedPerson}
        isEditing={isEditing}
      >
        {isEditing ? (
          <h2 className="text-xl font-bold mb-4">
            Editar {selectedPerson?.nome_pessoa}
          </h2>
        ) : (
          <h2 className="text-xl font-bold mb-4">Adicionar Nova Pessoa</h2>
        )}

        {isEditing && selectedPerson ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="cd_pessoa">Código:</label>
              <input
                type="text"
                id="cd_pessoa"
                name="cd_pessoa"
                defaultValue={selectedPerson.cd_pessoa}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                defaultValue={selectedPerson.cpf}
              />
            </div>
            <div>
              <label htmlFor="nome_pessoa">Nome:</label>
              <input
                type="text"
                id="nome_pessoa"
                name="nome_pessoa"
                defaultValue={selectedPerson.nome_pessoa}
              />
            </div>
            <div>
              <label
                htmlFor="data_nascimento"
                className="block text-light text-sm font-bold mb-2"
              >
                Data de Nascimento:
              </label>
              <input
                type="date"
                id="data_nascimento"
                name="data_nascimento"
                defaultValue={selectedPerson.data_nascimento}
              />
            </div>
            <div>
              <label htmlFor="sexo">Sexo:</label>
              <select id="sexo" name="sexo" defaultValue={selectedPerson.sexo}>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={selectedPerson.email}
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                defaultValue={selectedPerson.telefone}
              />
            </div>
            <div>
              <label htmlFor="rua">Rua:</label>
              <input
                type="text"
                id="rua"
                name="rua"
                defaultValue={selectedPerson.rua}
              />
            </div>
            <div>
              <label htmlFor="numero">Número:</label>
              <input
                type="number"
                id="numero"
                name="numero"
                defaultValue={selectedPerson.numero}
              />
            </div>
            <div>
              <label htmlFor="bairro">Bairro:</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                defaultValue={selectedPerson.bairro}
              />
            </div>
            <div>
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                defaultValue={selectedPerson.cidade}
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                name="estado"
                defaultValue={selectedPerson.estado}
              />
            </div>
            <div>
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                defaultValue={selectedPerson.cep}
              />
            </div>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="new_cpf">CPF:</label>
              <input type="text" id="new_cpf" name="new_cpf" />
            </div>
            <div>
              <label htmlFor="new_nome_pessoa">Nome:</label>
              <input type="text" id="new_nome_pessoa" name="new_nome_pessoa" />
            </div>
            <div>
              <label htmlFor="new_data_nascimento">Data de Nascimento:</label>
              <input
                type="date"
                id="new_data_nascimento"
                name="new_data_nascimento"
              />
            </div>
            <div>
              <label htmlFor="new_sexo">Sexo:</label>
              <select id="new_sexo" name="new_sexo">
                <option value="">Selecione</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="O">Outro</option>
              </select>
            </div>
            <div>
              <label htmlFor="new_email">Email:</label>
              <input type="email" id="new_email" name="new_email" />
            </div>
            <div>
              <label htmlFor="new_telefone">Telefone:</label>
              <input type="tel" id="new_telefone" name="new_telefone" />
            </div>
            <div>
              <label htmlFor="new_rua">Rua:</label>
              <input type="text" id="new_rua" name="new_rua" />
            </div>
            <div>
              <label htmlFor="new_numero">Número:</label>
              <input type="number" id="new_numero" name="new_numero" />
            </div>
            <div>
              <label htmlFor="new_bairro">Bairro:</label>
              <input type="text" id="new_bairro" name="new_bairro" />
            </div>
            <div>
              <label htmlFor="new_cidade">Cidade:</label>
              <input type="text" id="new_cidade" name="new_cidade" />
            </div>
            <div>
              <label htmlFor="new_estado">Estado:</label>
              <input type="text" id="new_estado" name="new_estado" />
            </div>
            <div>
              <label htmlFor="new_cep">CEP:</label>
              <input type="text" id="new_cep" name="new_cep" />
            </div>
          </form>
        )}

        <button onClick={handleCloseModal}>Fechar</button>
      </Modal>
    </Surface>
  );
}
