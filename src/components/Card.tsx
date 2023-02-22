import { Card as CardMui, CardActionArea } from '@mui/material';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface CardProps {
  image: string;
  isFlipped: boolean;
  handleClick: () => void;
  isDisabled: boolean;
}

export function Card(props: CardProps) {
  return (
    <ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
      <CardMui sx={{ width: '200px', height: '200px' }}>
        <CardActionArea onClick={() => props.handleClick()}>
          <img
            src="back.jpg"
            alt="dog with glasses"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              visibility: 'hidden',
            }}
          />
        </CardActionArea>
      </CardMui>

      <CardMui sx={{ width: '200px', height: '200px' }}>
        <CardActionArea
          sx={{ width: '100%', height: '100%' }}
          onClick={() => props.handleClick()}
          disabled={props.isDisabled}
        >
          <img
            src={props.image}
            alt="dog with glasses"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </CardActionArea>
      </CardMui>
    </ReactCardFlip>
  );
}
