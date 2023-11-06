import "./App.css";
import Navbar from "./Componets/Navbar.jsx";
import Sidebar from "./Componets/Sidebar.jsx";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Chart from "./Componets/Chart.jsx";

import Button from '@mui/material/Button';


import Modal from '@mui/material/Modal';



function App() {
  const [month,setMonth ] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
const [open, setOpen] = React.useState(false);
const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
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
                <Box sx={{width:'18rem'}}>
                <FormControl sx={{ m: 1, minWidth: 120, }} size="small">
                  <InputLabel id="demo-select-small-label" sx={{backgroundColor:'#FFFF'}} >Manage</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={category}
                    label="Age"
                    onChange={handleCategory}
                  >
                    <MenuItem value="">
                      <em>Manage</em>
                    </MenuItem>
                    <MenuItem value={"Manage"}>Manage</MenuItem>
                    <MenuItem value={"Manage"}>Manage</MenuItem>
                    <MenuItem value={"Manage"}>Manage</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label"sx={{backgroundColor:'#FFFF'}}>Month</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={month}
                    label="Age"
                    onChange={handleChangeMonth}
                  >
                    {/* <MenuItem value=""> */}
                      {/* <em>None</em> */}
                    {/* </MenuItem> */}
                    <MenuItem value={"January"}>January</MenuItem>
                    <MenuItem value={"February"}>February</MenuItem>
                    <MenuItem value={'March'}>March</MenuItem>
                    <MenuItem value={'April'}>April</MenuItem>
                    <MenuItem value={'May'}>May</MenuItem>
                    <MenuItem value={'June'}>June</MenuItem>
                    <MenuItem value={'July'}>July</MenuItem>
                    <MenuItem value={'August'}>August</MenuItem>
                    <MenuItem value={'September'}>September</MenuItem>
                    <MenuItem value={'October'}>October</MenuItem>
                    <MenuItem value={'November'}>November</MenuItem>
                    <MenuItem value={'December'}>December</MenuItem>
                  </Select>
                </FormControl>
                </Box>
              </div>
              <div className="componetd_content">
               <Chart/>


              </div>
            </div>
            <div className="compnent_">
              <div className="compnent_nav">
              <span>Invoice owned to you </span>
              <Button onClick={handleOpen} > New Sales Invoice</Button>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800,height:400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
               
              </div>
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
