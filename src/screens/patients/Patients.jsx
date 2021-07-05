import { Button, Col, Row, Table, Tooltip, Input, AutoComplete } from "antd";
import React, { useState } from "react";
import * as actions from "../../redux/actions/actions_patient";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { InfoOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Patients = (props) => {
  let history = useHistory();
  const patients = useSelector((state) => state.patients.all); //matchStateToProps
  const dispatch = useDispatch(); //matchDispatchtoPops
  const [options, setOptions] = useState([]);
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    createData();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Diagnose",
      dataIndex: "Diagnose",
      key: "Diagnose",
      render: () => <Button size="small">Diagnose</Button>,
    },
    {
      title: "Reports",
      dataIndex: "Reports",
      key: "Reports",
      render: (text, patient) => (
        <Tooltip title={`click to see ${patient.first_name}'s reports`}>
          <Link
            to={{
              pathname: `/patients/${patient.id}`,
              payload: patient,
            }}
          >
            <Button
              shape="circle"
              size="small"
              icon={<InfoOutlined />}
              // onClick={() => history.push(`/patients/${patient.id}`)}
            />
          </Link>
        </Tooltip>
      ),
    },
  ];
  const createData = async () => {
    dispatch(actions.getAllPatients());
  };
  const onSelect = (e) => {
    setResults(filter(e));
  };
  const handleSearch = (e) => {
    let pt = filter(e);
    setResults(pt);
    let searches = [];

    pt.map((x) =>
      searches.push({
        value: x.first_name,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <text>{x.first_name}</text>
          </div>
        ),
      })
    );
    setOptions(e.length > 0 ? searches : []);
  };

  const filter = (e) => {
    let reg = new RegExp(
      "^" + e.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""),
      "i"
    ); //i for caseinsensitive look regx at test/resx //^mathces the start
    let pt = patients.filter((patient) => reg.test(patient.first_name));
    return pt;
  };
  return (
    <Row breakpoint="xs" style={{ justifyContent: "center" }}>
      {/* <Col span={12}>chanuka</Col> */}
      <Col span={12} style={{ justifyContent: "space-between" }}>
        <Row justify="center">
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
              width: 300,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input.Search
              style={{ marginTop: 20, marginBottom: 20 }}
              size="large"
              placeholder="Enter patient's name"
              enterButton
            />
          </AutoComplete>
        </Row>

        <Table
          dataSource={results.length != 0 ? results : patients}
          columns={columns}
          pagination={{
            position: ["bottomCenter"],
            defaultPageSize: 8,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20", "30"],
          }}
        />
      </Col>
    </Row>
  );
};

const styles = {
  // mainContainer: {
  //   margin: 10,
  //   backg,
  // },
};
export default Patients;
