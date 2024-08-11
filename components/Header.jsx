import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#121212",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={logo}
                alt="App Logo"
                style={{ width: 70, height: 70, marginRight: 15 }}
              />
              <Typography variant="h6" sx={{ color: "#0ebab1 " }}>
                ChatGenie
              </Typography>
            </Box>
          </Link>

          <Box sx={{ float: "right", display: "flex", gap: "10px" }}>
            {/*Button for Signin*/}
            <Link href="/login">
              <Button
                variant="outlined"
                sx={{ color: "#0ebab1", borderColor: "#0ebab1" }}
              >
                Log In
              </Button>
            </Link>

            {/*Button for Signup*/}
            <Link href="/signup">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0ebab1",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#222831",
                  },
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
