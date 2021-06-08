import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home/";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyles />
              <Home />
            </>
          </ThemeProvider>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
