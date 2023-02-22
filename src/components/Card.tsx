import {
  Card as CardMui,
  CardActionArea
} from '@mui/material';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export function Card() {
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
        <CardActionArea onClick={handleClick}>
          <img
            src="https://cf.shopee.com.br/file/335ae2de8a46c626b554bd7136c95fa6"
            alt="dog with glasses"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </CardActionArea>
      </CardMui>
    </ReactCardFlip>
  );
}
