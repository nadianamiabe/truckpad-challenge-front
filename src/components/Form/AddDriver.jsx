import React, { useState } from 'react'
import './AddDriver.css'
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd'
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
          <Input
            type="text"
            name="name"
            value={driver.name}
            onChange={handleChange}
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label>Data de Nascimento:</label>
          <Input
            type="date"
            name="birthDate"
            value={driver.birthDate}
            onChange={handleChange}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>Telefone:</label>
          <Input type="text" name="phone" value={driver.phone} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>Cidade:</label>
          <Input type="text" name="city" value={driver.city} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>Estado:</label>
          <Input type="text" name="state" value={driver.state} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>CNH:</label>
          <Input type="text" name="cnhNumber" value={driver.cnhNumber} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label>Categoria</label>
          <Input
            type="text"
            name="cnhCategory"
            value={driver.cnhCategory}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>CPF</label>
          <Input type="text" name="cpfNumber" value={driver.cpfNumber} onChange={handleChange} />
        </div>
        <Button type="submit">Salvar</Button>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default AddDriver
