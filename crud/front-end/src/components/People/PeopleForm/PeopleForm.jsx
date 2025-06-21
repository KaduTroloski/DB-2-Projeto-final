export default function PeopleForm ({isEditing, selectedPerson, handleCloseModal}) {
  return (
    <div>
      { isEditing ? (
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
    </div>
  )
}
