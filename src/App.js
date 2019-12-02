import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { Button } from "antd";
import "../node_modules/antd/dist/antd.css";

import "./App.css";
import Drivers from "./components/Drivers/Drivers";
import AddDriver from "./components/Form/AddDriver";

function App() {
  const [drivers, setDrivers] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    setDrivers(data.reverse());
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addNewDriver = async driver => {
    await fetch("http://localhost:5000/new-driver", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(driver)
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    await fetchData();
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* {!newDriver ? (
          <nav>
            <Link to="/">teste</Link>
          </nav>
        ) : (
          <nav>
            <Link to="new-driver">Cadatrar</Link>
          </nav>
        )} */}
        <Link to="/new-driver">
          <Button type="primary" block>
            Cadastrar um novo motorista
          </Button>
        </Link>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Drivers drivers={drivers} />}
          />
          <Route
            exact
            path="/new-driver"
            render={props => <AddDriver addNewDriver={addNewDriver} />}
          />
          <Redirect path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
