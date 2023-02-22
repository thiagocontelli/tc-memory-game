import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { defaultTheme } from "./themes/default";

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}
