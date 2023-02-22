const cards = [
  {
    id: 1,
    image: 'https://imgs.casasbahia.com.br/1526864963/1xg.jpg?imwidth=500'
  },
  {
    id: 1,
    image: 'https://imgs.casasbahia.com.br/1526864963/1xg.jpg?imwidth=500'
  },
  {
    id: 2,
    image: 'https://imgs.extra.com.br/1535639145/1xg.jpg?imwidth=500'
  },
  {
    id: 2,
    image: 'https://imgs.extra.com.br/1535639145/1xg.jpg?imwidth=500'
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/1214325113/pt/foto/adorable-dog-in-glasses-working-with-computer.jpg?s=1024x1024&w=is&k=20&c=FAQ9SMGmCKJIIdbO3osulBcNawkU1j4xvE2m71EZtC0='
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/1214325113/pt/foto/adorable-dog-in-glasses-working-with-computer.jpg?s=1024x1024&w=is&k=20&c=FAQ9SMGmCKJIIdbO3osulBcNawkU1j4xvE2m71EZtC0='
  },
  {
    id: 4,
    image: 'https://photos.enjoei.com.br/oculos-de-cachorro-71729785/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81MzM4OTUvMTUwODczNDAxNTIzNWVhMmM3NjU5NTQwMGM3Nzc5NDQuanBn'
  },
  {
    id: 4,
    image: 'https://photos.enjoei.com.br/oculos-de-cachorro-71729785/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81MzM4OTUvMTUwODczNDAxNTIzNWVhMmM3NjU5NTQwMGM3Nzc5NDQuanBn'
  },
]

export const shuffledCards = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)