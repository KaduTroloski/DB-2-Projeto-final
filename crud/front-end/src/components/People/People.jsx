import Surface from "../Surface/Surface.jsx";
import DataTable from "../DataTable/DataTable.jsx";
import Modal from "../Modal/modal.jsx";
import { useState } from "react";
import {Image} from "antd";
import PeopleForm from "./PeopleForm/PeopleForm.jsx";
import DeleteModalContent from "./DeleteModalContent/DeleteModalContent.jsx";

export default function People() {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenEdit = (record) => {
    setSelectedPerson(record);
    setIsEditing(true);
    setOpenFormModal(true);
  };

  const handleOpenDelete = (record) => {
    setSelectedPerson(record)
    setOpenDeleteModal(true);
  };

  const handleCloseModal = () => {
    setOpenFormModal(false);
    setOpenDeleteModal(false);
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
    { title: "CPF", dataIndex: "cpf", key: "cpf", width: "10%",
      render: (cpf) => {
        if (!cpf) return "";
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      }
    },
    { title: "Nome", dataIndex: "nome_pessoa", key: "nome_pessoa" },
    { title: "Data de Nascimento", dataIndex: "data_nascimento", key: "data_nascimento" },
    { title: "Sexo", dataIndex: "sexo", key: "sexo", width: "5%" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Telefone", dataIndex: "telefone", key: "telefone" },
    { title: "Rua", dataIndex: "rua", key: "rua" },
    { title: "Número", dataIndex: "numero", key: "numero" },
    { title: "Bairro", dataIndex: "bairro", key: "bairro" },
    { title: "Cidade", dataIndex: "cidade", key: "cidade" },
    { title: "Estado", dataIndex: "estado", key: "estado", width: "5%" },
    { title: "CEP", dataIndex: "cep", key: "cep", width: "7%"},
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <button className={"text-light"} onClick={() => handleOpenEdit(record)}>
            <Image src='/edit.png' alt='Editar' width={30} height={30} preview={false}/>
          </button>
          <button className={"text-light"} onClick={() => handleOpenDelete(record)}>
            <Image src='/trash.png' alt='Editar' width={25} height={25} preview={false}/>
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
            setOpenFormModal(true);
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
        isOpen={openFormModal}
        onClose={handleCloseModal}
      >
        <PeopleForm handleCloseModal={handleCloseModal} selectedPerson={selectedPerson} isEditing={isEditing} />
      </Modal>

      <Modal
        isOpen={openDeleteModal}
        onClose={handleCloseModal}
      >
        <DeleteModalContent handleCloseModal={handleCloseModal} selectedPerson={selectedPerson} />
      </Modal>

    </Surface>
  );
}
