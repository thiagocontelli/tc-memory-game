import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/default";

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
    </ThemeProvider>
  )
}
