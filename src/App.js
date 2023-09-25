import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Settings from "./Components/Settings";
import Header from "./Components/Header";
import Breadcrumb from "./Components/Breadcrumb";
import TotalCards from "./Components/TotalCards";
import TotalGraph from "./Components/TotalGraph";
import TotalTable from "./Components/TotalTable";

function App() {
  return (
    <>
      <div class="mobile-search">
        <form action="https://demo.dashboardmarket.com/" class="search-form">
          <img src="img/svg/search.svg" alt="search" class="svg" />
          <input
            class="form-control me-sm-2 box-shadow-none"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
      </div>
      <div class="mobile-author-actions"></div>
      <header class="header-top">
        <nav class="navbar navbar-light">
          <Header />
        </nav>
      </header>
      <main className="main-content">
        <Sidebar />
        <div class="contents">
          <div class="crm mb-25">
            <div class="container-fluid">
              <div class="row ">
                <Breadcrumb />
                <TotalCards />
                <TotalTable />
                <TotalGraph />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Settings />
    </>
  );
}

export default App;
