import { CssBaseline, ThemeProvider } from "@mui/material";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { defaultTheme } from "./themes/default";

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
      <Card />
    </ThemeProvider>
  )
}
