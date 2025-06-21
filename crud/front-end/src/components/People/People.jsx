import Surface from "../Surface/Surface.jsx";
import DataTable from "../DataTable/DataTable.jsx";
import Modal from "../Modal/modal.jsx";
import {useEffect, useState} from "react";
import {Image} from "antd";
import PeopleForm from "./PeopleForm/PeopleForm.jsx";
import DeleteModalContent from "./DeleteModalContent/DeleteModalContent.jsx";
import { getPeople } from "../../services/peopleService.js";

export default function People() {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const peopleData = await getPeople();
        setPeople(peopleData);
      } catch (error) {
        alert(error.message);
      }
    };
    void fetchPeople();
  }, [])

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
          dataSource={people}
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
