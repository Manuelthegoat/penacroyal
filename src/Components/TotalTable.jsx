import React from "react";

const TotalTable = () => {
  return (
    <>
      <div class="col-xxl-12 col-lg-6 mb-25">
        <div class="card border-0 px-25">
          <div class="card-header px-0 border-0">
            <h6>Restock Required</h6>
            <div class="card-extra">
              {/* <ul class="card-tab-links nav-tabs nav" role="tablist">
                <li>
                  <a
                    class="active"
                    href="#t_selling-today"
                    data-bs-toggle="tab"
                    id="t_selling-today-tab"
                    role="tab"
                    aria-selected="true"
                  >
                    Today
                  </a>
                </li>
                <li>
                  <a
                    href="#t_selling-week"
                    data-bs-toggle="tab"
                    id="t_selling-week-tab"
                    role="tab"
                    aria-selected="true"
                  >
                    Week
                  </a>
                </li>
                <li>
                  <a
                    href="#t_selling-month"
                    data-bs-toggle="tab"
                    id="t_selling-month-tab"
                    role="tab"
                    aria-selected="true"
                  >
                    Month
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div class="card-body p-0">
            <div class="tab-content">
              <div
                class="tab-pane fade active show"
                id="t_selling-today"
                role="tabpanel"
                aria-labelledby="t_selling-today-tab"
              >
                <div class="selling-table-wrap">
                  <div class="table-responsive">
                    <table class="table table--default table-borderless">
                      <thead>
                        <tr>
                          <th>PRODUCTS</th>
                          <th>ReStock Limit</th>
                          <th>Quantity Available</th>
                          {/* <th>Revenue</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="radius-xs img-fluid order-bg-opacity-primary"
                                src="img/premium-clock.png"
                                alt="img"
                              />
                              <span>Premium Clock</span>
                            </div>
                          </td>
                          <td>280</td>
                          <td className="text-danger">278</td>
                          {/* <td>38,536</td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="radius-xs img-fluid order-bg-opacity-primary"
                                src="img/t-shirt.png"
                                alt="img"
                              />
                              <span>Boys T-Shirt</span>
                            </div>
                          </td>
                          <td>25</td>
                          <td className="text-danger">22</td>
                          {/* <td>20,573</td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="radius-xs img-fluid order-bg-opacity-primary"
                                src="img/nike.png"
                                alt="img"
                              />
                              <span>Nike Shoes</span>
                            </div>
                          </td>
                          <td>32</td>
                          <td className="text-danger">30</td>
                          {/* <td>17,457</td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="radius-xs img-fluid order-bg-opacity-primary"
                                src="img/cup-glass.png"
                                alt="img"
                              />
                              <span>Smart Glass</span>
                            </div>
                          </td>
                          <td>50</td>
                          <td className="text-danger">36</td>
                          {/* <td>15,354</td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="radius-xs img-fluid order-bg-opacity-primary"
                                src="img/women-bag.png"
                                alt="img"
                              />
                              <span>Women Bag</span>
                            </div>
                          </td>
                          <td>32</td>
                          <td className="text-danger">22</td>
                          {/* <td>12,354</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalTable;
