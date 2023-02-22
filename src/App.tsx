import { Container, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
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
  }

  async function handleVerify() {
    await delay()
    const first = turned[0]
    const second = turned[1]
    if (first.pair !== second.pair) {
      setCards(state => 
        state.map((it) => {
          if (it.pair === first.pair) {
            return { ...it, isFlipped: false, disabled: false }
          }
          if (it.pair === second.pair) {
            return { ...it, isFlipped: false, disabled: false }
          }  
          return it
        })
      )
    }
    setTurned([])
  }

  async function delay() {
    return await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  useEffect(() => {
    if (turned.length === 2) {
      handleVerify()
    }
  }, [turned])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
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
