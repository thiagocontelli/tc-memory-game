import {
  Button,
  Container,
  CssBaseline,
  Dialog,
  Grid,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { ICard, shuffledCards } from "./mocks/cards";
import { defaultTheme } from "./themes/default";

interface ITurned {
  id: number;
  pair: string;
}

export function App() {
  const [turned, setTurned] = useState<ITurned[]>([]);
  const [cards, setCards] = useState<ICard[]>([...shuffledCards]);
  const [explode, setExplode] = useState(false);

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
    await delay();
    const first = turned[0];
    const second = turned[1];
    if (first.pair !== second.pair) {
      setCards((state) =>
        state.map((it) => {
          if (it.pair === first.pair) {
            return { ...it, isFlipped: false, disabled: false };
          }
          if (it.pair === second.pair) {
            return { ...it, isFlipped: false, disabled: false };
          }
          return it;
        })
      );
    }
    setTurned([]);
  }

  async function delay() {
    return await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  async function handleNewGame() {
    await resetCards();
    setCards((state) => shuffleCards(state));
  }

  async function resetCards() {
    return await new Promise(async (resolve) => {
      setCards((state) =>
        state.map((it) => {
          return { ...it, isFlipped: false, disabled: false };
        })
      );
      await delay();
      resolve(true);
    });
  }

  function shuffleCards(cards: ICard[]) {
    const shuffledCards = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffledCards;
  }

  useEffect(() => {
    if (turned.length === 2) {
      handleVerify();
    }
  }, [turned]);

  useEffect(() => {
    let count = 0;
    cards.forEach((card) => {
      if (!card.isFlipped) count++;
    });
    if (count === 0) setExplode(true);
  }, [cards]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header handleNewGame={handleNewGame} />
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
      <Modal open={explode}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {explode && <ConfettiExplosion particleCount={150} />}
          <Typography variant="h2">YOU WON!</Typography>
          <Button
            onClick={() => {
              setExplode(false);
              handleNewGame();
            }}
            size="large"
            variant="contained"
          >
            new game
          </Button>
        </div>
      </Modal>
    </ThemeProvider>
  );
}
