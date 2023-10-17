import React from 'react'

const AllWarehouses = () => {
  return (
    <>
       <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">All Warehouses</h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">
                      <i class="uil uil-estate"></i>Home
                    </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Warehouses Table
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-12 mb-25">
        <div class="card border-0 px-25">
          <div class="card-header px-0 border-0">
            <h6>Best Seller</h6>
            <div class="card-extra">
              <ul class="card-tab-links nav-tabs nav" role="tablist">
                <li>
                  <a
                    class="active"
                    href="#t_selling-today222"
                    data-bs-toggle="tab"
                    id="t_selling-today222-tab"
                    role="tab"
                    aria-selected="true"
                  >
                    Today
                  </a>
                </li>
                <li>
                  <a
                    href="#t_selling-week222"
                    data-bs-toggle="tab"
                    id="t_selling-week222-tab"
                    role="tab"
                    aria-selected="true"
                  >
                    Week
                  </a>
                </li>
                <li>
                  <a
                    href="#t_selling-month333"
                    data-bs-toggle="tab"
                    id="t_selling-month333-tab"
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
                id="t_selling-today222"
                role="tabpanel"
                aria-labelledby="t_selling-today222-tab"
              >
                <div class="selling-table-wrap selling-table-wrap--source">
                  <div class="table-responsive">
                    <table class="table table--default table-borderless">
                      <thead>
                        <tr>
                          <th>Warehouse Name</th>
                          <th>Warehouse ID</th>
                          <th>Created Date</th>
                          {/* <th>Order Date</th> */}
                          <th>Customer Name</th>
                          <th>Address</th>
                          {/* <th>Invoice Number</th>
                          <th>Unit Price</th> */}
                          {/* <th>Sales Price</th> */}
                          {/* <th>Payment Method</th> */}
                          {/* <th>Payment Status</th> */}
                          <th>Warehouse Location</th>
                          <th>Sales Person</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Meal Of Plate</td>
                          <td>#25</td>
                          <td>28 October 2023</td>
                          
                          <td>John Bosco Doe</td>
                          <td>no 7 jesus street</td>

                        
                          
                          
                          <td>Heaven</td>
                          <td>The Sellers</td>
                          <td>
                            <div class="dropdown dropleft">
                              <a
                                href="#"
                                role="button"
                                id="else"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/svg/more-horizontal.svg"
                                  alt="more-horizontal"
                                  class="svg"
                                />
                              </a>
                              <div class="dropdown-menu" aria-labelledby="else">
                                <a class="dropdown-item" href="/productdetails">
                                  Delete
                                </a>
                                <a class="dropdown-item" href="/warehouse-details">
                                  View more
                                </a>
                                {/* <a class="dropdown-item" href="#">
                                  Print Invoice
                                </a>
                                <a class="dropdown-item" href="#">
                                  Add to cart
                                </a> */}
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Meal Of Plate</td>
                          <td>#25</td>
                          <td>28 October 2023</td>
                          
                          <td>John Bosco Doe</td>
                          <td>no 7 jesus street</td>

                        
                          
                          
                          <td>Heaven</td>
                          <td>The Sellers</td>
                          <td>
                            <div class="dropdown dropleft">
                              <a
                                href="#"
                                role="button"
                                id="else"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/svg/more-horizontal.svg"
                                  alt="more-horizontal"
                                  class="svg"
                                />
                              </a>
                              <div class="dropdown-menu" aria-labelledby="else">
                                <a class="dropdown-item" href="/productdetails">
                                  View More
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a class="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Meal Of Plate</td>
                          <td>#25</td>
                          <td>28 October 2023</td>
                          
                          <td>John Bosco Doe</td>
                          <td>no 7 jesus street</td>

                        
                          
                          
                          <td>Heaven</td>
                          <td>The Sellers</td>
                          <td>
                            <div class="dropdown dropleft">
                              <a
                                href="#"
                                role="button"
                                id="else"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/svg/more-horizontal.svg"
                                  alt="more-horizontal"
                                  class="svg"
                                />
                              </a>
                              <div class="dropdown-menu" aria-labelledby="else">
                                <a class="dropdown-item" href="/productdetails">
                                  View More
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a class="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Meal Of Plate</td>
                          <td>#25</td>
                          <td>28 October 2023</td>
                          
                          <td>John Bosco Doe</td>
                          <td>no 7 jesus street</td>

                        
                          
                          
                          <td>Heaven</td>
                          <td>The Sellers</td>
                          <td>
                            <div class="dropdown dropleft">
                              <a
                                href="#"
                                role="button"
                                id="else"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/svg/more-horizontal.svg"
                                  alt="more-horizontal"
                                  class="svg"
                                />
                              </a>
                              <div class="dropdown-menu" aria-labelledby="else">
                                <a class="dropdown-item" href="/productdetails">
                                  View More
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a class="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Meal Of Plate</td>
                          <td>#25</td>
                          <td>28 October 2023</td>
                          
                          <td>John Bosco Doe</td>
                          <td>no 7 jesus street</td>

                        
                          
                          
                          <td>Heaven</td>
                          <td>The Sellers</td>
                          <td>
                            <div class="dropdown dropleft">
                              <a
                                href="#"
                                role="button"
                                id="else"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/svg/more-horizontal.svg"
                                  alt="more-horizontal"
                                  class="svg"
                                />
                              </a>
                              <div class="dropdown-menu" aria-labelledby="else">
                                <a class="dropdown-item" href="/productdetails">
                                  View More
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a class="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="t_selling-week222"
                role="tabpanel"
                aria-labelledby="t_selling-week222-tab"
              >
                <div class="selling-table-wrap selling-table-wrap--source">
                  <div class="table-responsive">
                    <table class="table table--default table-borderless">
                      <thead>
                        <tr>
                          <th>Seller name</th>
                          <th>Company</th>
                          <th>Product</th>
                          <th>Revenue</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-1.png"
                                  alt="img"
                                />
                              </div>
                              <span>Robert Clinton</span>
                            </div>
                          </td>
                          <td>Samsung</td>
                          <td>Smart Phone</td>
                          <td>$38,536</td>
                          <td>Done</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-2.png"
                                  alt="img"
                                />
                              </div>
                              <span>Michael Johnson </span>
                            </div>
                          </td>
                          <td>Asus</td>
                          <td>Laptop</td>
                          <td>$20,573</td>
                          <td>Done</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-3.png"
                                  alt="img"
                                />
                              </div>
                              <span>Daniel White</span>
                            </div>
                          </td>
                          <td>Google</td>
                          <td>Watch</td>
                          <td>$17,457</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-4.png"
                                  alt="img"
                                />
                              </div>
                              <span>Chris Barin </span>
                            </div>
                          </td>
                          <td>Apple</td>
                          <td>Computer</td>
                          <td>$15,354</td>
                          <td>Done</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-5.png"
                                  alt="img"
                                />
                              </div>
                              <span>Daniel Pink</span>
                            </div>
                          </td>
                          <td>Panasonic</td>
                          <td>Sunglass</td>
                          <td>$12,354</td>
                          <td>Done</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="t_selling-month333"
                role="tabpanel"
                aria-labelledby="t_selling-month333-tab"
              >
                <div class="selling-table-wrap selling-table-wrap--source">
                  <div class="table-responsive">
                    <table class="table table--default table-borderless">
                      <thead>
                        <tr>
                          <th>Seller name</th>
                          <th>Company</th>
                          <th>Product</th>
                          <th>Revenue</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-1.png"
                                  alt="img"
                                />
                              </div>
                              <span>Robert Clinton</span>
                            </div>
                          </td>
                          <td>Samsung</td>
                          <td>Smart Phone</td>
                          <td>$38,536</td>
                          <td>Done</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-2.png"
                                  alt="img"
                                />
                              </div>
                              <span>Michael Johnson </span>
                            </div>
                          </td>
                          <td>Asus</td>
                          <td>Laptop</td>
                          <td>$20,573</td>
                          <td>Done</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-3.png"
                                  alt="img"
                                />
                              </div>
                              <span>Daniel White</span>
                            </div>
                          </td>
                          <td>Google</td>
                          <td>Watch</td>
                          <td>$17,457</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-4.png"
                                  alt="img"
                                />
                              </div>
                              <span>Chris Barin </span>
                            </div>
                          </td>
                          <td>Apple</td>
                          <td>Computer</td>
                          <td>$15,354</td>
                          <td>Done</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="selling-product-img d-flex align-items-center">
                              <div class="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                <img
                                  class=" img-fluid"
                                  src="img/author/robert-5.png"
                                  alt="img"
                                />
                              </div>
                              <span>Daniel Pink</span>
                            </div>
                          </td>
                          <td>Panasonic</td>
                          <td>Sunglass</td>
                          <td>$12,354</td>
                          <td>Done</td>
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
  )
}

export default AllWarehouses
