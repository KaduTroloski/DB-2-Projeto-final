import {deletePerson} from "../../../services/peopleService.js";

export default function DeleteModalContent({ selectedPerson, handleCloseModal }) {
  const handleDelete = async () => {
    try {
      await deletePerson(selectedPerson.cd_pessoa);
      alert('Pessoa excluída com sucesso');
      window.location.reload();
    } catch (e) {
      console.log(e)
      alert(e.response.data.Error.message);
    }
  }
  return (
    <div>
      <h2 className="text-center text-danger">Excluir Pessoa</h2>
      <p className="text-center">Você tem certeza que deseja excluir <strong>{selectedPerson?.nome_pessoa}</strong>?</p>
      <div className="flex justify-center gap-16">
        <button
          className="text-light"
          onClick={handleDelete}
        >
          Excluir
        </button>
        <button
          className="text-light"
          onClick={handleCloseModal}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
