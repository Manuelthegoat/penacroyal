import React from "react";

const TotalTable = () => {
  return (
    <>
      <div class="col-xxl-6 col-lg-6 mb-25">
        <div class="card border-0 px-25">
          <div class="card-header px-0 border-0">
            <h6>Restock Required</h6>
            <div class="card-extra">
              <ul class="card-tab-links nav-tabs nav" role="tablist">
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
              </ul>
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
                          <th>PRDUCTS NAME</th>
                          <th>Price</th>
                          <th>Sold</th>
                          <th>Revenue</th>
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
                          <td>&#8358;280</td>
                          <td>339</td>
                          <td>&#8358;38,536</td>
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
                          <td>&#8358;25</td>
                          <td>80</td>
                          <td>&#8358;20,573</td>
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
                          <td>&#8358;32</td>
                          <td>58</td>
                          <td>&#8358;17,457</td>
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
                          <td>&#8358;9,50</td>
                          <td>36</td>
                          <td>&#8358;15,354</td>
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
                          <td>&#8358;32</td>
                          <td>40</td>
                          <td>&#8358;12,354</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="t_selling-week"
                role="tabpanel"
                aria-labelledby="t_selling-week-tab"
              >
                <div class="selling-table-wrap">
                  <div class="table-responsive">
                    <table class="table table--default table-borderless">
                      <thead>
                        <tr>
                          <th>PRDUCTS NAME</th>
                          <th>Price</th>
                          <th>Sold</th>
                          <th>Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/287.png"
                                alt="img"
                              />
                              <span>Samsung Galaxy S8 256GB</span>
                            </div>
                          </td>
                          <td>&#8358;289</td>
                          <td>339</td>
                          <td>&#8358;60,258</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid"
                                src="img/165.png"
                                alt="img"
                              />
                              <span>Half Sleeve Shirt</span>
                            </div>
                          </td>
                          <td>&#8358;29</td>
                          <td>136</td>
                          <td>&#8358;2,483</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/166.png"
                                alt="img"
                              />
                              <span>Marco Shoes</span>
                            </div>
                          </td>
                          <td>&#8358;59</td>
                          <td>448</td>
                          <td>&#8358;19,758</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/315.png"
                                alt="img"
                              />
                              <span>15" Mackbook Pro</span>
                            </div>
                          </td>
                          <td>&#8358;1,299</td>
                          <td>159</td>
                          <td>&#8358;197,458</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/506.png"
                                alt="img"
                              />
                              <span>Apple iPhone X</span>
                            </div>
                          </td>
                          <td>&#8358;899</td>
                          <td>146</td>
                          <td>115,254</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="t_selling-month"
                role="tabpanel"
                aria-labelledby="t_selling-month-tab"
              >
                <div class="selling-table-wrap">
                  <div class="table-responsive">
                    <table class="table table--default table-borderless">
                      <thead>
                        <tr>
                          <th>PRDUCTS NAME</th>
                          <th>Price</th>
                          <th>Sold</th>
                          <th>Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/287.png"
                                alt="img"
                              />
                              <span>Samsung Galaxy S8 256GB</span>
                            </div>
                          </td>
                          <td>&#8358;149</td>
                          <td>389</td>
                          <td>&#8358;60,278</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid"
                                src="img/165.png"
                                alt="img"
                              />
                              <span>Half Sleeve Shirt</span>
                            </div>
                          </td>
                          <td>&#8358;59</td>
                          <td>136</td>
                          <td>&#8358;2,483</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/166.png"
                                alt="img"
                              />
                              <span>Marco Shoes</span>
                            </div>
                          </td>
                          <td>&#8358;89</td>
                          <td>448</td>
                          <td>&#8358;19,758</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/315.png"
                                alt="img"
                              />
                              <span>15" Mackbook Pro</span>
                            </div>
                          </td>
                          <td>&#8358;1,29</td>
                          <td>15</td>
                          <td>&#8358;197,8</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <img
                                class="me-15 wh-34 img-fluid order-bg-opacity-primary"
                                src="img/506.png"
                                alt="img"
                              />
                              <span>Apple iPhone X</span>
                            </div>
                          </td>
                          <td>&#8358;99</td>
                          <td>16</td>
                          <td>1154</td>
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
