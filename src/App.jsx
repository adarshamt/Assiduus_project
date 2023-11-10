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

import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";

import BarChart from "./Componets/InvoiceChart.jsx";
import CashBarChart from "./Componets/CashFlowChart.jsx";
import AccountTable from "./Componets/AccountTable.jsx";



function App() {
  const [month, setMonth] = React.useState("January");
  const [category, setCategory] = React.useState("");

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };



  // console.log(month);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 

  // const Charthandler = (id) =>{
  //   const inputRef = React.useRef()
  //   const month = inputRef.

  // }
 

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
                <Box sx={{ width: "18rem" ,}}>
                  <FormControl sx={{ m: 1, minWidth: 120 ,  }} size="small">
                    <InputLabel
                      id="demo-select-small-label"
                      sx={{ backgroundColor: "#FFFF", }}
                    >
                      Manage
                    </InputLabel>
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
                    <InputLabel
                      id="demo-select-small-label"
                      sx={{ backgroundColor: "#FFFF" }}
                    >
                      Month
                    </InputLabel>
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
                     
                      <MenuItem   value={"January"}>January</MenuItem>
                      <MenuItem value={"February"}>February</MenuItem>
                      <MenuItem value={"March"}>March</MenuItem>
                      <MenuItem value={"April"}>April</MenuItem>
                      <MenuItem value={"May"}>May</MenuItem>
                      <MenuItem value={"June"}>June</MenuItem>
                      <MenuItem value={"July"}>July</MenuItem>
                      <MenuItem value={"August"}>August</MenuItem>
                      <MenuItem value={"September"}>September</MenuItem>
                      <MenuItem value={"October"}>October</MenuItem>
                      <MenuItem value={"November"}>November</MenuItem>
                      <MenuItem value={"December"}>December</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="componetd_content">
                <Chart  value={month}/>
              </div>
            </div>
            <div className="compnent_">
              <div className="compnent_nav">
                <span>Invoice owned to you </span>
                <Button
                  variant="contained"
                  id="invoice_button"
                  className="invoice_button"
                  sx={{
                    color: "#5dbb66",
                    backgroundColor: "#e8eefd",
                    boxShadow: "none",
                    width: "9rem",
                    height:'2rem',
                    fontSize: "12px",
                    fontWeight:'700',
                    fontFamily:'sans-serif',
                    textTransform: 'none', 
                  


                    '&:hover': {
                      backgroundColor: "#e8eefd", 
                      color:'green',
                      fontFamily:'sans-serif',
                      boxShadow:'none'
                      
                      
                    },
                  
                  }}
                  onClick={handleOpen}
                >
                  {" "}
                  New Sales Invoice
                </Button>
               
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box
                    sx={{
                      ...style,
                      width: 800,
                      height: 400,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      rowGap: "20px",
                      backgroundColor:'#F6F7F9'
                    }}
                  >
                    <h2 id="parent-modal-title">Upload invoice </h2>
                    <input type="file" style={{ border: "2px solid black" }} />
                    <Button variant="contained">Submit</Button>
                  </Box>
                </Modal>
              </div>

              <BarChart  />
            </div>
          </div>
          <div className="dash_content_bottom">
            <div className="compnent_">
              <div className="compnent_nav">
                <span>Total cash flow </span>
                <div style={{display:'flex',width:'6rem',justifyContent:'space-between',alignItems:"center"}}>
                <div style={{width:'10px',height:'10px',borderRadius:'2px',backgroundColor:'green'}}></div><span>In</span>
                <div style={{width:'10px',height:'10px',borderRadius:'2px',backgroundColor:'#34eb37'}}></div><span>Out</span>
                </div>
              </div>
              <BarChart  />

            </div>
            <div className="compnent_">
              <div className="compnent_nav"> <span>Account watchlist</span></div>

              <AccountTable/>

            </div>
          </div>
        </div>

        {/* <h2>Hello world</h2> */}
      </div>
    </>
  );
}

export default App;
