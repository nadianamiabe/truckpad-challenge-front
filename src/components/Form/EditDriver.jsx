import React, { useState, useEffect } from "react";

function EditDriver(props) {
  const [driver, setDriver] = useState(props.currentDriver);

  useEffect(() => {
    setDriver(props.currentDriver);
  }, [props]);

  const handleChange = e => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.editDriver(driver._id, {
          name: driver.name,
          birthDate: driver.birthDate,
          phone: driver.phone,
          city: driver.city,
          state: driver.state,
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
      }}
    >
      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={driver.name}
        onChange={handleChange}
      />
      <label>Data de nascimento:</label>
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
      <label>Categoria:</label>
      <input
        type="text"
        name="cnhCategory"
        value={driver.cnhCategory}
        onChange={handleChange}
      />
      <label>CPF:</label>
      <input
        type="text"
        name="cpfNumber"
        value={driver.cpfNumber}
        onChange={handleChange}
      />
      <div>
        <button type="submit">Salvar alterações</button>
        <button
          type="button"
          onClick={() => {
            props.setEdit(false);
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default EditDriver;
