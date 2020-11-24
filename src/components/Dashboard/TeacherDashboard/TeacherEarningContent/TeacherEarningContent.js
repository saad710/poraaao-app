import React from "react";
import { Form } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TeacherEarningContent = () => {
  const lineData = [
    {
      name: "1",
      USD: 0,
    },
    {
      name: "2",
      USD: 0.1,
    },
    {
      name: "3",
      USD: 0.2,
    },
    {
      name: "4",
      USD: 0.2,
    },
    {
      name: "5",
      USD: 0.3,
    },
    {
      name: "6",
      USD: 0.4,
    },
    {
      name: "7",
      USD: 0.4,
    },
    {
      name: "8",
      USD: 0.3,
    },
    {
      name: "9",
      USD: 0.5,
    },
    {
      name: "10",
      USD: 0.6,
    },
    {
      name: "11",
      USD: 0.7,
    },
    {
      name: "12",
      USD: 0.7,
    },
    {
      name: "13",
      USD: 0.8,
    },
    {
      name: "14",
      USD: 0.9,
    },
    {
      name: "15",
      USD: 0.6,
    },
    {
      name: "16",
      USD: 0.6,
    },
    {
      name: "17",
      USD: 0.7,
    },
    {
      name: "18",
      USD: 0.4,
    },
    {
      name: "19",
      USD: 0.3,
    },
    {
      name: "20",
      USD: 0.4,
    },
    {
      name: "21",
      USD: 0.5,
    },
    {
      name: "22",
      USD: 0.6,
    },
    {
      name: "23",
      USD: 0.7,
    },
    {
      name: "24",
      USD: 0.4,
    },
    {
      name: "25",
      USD: 0.8,
    },
    {
      name: "26",
      USD: 0.7,
    },
    {
      name: "27",
      USD: 0.9,
    },
    {
      name: "28",
      USD: 0.8,
    },
    {
      name: "29",
      USD: 0.9,
    },
    {
      name: "30",
      USD: 1,
    },
  ];
  return (
    <div>
      <div className="line-chart-section bg-white shadow">
        <div className="col-md-12 bar-chart">
          <h3 className="pt-3 pl-3 pb-3">Earning for Month of November</h3>
          <BarChart
            width={830}
            height={440}
            data={lineData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="USD" stackId="a" fill="#ff8a00" />
          </BarChart>
        </div>
      </div>

      <div
        style={{ marginTop: 30 }}
        className="col-md-12 bg-white shadow p-4 pr-5 ml-auto"
      >
        <h3 className="text-dark pb-3">Total Earning History</h3>
        <table className="table table-borderless">
          <thead style={{ borderBottom: "1px solid grey" }} class="">
            <tr>
              <th style={{ width: "5%" }} className="text-left" scope="col">
                Sr No
              </th>

              <th style={{ width: "22%" }} scope="col">
                Assignment Name
              </th>
              <th style={{ width: "15%" }} scope="col">
                Assignment Date
              </th>
              <th style={{ width: "11%" }} scope="col">
                Price
              </th>
              <th style={{ width: "35%" }} scope="col">
                Project Details
              </th>
              <th style={{ width: "12%" }} scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {servicesList.map((srvclst, index) => ( */}
            <tr>
              {/* <td>{index + 1}</td>
                <td>{srvclst.name}</td>
                <td>{srvclst.email}</td>
                <td>{srvclst.orderedService}</td>
                <td>{srvclst.description}</td> */}
              <td>{1}</td>
              <td>How to Solve This Calculus Math</td>
              <td>12-10-2020</td>
              <td>45$</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                recusandae minus, placeat asperiores nisi alias consequatur fuga
                odio blanditiis quod.
              </td>
              <td>
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control className="btn-success" as="select">
                      <option className="bg-success">Done</option>
                      <option className="bg-warning">Pending</option>
                      <option className="bg-danger">On Going</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherEarningContent;
