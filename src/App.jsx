import "./App.css";
import Navbar from "./Componets/Navbar.jsx";
import Sidebar from "./Componets/Sidebar.jsx";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";


function App() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
                <Box sx={{width:'17rem'}}>
                <FormControl sx={{ m: 1, minWidth: 120, }} size="small">
                  <InputLabel id="demo-select-small-label" sx={{backgroundColor:'#FFFF'}} >Manage</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Manage</em>
                    </MenuItem>
                    <MenuItem value={10}>Manage</MenuItem>
                    <MenuItem value={20}>Manage</MenuItem>
                    <MenuItem value={30}>Manage</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label"sx={{backgroundColor:'#FFFF'}}>Month</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>January</MenuItem>
                    <MenuItem value={20}>February</MenuItem>
                    <MenuItem value={30}>March</MenuItem>
                    <MenuItem value={30}>April</MenuItem>
                    <MenuItem value={30}>May</MenuItem>
                    <MenuItem value={30}>June</MenuItem>
                    <MenuItem value={30}>July</MenuItem>
                    <MenuItem value={30}>August</MenuItem>
                    <MenuItem value={30}>September</MenuItem>
                    <MenuItem value={30}>October</MenuItem>
                    <MenuItem value={30}>November</MenuItem>
                    <MenuItem value={30}>December</MenuItem>
                  </Select>
                </FormControl>
                </Box>
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
