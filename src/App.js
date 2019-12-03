import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Button from './components/Button/Button'
import '../node_modules/antd/dist/antd.css'
import 'antd/dist/antd.css'
import './App.css'
import Drivers from './components/Drivers/Drivers'
import AddDriver from './components/Form/AddDriver'
import EditDriver from './components/Form/EditDriver'
require('dotenv').config()

function App() {
  const [drivers, setDrivers] = useState([])

  async function fetchData() {
    const res = await fetch(`http://localhost:5000/`)
    const data = await res.json()
    setDrivers(data.reverse())
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addNewDriver = async driver => {
    await fetch(`http://localhost:5000/new-driver`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(driver),
    })
      .then(res => res.json())
      .catch(err => console.log(err))
    await fetchData()
  }

  const deleteOne = async id => {
    fetch(`http://localhost:5000/${id}`, {
      method: 'DELETE',
    }).catch(err => console.log(err))
    setDrivers(drivers.filter(driver => driver._id !== id))
  }

  const [edit, setEdit] = useState(false)
  const [currentDriver, setCurrentDriver] = useState({})

  const editOne = driver => {
    setEdit(true)
    setCurrentDriver({
      _id: driver._id,
      name: driver.name,
      phone: driver.phone,
      city: driver.city,
      state: driver.state,
      birthDate: driver.birthDate,
      cnhNumber: driver.documents[0].number,
      cnhCategory: driver.documents[0].category,
      cpfNumber: driver.documents[1].number,
    })
  }

  const editDriver = async (id, obj) => {
    setEdit(false)
    await fetch(`http://localhost:5000/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })
      .then(res => res.json())
      .catch(err => console.log(err))

    await fetchData()
  }

  return (
    <BrowserRouter>
      <div className="App">
        {edit ? (
          <div>
            <EditDriver
              edit={edit}
              setEdit={setEdit}
              currentDriver={currentDriver}
              editDriver={editDriver}
            />
          </div>
        ) : (
          <div>
            <Link to="/new-driver">
              <Button type="default" block>
                Cadastrar um novo motorista
              </Button>
            </Link>
          </div>
        )}

        <Switch>
          <Route
            exact
            path="/"
            render={props => <Drivers drivers={drivers} deleteOne={deleteOne} editOne={editOne} />}
          />

          <Route
            exact
            path="/new-driver"
            render={props => <AddDriver addNewDriver={addNewDriver} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
