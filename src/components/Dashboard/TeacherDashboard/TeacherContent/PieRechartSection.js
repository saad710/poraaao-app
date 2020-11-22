import React from 'react';
import "./TeacherContent.css";
import math from "../../../../resources/math.gif";
import { PieChart, Pie, Sector, Cell } from "recharts";


const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#ff8a00"];

const PieRechartSection = () => {
    return (
        
    <div className="pie-chart-section" style={{}}>
        <div className="row">
          <div className="col-md-5">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginLeft: "20px",
                paddingTop: "15px",
              }}
            >
              Ongoing Assignment
            </p>
            <div className="row math-assignment-video">
              <div className="col-md-3">
                <img
                  src={math}
                  style={{
                    height: "120px",
                    width: "150px",
                    paddingRight: "30px",
                    marginTop: "20px",
                  }}
                  alt=""
                />
              </div>
              <div
                className="col-md-8"
                style={{ marginLeft: "30px", marginTop: "20px" }}
              >
                <h5>how to solve this Math</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores natus magni ea velit mollitia officia, deserunt atque
                  ducimus sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="Pie-chart">
              <PieChart width={420} height={250}>
                <Pie
                  data={data}
                  cx={120}
                  cy={140}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>
    </div>
    );
};

export default PieRechartSection;