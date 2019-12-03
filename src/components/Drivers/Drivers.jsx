import React from 'react'
import './Drivers.css'

function Drivers(props) {
  return (
    <div>
      {props.drivers.map(driver => (
        // eslint-disable-next-line no-unused-expressions
        <article key={driver._id} className="drivers-container">
          <h2>{driver.name}</h2>
          <p>
            Telefone: <span>{driver.phone}</span>
          </p>
          <p>
            Data de nascimento: <span>{driver.birthDate}</span>
          </p>
          <p>
            Estado: <span>{driver.state}</span>
          </p>
          <p>
            Cidade: <span>{driver.city}</span>
          </p>
          <p>
            CNH: <span>{driver.documents[0].number}</span>
          </p>
          <p>
            Categoria: <span>{driver.documents[0].category}</span>
          </p>
          <p>
            CPF: <span>{driver.documents[1].number}</span>
          </p>
          <div className="button">
            <button type="button" onClick={() => props.deleteOne(driver._id)}>
              Deletar
            </button>
            <button type="button" onClick={() => props.editOne(driver)}>
              Editar
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Drivers
