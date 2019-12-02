import React, { useState } from "react";
import "./AddDriver.css";

function AddDriver(props) {
  const initialState = {
    id: null,
    name: "",
    birthDate: "",
    phone: "",
    city: "",
    state: "",
    cnhNumber: "",
    cpfNumber: "",
    cnhCategory: ""
  };

  const [driver, setDriver] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.addNewDriver({
          name: driver.name,
          birthDate: driver.birthDate,
          city: driver.city,
          state: driver.state,
          phone: driver.phone,
          documents: [
            {
              number: driver.cnhNumber,
              category: driver.cnhCategory
            },
            {
              number: driver.cpfNumber
            }
          ]
        });
        setDriver(initialState);
      }}
    >
      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={driver.name}
        onChange={handleChange}
      />
      <label>Data de Nascimento:</label>
      <input
        type="date"
        name="birthDate"
        value={driver.birthDate}
        onChange={handleChange}
      />
      <label>Telefone:</label>
      <input
        type="text"
        name="phone"
        value={driver.phone}
        onChange={handleChange}
      />
      <label>Cidade:</label>
      <input
        type="text"
        name="city"
        value={driver.city}
        onChange={handleChange}
      />
      <label>Estado:</label>
      <input
        type="text"
        name="state"
        value={driver.state}
        onChange={handleChange}
      />
      <label>CNH:</label>
      <input
        type="text"
        name="cnhNumber"
        value={driver.cnhNumber}
        onChange={handleChange}
      />
      <label>Categoria</label>
      <input
        type="text"
        name="cnhCategory"
        value={driver.cnhCategory}
        onChange={handleChange}
      />
      <label>CPF</label>
      <input
        type="text"
        name="cpfNumber"
        value={driver.cpfNumber}
        onChange={handleChange}
      />
      <button type="submit">Cadastrar novo motorista!</button>
    </form>
  );
}

export default AddDriver;
