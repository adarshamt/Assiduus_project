
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";

import "./sidebar.css";
import { Typography } from "@mui/material";

export default function FolderList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <div className="logo_conatiner">
        <img
          style={{ width: "8rem" }}
          src="https://res.cloudinary.com/dcy1nhstg/image/upload/v1699082932/Assiduus_TM_Logo--1-_nt79sc.png"
          alt=""
        />
      </div>
      <div className="sidebar_list"></div>
      <div className="sidbar_list_container">
        <ListItem className="ListItem">
          <DashboardIcon />

          <ListItemText
            primary={
              <Typography style={{ fontWeight: "bold", paddingLeft: "1rem" }}>
                Dashboard
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <AccountBalanceWalletIcon />

          <ListItemText
            primary={
              <Typography style={{ fontWeight: "bold", paddingLeft: "1rem",fontSize:'15px', }}>
                Accounts
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <AttachMoneyIcon />

          <ListItemText
            primary={
              <Typography style={{ fontWeight: "bold", paddingLeft: "1rem",fontSize:'15px' }}>
                Payroll
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <DescriptionIcon />

          <ListItemText
            primary={
              <Typography style={{ fontWeight: "bold", paddingLeft: "1rem",fontSize:'15px' }}>
                Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <PersonIcon />

          <ListItemText
            primary={
              <Typography style={{fontFamily:'sans-serif', fontWeight: "bold", paddingLeft: "1rem",fontSize:'15px'  }}>
                Advisor
              </Typography>
            }
          />
        </ListItem>


        <ListItem>
          <ContactsIcon />

          <ListItemText
            primary={
              <Typography style={{ fontWeight: "bold", paddingLeft: "1rem",fontSize:'15px' }}>
                Contacts
              </Typography>
            }
          />
        </ListItem>
      </div>
    </List>
  );
}
