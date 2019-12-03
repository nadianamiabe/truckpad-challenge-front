import React, { useState } from 'react'
import './AddDriver.css'
import { Link } from 'react-router-dom'

function AddDriver(props) {
  const initialState = {
    id: null,
    name: '',
    birthDate: '',
    phone: '',
    city: '',
    state: '',
    cnhNumber: '',
    cpfNumber: '',
    cnhCategory: '',
  }

  const [driver, setDriver] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target
    setDriver({ ...driver, [name]: value })
  }

  return (
    <div class="container">
      <form
        onSubmit={e => {
          e.preventDefault()
          props.addNewDriver({
            name: driver.name,
            birthDate: driver.birthDate,
            city: driver.city,
            state: driver.state,
            phone: driver.phone,
            documents: [
              {
                number: driver.cnhNumber,
                category: driver.cnhCategory,
              },
              {
                number: driver.cpfNumber,
              },
            ],
          })
          setDriver(initialState)
        }}
      >
        <div class="form-group">
          <label>Nome:</label>

          <input
            type="text"
            name="name"
            value={driver.name}
            onChange={handleChange}
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="birthDate"
            value={driver.birthDate}
            onChange={handleChange}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>Telefone:</label>
          <input type="text" name="phone" value={driver.phone} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>Cidade:</label>
          <input type="text" name="city" value={driver.city} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>Estado:</label>
          <input type="text" name="state" value={driver.state} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>CNH:</label>
          <input type="text" name="cnhNumber" value={driver.cnhNumber} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>Categoria</label>
          <input
            type="text"
            name="cnhCategory"
            value={driver.cnhCategory}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>CPF</label>
          <input type="text" name="cpfNumber" value={driver.cpfNumber} onChange={handleChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default AddDriver
