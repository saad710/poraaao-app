import React, { useState } from "react";
import "./StudentContent.css";
import { fakeTeacher } from "../../../../fakeData/fakeTeacher";
import book from "../../../../resources/book.png";
import star from "../../../../resources/star.PNG";
import check from "../../../../resources/check.png";
import math from "../../../../resources/math.gif";
import { PieChart } from "@material-ui/icons";
import { Cell, Pie } from "recharts";
import TeacherCard from "../../Shared/TeacherCard/TeacherCard";

const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#ff8a00"];

const StudentContent = () => {
  const [teachers, setTeachers] = useState(fakeTeacher);

  return (
    <>
      <div className="d-flex justify-content-around row">
        <div className="info-card col-md-3 bg-white shadow">
          <div className="row">
            <div className="col-md-2">
              <img src={book} alt="" />
            </div>
            <div className="col-md-10">
              <div style={{ paddingLeft: 10 }}>
                <h2>10</h2>
                <p style={{ fontSize: "13px", fontWeight: "600" }}>
                  Bid Assignments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" info-card col-md-3 bg-white shadow">
          <div className="row">
            <div className="col-md-2">
              <img src={check} alt="" />
            </div>
            <div className="col-md-10">
              <div style={{ paddingLeft: 10 }}>
                <h2>09</h2>
                <p style={{ fontSize: "13px", fontWeight: "600" }}>
                  Complete Assignments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" info-card col-md-3 bg-white shadow">
          <div className="row">
            <div className="col-md-2">
              <img
                src={star}
                style={{ height: "65px", width: "65px" }}
                alt=""
              />
            </div>
            <div className="col-md-10">
              <div style={{ paddingLeft: 10 }}>
                <h2>08</h2>
                <p style={{ fontSize: "14px", fontWeight: "600" }}>
                  My Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-white mt-5">
          <div className="col-md-8 pl-5 pb-5 pr-5 pt-3">
            <h3>Ongoing Assignment</h3>
            <div className="row running-assignment-card mt-3 ">
              <div className="col-md-4">
                <img
                  src={math}
                  style={{
                    height: "120px",
                    width: "150px",
                  }}
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <h5>how to solve this Math</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores natus magni ea velit mollitia officia, deserunt atque
                  ducimus sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
      <div className="mt-5 ">
        <h3 className="pl-5 mb-5">Available Teachers</h3>
        <div className="d-flex justify-content-around row">
          {teachers.map((tchr) => (
            <TeacherCard key={tchr.id} teacher={tchr}></TeacherCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentContent;
