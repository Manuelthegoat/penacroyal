import React from "react";

const Sidebar = () => {
  return (
    <>
      <div class="sidebar-wrapper">
        <div class="sidebar sidebar-collapse" id="sidebar">
          <div class="sidebar__menu-group">
            <ul class="sidebar_nav">
              <li class="has-child open">
                <a href="#" class="active">
                  <span class="nav-icon uil uil-create-dashboard"></span>
                  <span class="menu-text">Main</span>
                  <span class="toggle-icon"></span>
                </a>
                <ul>
                  <li class="active">
                    <a href="/">Dashboard</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="chat.html" class>
                  <span class="nav-icon uil uil-home"></span>
                  <span class="menu-text">Warehouse</span>
                  <span class="badge badge-success menuItem rounded-circle">
                    3
                  </span>
                </a>
              </li>
              <li class="has-child">
                <a href="#" class>
                  <span class="nav-icon uil uil-window-section"></span>
                  <span class="menu-text">Sales</span>
                  <span class="toggle-icon"></span>
                </a>
                <ul>
                  <li class="l_sidebar">
                    <a href="#" data-layout="light">
                      Add Sales
                    </a>
                  </li>
                  <li class="l_sidebar">
                    <a href="/sales" data-layout="light">
                      All Sales
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href="changelog.html" class>
                  <span class="nav-icon uil uil-arrow-growth"></span>
                  <span class="menu-text">Changelog</span>
                  <span class="badge badge-info-10 menuItem rounded-pill">
                    1.1.6
                  </span>
                </a>
              </li> */}

              <li class="has-child">
                <a href="#" class>
                  <span class="nav-icon uil uil-envelope"></span>
                  <span class="menu-text">Products</span>
                  <span class="toggle-icon"></span>
                </a>
                <ul>
                  <li class>
                    <a href="/addproduct">Add Products</a>
                  </li>
                  <li class>
                    <a href="/products">View Available Products</a>
                  </li>
                </ul>
              </li>
             
              <li class="has-child">
                <a href="#" class>
                  <span class="nav-icon uil uil-user"></span>
                  <span class="menu-text text-initial">Users</span>
                  <span class="toggle-icon"></span>
                </a>
                <ul>
                  <li class>
                    <a href="products.html">Add User</a>
                  </li>
                  <li class>
                    <a href="product-details.html">View Users</a>
                  </li>
                </ul>
              </li>
              <li class="has-child">
                <a href="#" class>
                  <span class="nav-icon uil uil-user"></span>
                  <span class="menu-text">Account</span>
                  <span class="toggle-icon"></span>
                </a>
                <ul>
                  <li class>
                    <a href="projects.html">Account</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
