import {createPerson, editPerson} from "../../../services/peopleService.js";
import {useEffect, useState} from "react";
import PeopleInput from "./PeopleInput/PeopleInput.jsx";

export default function PeopleForm({isEditing, selectedPerson, handleCloseModal}) {
  const [person, setPerson] = useState(selectedPerson);

  useEffect(() => {
    setPerson(selectedPerson);
  }, [selectedPerson]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      isEditing
        ? await editPerson(person)
        : await createPerson(person)
    } catch (e) {
      alert("Erro ao salvar pessoa")
    }
  }
  return (
    <div>
      {
        isEditing ? (
          <h2 className="text-xl font-bold mb-4">
            Editar {selectedPerson?.nome_pessoa}
          </h2>
        ) : (
          <h2 className="text-xl font-bold mb-4">Adicionar Nova Pessoa</h2>
        )
      }
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {isEditing && (
          <div>
            <label htmlFor="cd_pessoa">Código:</label>
            <input
              type="text"
              id="cd_pessoa"
              name="cd_pessoa"
              readOnly
            />
          </div>
        )}
        <PeopleInput
          type="tel"
          value={person.cpf}
          onChange={val => setPerson({...person, cpf: val})}
          label='CPF:'
          mask='000.000.000-00'
          id='cpf'
          required
        />
        <PeopleInput
          type="tel"
          value={person.nome_pessoa}
          onChange={val => setPerson({...person, nome_pessoa: val})}
          label='Nome:'
          id='nome_pessoa'
          required
        />
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
            value={person.data_nascimento?.slice(0, 10) || ''}
            onChange={(e) => setPerson({...person, data_nascimento: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="sexo">Sexo:</label>
          <select
            id="sexo"
            name="sexo"
            value={person.sexo}
            onChange={(e) => setPerson({...person, sexo: e.target.value})}
            required
          >
            <option value="" disabled hidden>Selecione </option>
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
            value={person.email}
            onChange={(e) => setPerson({...person, email: e.target.value})}
            required
          />
        </div>
        <PeopleInput
          value={person.telefone}
          onChange={val => setPerson({...person, telefone: val})}
          label='Telefone:'
          id='telefone'
          type="tel"
          mask='(00) 00000-0000'
          required
        />
        <PeopleInput
          value={person.rua}
          onChange={val => setPerson({...person, rua: val})}
          label='Rua:'
          id='rua'
          type="text"
          required
        />
        <PeopleInput
          value={person.numero}
          onChange={val => setPerson({...person, numero: val})}
          label='Número:'
          id='numero'
          type="text"
          mask='00000'
          required
        />
        <PeopleInput
          value={person.bairro}
          onChange={val => setPerson({...person, bairro: val})}
          label='Bairro:'
          id='bairro'
          type="text"
          required
        />
        <PeopleInput
          value={person.cidade}
          onChange={val => setPerson({...person, cidade: val})}
          label='Cidade:'
          id='cidade'
          type="text"
          required
        />
        <PeopleInput
          value={person.estado}
          onChange={val => setPerson({...person, estado: val})}
          label='Estado:'
          id='estado'
          type="text"
          mask='aa'
          required
        />
        <PeopleInput
          value={person.cep}
          onChange={val => setPerson({...person, cep: val})}
          label='CEP:'
          id='cep'
          type="text"
          mask='00000-000'
          required
        />
        <div className='flex flex-row gap-16'>
          <button type='submit'>Salvar</button>
          <button onClick={handleCloseModal}>Fechar</button>
        </div>
      </form>
    </div>
  )
}
