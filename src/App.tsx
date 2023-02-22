import { Container, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { shuffledCards } from './mocks/cards';
import { defaultTheme } from './themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
      <Container>
        <Grid rowSpacing={4} columnSpacing={4} container>
          {shuffledCards.map(card => (
            <Grid key={card.id} item>
              <Card image={card.image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
