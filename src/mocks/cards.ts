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
  {
    id: 9,
    image: 'https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/globo-santa-catarina-cachorra-laika-reproducao-2-1-vale_fixed_large.jpg',
    isFlipped: false,
    pair: 'a5',
    disabled: false
  },
  {
    id: 10,
    image: 'https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/globo-santa-catarina-cachorra-laika-reproducao-2-1-vale_fixed_large.jpg',
    isFlipped: false,
    pair: 'a5',
    disabled: false
  },
  {
    id: 11,
    image: 'http://clubeparacachorros.com.br/wp-content/uploads/2016/02/voce-sabia-que-existem-oculos-para-cachorros.jpg',
    isFlipped: false,
    pair: 'a6',
    disabled: false
  },
  {
    id: 12,
    image: 'http://clubeparacachorros.com.br/wp-content/uploads/2016/02/voce-sabia-que-existem-oculos-para-cachorros.jpg',
    isFlipped: false,
    pair: 'a6',
    disabled: false
  },
  {
    id: 13,
    image: 'https://thumbs.dreamstime.com/b/cachorro-da-velha-franc%C3%AAs-engra%C3%A7ado-usando-%C3%B3culos-de-sol-azuis-no-ver%C3%A3o-dia-quente-do-ouro-lil%C3%A1s-vestindo-215393953.jpg',
    isFlipped: false,
    pair: 'a7',
    disabled: false
  },
  {
    id: 14,
    image: 'https://thumbs.dreamstime.com/b/cachorro-da-velha-franc%C3%AAs-engra%C3%A7ado-usando-%C3%B3culos-de-sol-azuis-no-ver%C3%A3o-dia-quente-do-ouro-lil%C3%A1s-vestindo-215393953.jpg',
    isFlipped: false,
    pair: 'a7',
    disabled: false
  },

  {
    id: 15,
    image: 'http://s2.glbimg.com/EIqX9qyHb5LSxCa1d7jdq79JaEj8p7BOjGALEFsCY5dIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/09/24/cachorro.jpg',
    isFlipped: false,
    pair: 'a8',
    disabled: false
  },
  {
    id: 16,
    image: 'http://s2.glbimg.com/EIqX9qyHb5LSxCa1d7jdq79JaEj8p7BOjGALEFsCY5dIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/09/24/cachorro.jpg',
    isFlipped: false,
    pair: 'a8',
    disabled: false
  },
  {
    id: 17,
    image: 'https://www.meionorte.com/uploads/imagens/2013/7/21/thumb/r-1200-800-q-90-DST-1374437524.jpg',
    isFlipped: false,
    pair: 'a9',
    disabled: false
  },
  {
    id: 18,
    image: 'https://www.meionorte.com/uploads/imagens/2013/7/21/thumb/r-1200-800-q-90-DST-1374437524.jpg',
    isFlipped: false,
    pair: 'a9',
    disabled: false
  },
  {
    id: 19,
    image: 'https://pbs.twimg.com/media/E3lRYnwX0AMuGEJ.jpg',
    isFlipped: false,
    pair: 'a10',
    disabled: false
  },
  {
    id: 20,
    image: 'https://pbs.twimg.com/media/E3lRYnwX0AMuGEJ.jpg',
    isFlipped: false,
    pair: 'a10',
    disabled: false
  },

  {
    id: 21,
    image: 'https://pbs.twimg.com/media/FOYgc2ZX0AMK9cz?format=jpg&name=large',
    isFlipped: false,
    pair: 'a11',
    disabled: false
  },
  {
    id: 22,
    image: 'https://pbs.twimg.com/media/FOYgc2ZX0AMK9cz?format=jpg&name=large',
    isFlipped: false,
    pair: 'a11',
    disabled: false
  },
  {
    id: 23,
    image: 'https://static.vecteezy.com/ti/fotos-gratis/p1/3620025-cachorro-com-sorriso-estranho-e-oculos-escuros-foto.jpg',
    isFlipped: false,
    pair: 'a12',
    disabled: false
  },
  {
    id: 24,
    image: 'https://static.vecteezy.com/ti/fotos-gratis/p1/3620025-cachorro-com-sorriso-estranho-e-oculos-escuros-foto.jpg',
    isFlipped: false,
    pair: 'a12',
    disabled: false
  },
]

export const shuffledCards = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)