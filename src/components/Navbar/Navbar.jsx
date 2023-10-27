import { AiOutlineDown } from "react-icons/ai";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, createTheme, styled } from "@mui/material/styles";
import Maindra from "../../fonts/Maiandra GD Regular.ttf";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import CssBaseline from "@mui/material/CssBaseline";
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
      "&:hover": {
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
    fontFamily: ['"Open Sans"', "TitilliumWeb", "Roboto"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Maindra],
      },
    },
  },
});
function Navbar() {
  const [sizeFont, setSizeFont] = React.useState("h5");
  const [sizeIcon, setSizeIcon] = React.useState();

  const mediaQuery1062px = window.matchMedia("(width<=1062px)");
  const mediaQuery828px = window.matchMedia("(width<=828px)");
  const mediaQuery629px = window.matchMedia("(width<=629px)");
  const mediaQuery428px = window.matchMedia("(width<=428px)");
  const mediaQuery414px = window.matchMedia("(width<=414px)");

  const mediaQuery375px = window.matchMedia("(width<=375px)");

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  useEffect(() => {
    if (mediaQuery1062px.matches) setSizeFont("h6");
    if (mediaQuery629px.matches) setSizeFont("subtitle1");  
    if (mediaQuery428px.matches) {
      setSizeFont(10);
      setSizeIcon(10);
    }
    if (mediaQuery414px.matches) {
      setSizeFont(10);
      setSizeIcon(10);
    }
    if (mediaQuery375px.matches) {
      setSizeFont(9);
      setSizeIcon(9);
    }
  }, []);
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
  const handleNavigateContact = () => {
    navigate("/contactus");
  };
  const handleNavigateAbout = () => {
    navigate("/aboutus");
  };
  return (
    <>
      <CssBaseline />
      {mediaQuery828px.matches ? (
        <header className={style.header}>
          <div className={style.parent}>
            <div className={style.materialBox}>
              <Box
                sx={{
                  alignSelf: "start",
                  fontFamily: "Segoe UI Symbol",
                  mt: 1.5,
                }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                  theme={theme}
                  onClick={handleGoHome}
                >
                  <Typography sx={{ fontSize: sizeFont }}> INICIO</Typography>
                </Button>

                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                  disableElevation
                  onClick={handleClick}
                  endIcon={<AiOutlineDown size={sizeIcon} />}
                >
                  <Typography sx={{ fontSize: sizeFont }}>
                    {" "}
                    PROYECTOS
                  </Typography>
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {" "}
                  <MenuItem onClick={handleNavigateOrigin3} disableRipple>
                    <Typography> ORIGIN 3</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleNavigateOrigin2} disableRipple>
                    <Typography>ORIGIN 2</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleNavigateOrigin1} disableRipple>
                    <Typography>ORIGIN 1</Typography>
                  </MenuItem>
                </StyledMenu>
                <Button
                  onClick={handleNavigateAbout}
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: sizeFont,
                      ":hover": {
                        color: "#fff",
                        textDecoration: "none",
                      },
                    }}
                  >
                    SOBRE NOSOTROS
                  </Typography>
                </Button>
                <Button
                  onClick={handleNavigateContact}
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: sizeFont }}>
                    CONTÁCTENOS
                  </Typography>
                </Button>
              </Box>
            </div>
          </div>
          <div className={style.gridMedia828}>
            <a
              href="https://www.originholdingssas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.logoNavbar}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177149/Logos/LOGOborde_hmuzyc.png"
                alt="logo"
              />
            </a>
            <div className={style.title}>ORIGIN HOLDINGS S.A.S</div>
          </div>
        </header>
      ) : (
        <header className={style.header}>
          <div
          onClick={(e)=>handleGoHome()}
          >
            <img
              className={style.logoNavbar}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177149/Logos/LOGOborde_hmuzyc.png"
              alt="logo"
            />
          </div>
          <div className={style.parent}>
            <div className={style.materialBox}>
              <Box
                sx={{
                  alignSelf: "start",
                  fontFamily: "Segoe UI Symbol",
                  mt: 1.5,
                }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                  theme={theme}
                  onClick={handleGoHome}
                >
                  <Typography
                    sx={{
                      fontSize: sizeFont,
                      ":hover": {
                        color: "#ffffffa5",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {" "}
                    INICIO
                  </Typography>
                </Button>

                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                  disableElevation
                  onClick={handleClick}
                  endIcon={<AiOutlineDown size={sizeIcon} />}
                >
                  <Typography
                    sx={{
                      fontSize: sizeFont,
                      ":hover": {
                        color: "#ffffffa5",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {" "}
                    PROYECTOS
                  </Typography>
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {" "}
                  <MenuItem onClick={handleNavigateOrigin3} disableRipple>
                    <Typography
                      sx={{
                        fontSize: sizeFont,
                        ":hover": {
                          color: "#000",
                          textDecoration: "none",
                        },
                      }}
                    >
                      {" "}
                      ORIGIN 3
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleNavigateOrigin2} disableRipple>
                    <Typography
                      sx={{
                        fontSize: sizeFont,
                        ":hover": {
                          color: "#000",
                          textDecoration: "none",
                        },
                      }}
                    >
                      ORIGIN 2
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleNavigateOrigin1} disableRipple>
                    <Typography
                      sx={{
                        fontSize: sizeFont,
                        ":hover": {
                          color: "#000",
                          textDecoration: "none",
                        },
                      }}
                    >
                      ORIGIN 1
                    </Typography>
                  </MenuItem>
                </StyledMenu>
                <Button
                  onClick={handleNavigateAbout}
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: sizeFont,
                      ":hover": {
                        color: "#ffffffa5",
                        textDecoration: "none",
                      },
                    }}
                  >
                    SOBRE NOSOTROS
                  </Typography>
                </Button>
                <Button
                  onClick={handleNavigateContact}
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: sizeFont,
                      ":hover": {
                        color: "#ffffffa5",
                        textDecoration: "none",
                      },
                    }}
                  >
                    CONTÁCTENOS
                  </Typography>
                </Button>
              </Box>
            </div>
            <div className={style.title}>ORIGIN HOLDINGS S.A.S</div>
          </div>
        </header>
      )}
    </>
  );
}

export default Navbar;
