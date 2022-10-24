import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}