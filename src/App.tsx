import { Container, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { ICard, shuffledCards } from './mocks/cards';
import { defaultTheme } from './themes/default';

interface ITurned {
  id: number;
  pair: string;
}

export function App() {
  const [turned, setTurned] = useState<ITurned[]>([]);
  const [cards, setCards] = useState<ICard[]>([...shuffledCards]);

  async function handleTurn(card: ICard) {
    if (turned.length >= 2) return;
    setCards((state) =>
      state.map((it) => {
        if (it.id === card.id)
          return { ...it, isFlipped: true, disabled: true };
        return it;
      })
    );
    setTurned((state) => [...state, { id: card.id, pair: card.pair }]);
    await delay();
    if (turned.length === 1) handleVerify();
  }

  function handleVerify() {
    // TODO
  }

  async function delay() {
    return await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
      {/* <>
        {turned.map((it) => (
          <p>{it.pair}</p>
        ))}
      </> */}
      <Container>
        <Grid rowSpacing={4} columnSpacing={4} container>
          {cards.map((card) => (
            <Grid key={card.id} item>
              <Card
                handleClick={() => {
                  handleTurn(card);
                }}
                isFlipped={card.isFlipped}
                image={card.image}
                isDisabled={card.disabled}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
