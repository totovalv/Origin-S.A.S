import { AiOutlineDown } from 'react-icons/ai';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, createTheme, styled } from "@mui/material/styles";
import Maindra from '../../fonts/Maiandra GD Regular.ttf'
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import CssBaseline from '@mui/material/CssBaseline';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const theme = createTheme({
  typography: {
    fontFamily: ['"Open Sans"', 'TitilliumWeb', 'Roboto'].join(','),
   },
   overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Maindra],
      },
    }
  }
 })
function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateOrigin1 = () => {
    navigate("/projects/Origin1");
  };
  const handleNavigateOrigin2 = () => {
    navigate("/projects/Origin2");
  };
  const handleNavigateOrigin3 = () => {
    navigate("/projects/Origin3");
  };
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <header className="header">
      <CssBaseline />
          <img className="logoNavbar" src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177149/Logos/LOGOborde_hmuzyc.png" alt="logo" />
          <div className="titulo">ORIGIN HOLDINGS S.A.S</div>
        <Box sx={{ alignSelf:'start', justifySelf: "end", fontFamily: "Segoe UI Symbol",mt:1 }}>
          <Button sx={{ color: "#fff" , ":hover":{
             color: "#FFB200"
          } }}  theme={theme} onClick={handleGoHome}>
            <Typography variant="h5"  >         INICIO</Typography>

          </Button>


          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ color: "#fff" , ":hover":{
              color: "#FFB200"
           } }}
            disableElevation
            onClick={handleClick}
            endIcon={<AiOutlineDown />}
          >
            <Typography variant="h5" >    PROYECTOS</Typography>

          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >      <MenuItem onClick={handleNavigateOrigin3} disableRipple>
              <Typography  > ORIGIN 3</Typography>




            </MenuItem>
            <MenuItem onClick={handleNavigateOrigin2} disableRipple>
              <Typography  >ORIGIN 2</Typography>

            </MenuItem>
            <MenuItem onClick={handleNavigateOrigin1} disableRipple>
              <Typography  >ORIGIN 1</Typography>

            </MenuItem>


          </StyledMenu>
          <Button   sx={{ color: "#fff" , ":hover":{
             color: "#FFB200"
          } }}>
            <Typography variant="h5"  >SOBRE NOSOTROS</Typography></Button>
            <Button   sx={{ color: "#fff" , ":hover":{
             color: "#FFB200"
          } }}>
            <Typography variant="h5"  >CONTÁCTENOS</Typography></Button>
        </Box>
   
      </header>
    </>
  );
}

export default Navbar;
