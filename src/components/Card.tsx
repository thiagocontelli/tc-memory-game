import {
  Card as CardMui,
  CardActionArea
} from '@mui/material';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface CardProps {
  image: string
}

export function Card(props: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped((state) => !state);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <CardMui sx={{ width: '200px', height: '200px' }}>
        <CardActionArea onClick={handleClick}>
          <img
            src="back.jpg"
            alt="dog with glasses"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              visibility: 'hidden'
            }}
          />
        </CardActionArea>
      </CardMui>

      <CardMui sx={{ width: '200px', height: '200px' }}>
        <CardActionArea sx={{ width: '100%', height: '100%' }} onClick={handleClick}>
          <img
            src={props.image}
            alt="dog with glasses"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </CardActionArea>
      </CardMui>
    </ReactCardFlip>
  );
}
