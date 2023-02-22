export interface ICard {
  id: number,
  image: string,
  isFlipped: boolean,
  pair: string,
  disabled: boolean
}

const cards: ICard[] = [
  {
    id: 1,
    image: 'https://imgs.casasbahia.com.br/1526864963/1xg.jpg?imwidth=500',
    isFlipped: false,
    pair: 'a1',
    disabled: false
  },
  {
    id: 2,
    image: 'https://imgs.casasbahia.com.br/1526864963/1xg.jpg?imwidth=500',
    isFlipped: false,
    pair: 'a1',
    disabled: false
  },
  {
    id: 3,
    image: 'https://imgs.extra.com.br/1535639145/1xg.jpg?imwidth=500',
    isFlipped: false,
    pair: 'a2',
    disabled: false
  },
  {
    id: 4,
    image: 'https://imgs.extra.com.br/1535639145/1xg.jpg?imwidth=500',
    isFlipped: false,
    pair: 'a2',
    disabled: false
  },
  {
    id: 5,
    image: 'https://media.istockphoto.com/id/1214325113/pt/foto/adorable-dog-in-glasses-working-with-computer.jpg?s=1024x1024&w=is&k=20&c=FAQ9SMGmCKJIIdbO3osulBcNawkU1j4xvE2m71EZtC0=',
    isFlipped: false,
    pair: 'a3',
    disabled: false
  },
  {
    id: 6,
    image: 'https://media.istockphoto.com/id/1214325113/pt/foto/adorable-dog-in-glasses-working-with-computer.jpg?s=1024x1024&w=is&k=20&c=FAQ9SMGmCKJIIdbO3osulBcNawkU1j4xvE2m71EZtC0=',
    isFlipped: false,
    pair: 'a3',
    disabled: false
  },
  {
    id: 7,
    image: 'https://photos.enjoei.com.br/oculos-de-cachorro-71729785/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81MzM4OTUvMTUwODczNDAxNTIzNWVhMmM3NjU5NTQwMGM3Nzc5NDQuanBn',
    isFlipped: false,
    pair: 'a4',
    disabled: false
  },
  {
    id: 8,
    image: 'https://photos.enjoei.com.br/oculos-de-cachorro-71729785/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81MzM4OTUvMTUwODczNDAxNTIzNWVhMmM3NjU5NTQwMGM3Nzc5NDQuanBn',
    isFlipped: false,
    pair: 'a4',
    disabled: false
  },
]

export const shuffledCards = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)