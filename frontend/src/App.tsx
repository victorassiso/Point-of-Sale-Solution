import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Route, Routes } from "react-router-dom";

import SideBar from "./components/SideBar/sidebar";

import Products from "./pages/Products";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="app">
        <SideBar />
        <main className="content">
          <Routes>
            <Route path="/Products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}
