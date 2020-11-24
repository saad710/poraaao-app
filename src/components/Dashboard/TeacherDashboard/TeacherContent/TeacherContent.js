import React from 'react';
import BarRechartSection from './BarRechartSection';
import BidCard from './BidCard';
import PieRechartSection from './PieRechartSection';

const TeacherContent = () => {
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <div className="teacher-content">

      <BidCard/>
      <PieRechartSection/>
      <BarRechartSection/>

      <div className="assignment-section" style={{ marginLeft: "30px" }}>
        <div className="row">
          <div
            className="col-md-3 bid-assignment bg-white shadow"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={book} alt="" />
            <div style={{ paddingLeft: 10 }}>
              <h2>10</h2>
              <p style={{ fontSize: "13px", fontWeight: "600" }}>
                Bid Assignments
              </p>
            </div>
          </div>
          <div
            className="col-md-3 bid-assignment bg-white shadow"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={check} alt="" />
            <div style={{ paddingLeft: 10 }}>
              <h2>09</h2>
              <p style={{ fontSize: "13px", fontWeight: "600" }}>
                Complete Assignments
              </p>
            </div>
          </div>
          <div
            className="col-md-3 bid-assignment bg-white shadow"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={star} style={{ height: "65px", width: "65px" }} alt="" />
            <div style={{ paddingLeft: 10 }}>
              <h2>08</h2>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>My Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pie-chart-section bg-white shadow" style={{}}>
        <div className="row">
          <div className="col-md-5 ">
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
            <div className="row math-assignment ">
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
                className="col-md-8 "
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
          <div className="col-md-5 ">
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
      <div className="line-chart-section bg-white shadow">
        <div className="col-md-12 bar-chart">
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

    </div>
  );
};

export default TeacherContent;