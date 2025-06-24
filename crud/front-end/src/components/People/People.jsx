import Surface from "../Surface/Surface.jsx";
import DataTable from "../DataTable/DataTable.jsx";
import Modal from "../Modal/modal.jsx";
import {useEffect, useState} from "react";
import {Image} from "antd";
import PeopleForm from "./PeopleForm/PeopleForm.jsx";
import DeleteModalContent from "./DeleteModalContent/DeleteModalContent.jsx";
import { getPeople } from "../../services/peopleService.js";

export default function People() {
  const initialPerson = {
    cd_pessoa: null,
    cpf: "",
    nome_pessoa: "",
    data_nascimento: "",
    sexo: "",
    email: "",
    telefone: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: ""
  }
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(initialPerson);
  const [isEditing, setIsEditing] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const peopleData = await getPeople();
        setPeople(peopleData);
      } catch (error) {
        alert(e.response.data.Error.message);
      }
    };
    void fetchPeople();
  }, [])

  const handleOpenAdd = () => {
    setSelectedPerson(initialPerson);
    setIsEditing(false);
    setOpenFormModal(true);
  }

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
    setSelectedPerson(initialPerson);
    setIsEditing(false);
  };

  const columns = [
    { title: "CPF", dataIndex: "cpf", key: "cpf", width: "8%",
      render: (cpf) => {
        if (!cpf) return "";
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      }
    },
    { title: "Nome", dataIndex: "nome_pessoa", key: "nome_pessoa" },
    { title: "Data de Nascimento", dataIndex: "data_nascimento", key: "data_nascimento", width: '7%',
      render: (date) => {
        if (!date) return "";
        const formattedDate = new Date(date);
        return formattedDate.toLocaleDateString("pt-BR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        });
      }},
    { title: "Sexo", dataIndex: "sexo", key: "sexo", width: "5%" },
    { title: "Email", dataIndex: "email", key: "email", width: '15%' },
    { title: "Telefone", dataIndex: "telefone", key: "telefone" },
    { title: "Rua", dataIndex: "rua", key: "rua" },
    { title: "Nº", dataIndex: "numero", key: "numero", width: '5%' },
    { title: "Bairro", dataIndex: "bairro", key: "bairro", width: '9%' },
    { title: "Cidade", dataIndex: "cidade", key: "cidade", width: '7%' },
    { title: "Estado", dataIndex: "estado", key: "estado", width: "5%" },
    { title: "CEP", dataIndex: "cep", key: "cep", width: "6%"},
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
          onClick={handleOpenAdd}
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
