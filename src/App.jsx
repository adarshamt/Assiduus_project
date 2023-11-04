import "./App.css";
import Navbar from "./Componets/Navbar.jsx";
import Sidebar from "./Componets/Sidebar.jsx";

function App() {
  return (
    <>
      <div className="Dash_main_container">
        <div className="sidebar_container">
          <Sidebar />
        </div>
        <div className="navbar_container">
          <Navbar />
        </div>

        <div className="Dash_content">
          <div className="dash_content_top">
            <div className="compnent_">
              <div className="compnent_nav">
                <span>Checking account</span>
              </div>
            </div>
            <div className="compnent_">
              <div className="compnent_nav"></div>
            </div>
          </div>
          <div className="dash_content_bottom">
            <div className="compnent_">
              <div className="compnent_nav"></div>
            </div>
            <div className="compnent_">
              <div className="compnent_nav"></div>
            </div>
          </div>
        </div>

        {/* <h2>Hello world</h2> */}
      </div>
    </>
  );
}

export default App;
