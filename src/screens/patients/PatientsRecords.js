import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const PatientsRecords = () => {
  let location = useLocation();
  const [patient, setPatient] = useState({ first_name: "" });

  useEffect(() => {
    setPatient(location.payload);
  }, []);

  return (
    <div>
      <h1>{patient.first_name}</h1>
    </div>
  );
};

export default PatientsRecords;
