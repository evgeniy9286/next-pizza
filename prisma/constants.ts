export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
];

export const _ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      '/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      '/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: '/000D3A22FA54A81411E9AFA69C1FE796.png',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      '/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: '/000D3A39D824A82E11E9AFA5B328D35A.png',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: '/000D3A22FA54A81411E9AFA67259A324.png',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: '/000D3A39D824A82E11E9AFA61B9A8D61.png',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: '/000D3A22FA54A81411E9AFA6258199C3.png',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: '/000D3A22FA54A81411E9AFA62D5D6027.png',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: '/000D3A21DA51A81211E9EA89958D782B.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/000D3A39D824A82E11E9AFA7AC1A1D67.png',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: '/000D3A22FA54A81411E9AFA60AE6464C.png',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: '/000D3A21DA51A81211E9AFA6795BA2A0.png',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      '/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: '/000D3A22FA54A81411E9AFA63F774C1B.png',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: '/000D3A39D824A82E11E9AFA6B0FFC349.png',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      '/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/11EE7970321044479C1D1085457A36EB.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "/11EE796FF0059B799A17F57A9E64C725.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "/11EE7D618B5C7EC29350069AE9532C6E.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 🌱",
    imageUrl: "/11EED646A9CD324C962C6BEA78124F19.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "/11EE796F96D11392A2F6DD73599921B9.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер 🌶️🌶️",
    imageUrl: "/11EE796FD3B594068F7A752DF8161D04.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "/11EEE20B8772A72A9B60CFB20012C185.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "/11EE79702E2A22E693D96133906FB1B8.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль 👶",
    imageUrl: "/11EE796F93FB126693F96CB1D3E403FB.webp",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "/11EE7D61999EBDA59C10E216430A6093.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "/11EE7D61B044583596548A59078BBD33.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/11EE7D61B0C26A3F85D97A78FEEE00AD (1).webp",
    categoryId: 5,
  },
];