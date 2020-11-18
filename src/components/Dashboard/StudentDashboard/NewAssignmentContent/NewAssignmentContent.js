import React from "react";

const NewAssignmentContent = () => {
  return (
    <>
      <div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Assignment Title</label>
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
            <label for="exampleFormControlInput1">Short Description</label>
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
          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">
              Example multiple select
            </label>
            <select
              multiple
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAssignmentContent;
