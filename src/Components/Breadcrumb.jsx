import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <div class="col-lg-12">
        <div class="breadcrumb-main">
          <h4 class="text-capitalize breadcrumb-title">Home</h4>
          <div class="breadcrumb-action justify-content-center flex-wrap">
            {/* <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">
                    <i class="uil uil-estate"></i>Dashboard
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav> */}
            <div class="form-group form-group-calender mb-20">
              <label
                for="datepicker8"
                class="il-gray fs-14 fw-500 align-center mb-10"
              >
                FROM
              </label>

              <div class="position-relative">
                <input
                  type="text"
                  class="form-control  ih-medium ip-gray radius-xs b-light"
                  id="datepicker8"
                  placeholder="01/10/2021"
                />
                <a href="#">
                  <img class="svg" src="img/svg/calendar.svg" alt="calendar" />
                </a>
              </div>
            </div>
            &nbsp;&nbsp;
            <div class="form-group form-group-calender mb-20">
              <label
                for="datepicker8"
                class="il-gray fs-14 fw-500 align-center mb-10"
              >
                TO
              </label>

              <div class="position-relative">
                <input
                  type="text"
                  class="form-control  ih-medium ip-gray radius-xs b-light"
                  id="datepicker8"
                  placeholder="01/10/2021"
                />
                <a href="#">
                  <img class="svg" src="img/svg/calendar.svg" alt="calendar" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
