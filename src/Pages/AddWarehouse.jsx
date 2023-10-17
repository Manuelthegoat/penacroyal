import React from "react";

const AddWarehouse = () => {
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">Add Warehouse</h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">
                      <i class="uil uil-estate"></i>Home
                    </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Warehouse Form
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="form-element">
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-default card-md mb-4">
              <div class="card-header">
                <h6>Complete All Fields</h6>
              </div>
              <div class="card-body py-md-25">
                <form action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="a1"
                          class="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Name Of Warehouse
                        </label>
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a1"
                          placeholder="Warehouse Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="a3"
                          class="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Products
                        </label>
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a3"
                          placeholder="Products"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="a2"
                          class="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a2"
                          placeholder="Description"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="a4"
                          class="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Available Quantity
                        </label>
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a4"
                          placeholder="Available Quantity"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="a5"
                          class="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Number Of Floors
                        </label>
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a5"
                          placeholder="Quantity"
                        />
                      </div>
                    </div>

                    <div class="form-group mb-0">
                      <button
                        type="submit"
                        class="btn btn-lg btn-primary btn-submit"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWarehouse;
