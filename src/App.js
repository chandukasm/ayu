import React from "react";
import "./App.css";
import { Button } from "antd";
import { Switch, Route } from "react-router-dom";
import Patients from "./screens/patients/Patients";
import PatientsRecords from "./screens/patients/PatientsRecords";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/patients/:id" component={PatientsRecords} />
        <Route path="/patients" component={Patients} />
        <Route path="/" component={Patients} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
