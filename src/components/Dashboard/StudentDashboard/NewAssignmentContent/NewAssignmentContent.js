import React from "react";
import uploadIcon from "../../../../resources/upload.png";
import "./NewAssignmentContent.css";

const NewAssignmentContent = () => {
  return (
    <>
      <div className="assignment-form shadow">
        <form>
          <div class="form-group">
            <label
              className="form-label font-weight-bold"
              for="exampleFormControlInput1"
            >
              Assignment Title
            </label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="e.g  Learn Algorithm From Scratch"
                aria-label="Assignment Title"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span
                  style={{ backgroundColor: "rgba(255, 138, 0, 0.65)" }}
                  class="input-group-text"
                  id="basic-addon2"
                >
                  150
                </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label
              className="form-label font-weight-bold"
              for="exampleFormControlInput1"
            >
              Short Description
            </label>
            <div class="input-group mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="e.g  In mathematics and computer science, an algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation."
              ></textarea>
              <div class="input-group-append">
                <span
                  style={{ backgroundColor: "rgba(255, 138, 0, 0.65)" }}
                  class="input-group-text"
                  id="basic-addon2"
                >
                  250
                </span>
              </div>
            </div>
          </div>
          <div className="form-group col-md-4">
            <label
              className="form-label font-weight-bold"
              for="assignmentThumbnail"
            >
              Assignment Thumbnail
            </label>
            <div className="uploadFile">
              <input
                type="file"
                accept="image/*"
                className="custom-file-input"
                onClick={{}}
                required
              />
              <div id="uploadImageText">
                <img className="uploadIcon" src={uploadIcon} alt="" /> Upload
                Image
              </div>
            </div>
          </div>
          <div className="ml-3">
            <p>
              Preferable Size: w-750px X h-422px Upload your course image here.{" "}
              <br />
              Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png.
              no text on the image
            </p>
          </div>

          <div class="form-group col-md-3">
            <label
              className="form-label font-weight-bold"
              for="assignmentBudget"
            >
              Assignment Budget
            </label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Enter Your Budget"
                aria-label="Assignment Budget"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>

          <div class="form-group col-md-3">
            <label
              className="form-label font-weight-bold"
              for="assignmentCategory"
            >
              Category
            </label>
            <select class="form-control" id="assignmentCategory">
              <option>Mathematics</option>
              <option>Data Science</option>
              <option>Programming Language</option>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label
              className="form-label font-weight-bold"
              for="assignmentTopic"
            >
              Topic
            </label>
            <select class="form-control" id="assignmentTopic">
              <option>Mathematics</option>
              <option>Data Science</option>
              <option>Programming Language</option>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>

          <div class="form-group col-md-3">
            <label className="form-label font-weight-bold" for="timeDuration">
              Time Duration (in Hours)
            </label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Time Duration"
                aria-label="Time Duration"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div class="form-group row">
            <div className="form-label font-weight-bold col-md-1 ml-3">
              Chat:
            </div>
            <div className="col-md-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                Required
              </label>
            </div>
            <div className="col-md-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                Not Required
              </label>
            </div>
          </div>
          <div className="form-group col-md-4">
            <label
              className="form-label font-weight-bold"
              for="assignmentThumbnail"
            >
              Attachment
            </label>
            <div className="uploadFile">
              <input
                type="file"
                // accept="image/*"
                className="custom-file-input"
                onClick={{}}
                required
              />
              <div id="uploadImageText">
                <img className="uploadIcon" src={uploadIcon} alt="" /> Upload
                Image
              </div>
            </div>
            <p className="mt-3">
              Upload your assignment image / audio / video here.{" "}
            </p>
          </div>
          <button
            type="submit"
            className="btn btn-primary assignment-btn ml-3 mt-5"
          >
            Create Assignment
          </button>
        </form>
      </div>
    </>
  );
};

export default NewAssignmentContent;
