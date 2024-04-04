
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "../../Components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import Banner from "../../Components/banner";
import Products from "../../Components/products";
import { UIProvider } from "../../context/ui";
import Footer from "../../Components/footer";
import AppDrawer from "../../Components/drawer";
import Promotions from "../../Components/promotions";
import SearchBox from "../../Components/search";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Nuestros Productos</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
