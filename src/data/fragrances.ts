export type Gender = "Для него" | "Для неё" | "Унисекс";

export interface Fragrance {
  id: number;
  brand: string;
  name: string;
  gender: Gender;
  type: string;
  top: string;
  heart: string;
  base: string;
}

export const fragrances: Fragrance[] = [
  // A. BANDERAS
  { id: 1, brand: "A. Banderas", name: "Blue Seduction", gender: "Для него", type: "Свежий", top: "Дыня, Бергамот, Мята, Черная смородина", heart: "Морская вода, Зеленое яблоко, Каппучино, Кардамон, Мускатный орех", base: "Амбра, Древесные ноты" },

  // AJMAL
  { id: 2, brand: "Ajmal", name: "Amber Wood", gender: "Унисекс", type: "Древесный", top: "Кардамон, Лаванда, Яблоко, Белый перец", heart: "Кедр, Корень ириса", base: "Амбра, Древесные ноты, Пачули" },

  // AMOUAGE
  { id: 3, brand: "Amouage", name: "Guidance", gender: "Унисекс", type: "Восточный", top: "Груша, Лесной орех, Олибанум", heart: "Османтус, Роза, Шафран, Жасмин Самбак", base: "Сандал, Ваниль, Серая амбра, Лабданум" },

  // ANNA SUI
  { id: 4, brand: "Anna Sui", name: "Lucky Wish", gender: "Для неё", type: "Цветочный", top: "Ледяной лимон, Танжерин, Помело", heart: "Бамбук, Фрезия, Орхидея, Цветок апельсина", base: "Амбра, Мускус, Сандал" },

  // ATELIER COLOGNE
  { id: 5, brand: "Atelier Cologne", name: "Clementic California", gender: "Унисекс", type: "Цитрусовый", top: "Клементин, Мандарин, Плоды можжевельника", heart: "Базилик, Звездчатый анис, Перец", base: "Кипарис, Ветивер, Сандал" },

  // ATTAR COLLECTION
  { id: 6, brand: "Attar Collection", name: "Crystal Love", gender: "Для неё", type: "Гурманский", top: "Фруктовые ноты, Роза", heart: "Молочный шоколад, Белый мускус, Мускатный орех", base: "Бурбонская ваниль, Бобы тонка" },
  { id: 7, brand: "Attar Collection", name: "Hayati", gender: "Для неё", type: "Гурманский", top: "Малина, Ягоды, Ананас", heart: "Взбитые сливки, Мёд, Слива, Черная смородина, Цветочные ноты", base: "Мороженое, Ваниль, Белый мускус" },
  { id: 8, brand: "Attar Collection", name: "Musk Kashmir", gender: "Унисекс", type: "Мускусный", top: "Белый мускус, Сандал", heart: "Гардения, Гвоздика", base: "Белый перец" },

  // BOADICEA THE VICTORIOUS
  { id: 9, brand: "Boadicea The Victorious", name: "Heroine", gender: "Для неё", type: "Цветочный", top: "Фиалка, Апельсин, Бергамот", heart: "Жасмин, Роза", base: "Ваниль, Мускус, Корень ириса, Ветивер" },
  { id: 10, brand: "Boadicea The Victorious", name: "Aurica", gender: "Унисекс", type: "Восточный", top: "Ананас, Мандарин, Листья кедра, Иланг-иланг", heart: "Календула, Уд, Жасмин, Роза", base: "Мускус, Ветивер, Ваниль, Мох, Сандал, Пачули, Амбра" },

  // BVLGARI
  { id: 11, brand: "Bvlgari", name: "Tygar", gender: "Для него", type: "Древесный", top: "Грейпфрут", heart: "Древесный аккорд", base: "Ambrox" },

  // BY KILIAN
  { id: 12, brand: "By Kilian", name: "Rolling in Love", gender: "Для неё", type: "Цветочный", top: "Амбретта, Миндальное молочко", heart: "Ирис, Фрезия", base: "Бобы тонка, Ваниль, Мускус" },
  { id: 13, brand: "By Kilian", name: "Bad Boys", gender: "Для него", type: "Пряный", top: "Кока-кола, Лайм", heart: "Корица, Мускатный орех, Яблоко", base: "Кедр, Amberwood" },
  { id: 14, brand: "By Kilian", name: "Black Phantom", gender: "Унисекс", type: "Гурманский", top: "Темный шоколад, Ром, Карамель", heart: "Кофе, Сахарный тростник, Миндаль", base: "Сандал, Гелиотроп" },
  { id: 15, brand: "By Kilian", name: "Good Girl Gone Bad", gender: "Для неё", type: "Цветочный", top: "Османтус, Жасмин, Майская роза", heart: "Тубероза, Нарцисс", base: "Амбра, Кедр" },
  { id: 16, brand: "By Kilian", name: "Good Girl Gone Bad Extreme", gender: "Для неё", type: "Цветочный", top: "Османтус, Жасмин, Майская роза", heart: "Тубероза, Молоко, Нарцисс", base: "Амбра, Белый кедр" },
  { id: 17, brand: "By Kilian", name: "Playing With The Devil", gender: "Для неё", type: "Фруктово-цветочный", top: "Черная смородина, Белый персик, Личи, Красный апельсин", heart: "Красный перец, Роза, Жасмин", base: "Кедр, Ваниль, Сандал, Пачули, Бобы тонка" },
  { id: 18, brand: "By Kilian", name: "Intoxicated", gender: "Унисекс", type: "Пряный", top: "Кардамон", heart: "Мускатный орех", base: "Корица, Кофе" },
  { id: 19, brand: "By Kilian", name: "Love Don't Be Shy", gender: "Для неё", type: "Цветочный", top: "Нероли, Бергамот, Розовый перец", heart: "Цветок апельсина, Жимолость, Жасмин, Ирис, Роза", base: "Сахар, Ваниль, Карамель, Мускус" },
  { id: 20, brand: "By Kilian", name: "Princess", gender: "Для неё", type: "Гурманский", top: "Лимон", heart: "Зеленый чай, Имбирь, Персик, Жасмин, Яблоко", base: "Маршмеллоу, Ваниль, Бензоин" },
  { id: 21, brand: "By Kilian", name: "Vodka On The Rocks", gender: "Унисекс", type: "Свежий", top: "Кориандр, Кардамон, Альдегиды", heart: "Ревень, Ландыш, Розовая роза", base: "Ambroxan, Дубовый мох, Сандал" },
  { id: 22, brand: "By Kilian", name: "Angel's Share", gender: "Унисекс", type: "Гурманский", top: "Коньяк", heart: "Корица, Бобы тонка, Дуб", base: "Пралине, Ваниль, Сандал" },
  { id: 23, brand: "By Kilian", name: "Apple Brandy On The Rocks", gender: "Унисекс", type: "Гурманский", top: "Кардамон, Бергамот", heart: "Яблоко, Ром, Ананас, Бренди, Ваниль, Мох", base: "Ambroxan, Кедр" },

  // BYREDO
  { id: 24, brand: "Byredo", name: "Bal d'Afrique", gender: "Унисекс", type: "Цветочный", top: "Бархатцы, Лимон, Черная смородина, Бергамот", heart: "Фиалка, Цикламен, Жасмин", base: "Ветивер, Амбра, Мускус, Вирджинский кедр" },
  { id: 25, brand: "Byredo", name: "Bibliotheque", gender: "Унисекс", type: "Древесный", top: "Слива, Персик", heart: "Фиалка, Пион", base: "Кожа, Ваниль, Пачули, Мускус" },
  { id: 26, brand: "Byredo", name: "Blanche", gender: "Для неё", type: "Цветочный", top: "Альдегиды, Роза, Розовый перец", heart: "Пион, Фиалка, Цветок апельсина", base: "Мускус, Древесные ноты, Сандал" },
  { id: 27, brand: "Byredo", name: "Gypsy Water", gender: "Унисекс", type: "Древесный", top: "Можжевельник, Лимон, Бергамот, Перец", heart: "Иглы сосны, Ладан, Корень ириса", base: "Сандал, Ваниль, Амбра" },
  { id: 28, brand: "Byredo", name: "La Tulipe", gender: "Для неё", type: "Цветочный", top: "Фрезия, Цикламен, Ревень", heart: "Розовый тюльпан", base: "Зеленые ноты, Ветивер, Древесные ноты" },
  { id: 29, brand: "Byredo", name: "Mojave Ghost", gender: "Унисекс", type: "Древесный", top: "Саподилла, Амбретта", heart: "Магнолия, Фиалка, Сандал", base: "Серая амбра, Кедр" },

  // CAROLINA HERRERA
  { id: 30, brand: "Carolina Herrera", name: "Good Girl", gender: "Для неё", type: "Цветочный", top: "Миндаль, Кофе, Бергамот, Лимон", heart: "Тубероза, Жасмин Самбак, Корень ириса, Болгарская роза", base: "Бобы тонка, Какао, Ваниль, Пралине, Сандал, Амбра, Мускус" },

  // CHANEL
  { id: 31, brand: "Chanel", name: "Coco Mademoiselle", gender: "Для неё", type: "Восточный", top: "Апельсин, Мандарин, Бергамот, Цветок апельсина", heart: "Турецкая роза, Жасмин, Мимоза, Иланг-иланг", base: "Пачули, Белый мускус, Ваниль, Ветивер, Бобы тонка" },
  { id: 32, brand: "Chanel", name: "Allure Homme Sport", gender: "Для него", type: "Свежий", top: "Апельсин, Морские ноты, Красный мандарин", heart: "Перец, Нероли, Кедр", base: "Бобы тонка, Ваниль, Белый мускус, Амбра, Ветивер" },
  { id: 33, brand: "Chanel", name: "Chance", gender: "Для неё", type: "Цветочный", top: "Розовый перец", heart: "Жасмин, Ирис", base: "Пачули, Мускус, Ваниль" },
  { id: 34, brand: "Chanel", name: "Chance Eau Fraiche", gender: "Для неё", type: "Цветочный", top: "Лимон, Кедр, Цитрон", heart: "Водяной гиацинт, Розовый перец, Жасмин", base: "Пачули, Белый мускус, Ветивер, Амбра" },
  { id: 35, brand: "Chanel", name: "Chance Eau Tendre", gender: "Для неё", type: "Цветочный", top: "Айва, Грейпфрут", heart: "Гиацинт, Жасмин", base: "Мускус, Ирис, Вирджинский кедр, Амбра" },

  // CHRISTIAN DIOR
  { id: 36, brand: "Christian Dior", name: "J'Adore", gender: "Для неё", type: "Цветочный", top: "Груша, Дыня, Магнолия, Персик, Мандарин, Бергамот", heart: "Жасмин, Ландыш, Тубероза, Фрезия, Роза, Орхидея", base: "Мускус, Ваниль, Ежевика, Кедр" },
  { id: 37, brand: "Christian Dior", name: "Homme Cologne 2013", gender: "Для него", type: "Цитрусовый", top: "Калабрийский бергамот", heart: "Цветок грейпфрута", base: "Мускус" },

  // CREED
  { id: 38, brand: "Creed", name: "Aventus Cologne", gender: "Для него", type: "Цитрусовый", top: "Мандарин, Имбирь, Розовый перец", heart: "Ветивер, Пачули, Сандал", base: "Мускус, Береза, Бобы тонка, Стиракс" },
  { id: 39, brand: "Creed", name: "Aventus", gender: "Для него", type: "Фруктово-древесный", top: "Ананас, Черная смородина, Бергамот, Яблоко", heart: "Береза, Пачули, Марокканский жасмин, Роза", base: "Мускус, Дубовый мох, Серая амбра, Ваниль" },
  { id: 40, brand: "Creed", name: "Silver Mountain Water", gender: "Унисекс", type: "Свежий", top: "Бергамот, Мандарин", heart: "Зелёный чай, Чёрная смородина", base: "Мускус, Петитрейн, Сандал, Гальбанум" },
  { id: 41, brand: "Creed", name: "Virgin Island Water", gender: "Унисекс", type: "Свежий", top: "Кокос, Лайм, Белый бергамот, Сицилийский мандарин", heart: "Имбирь, Иланг-иланг, Гибискус, Индийский жасмин", base: "Белый ром, Сахарный тростник, Мускус" },

  // CLIVE CHRISTIAN
  { id: 42, brand: "Clive Christian", name: "1872", gender: "Для него", type: "Цветочный", top: "Мандарин, Бергамот, Нектарин, Лайм, Базилик, Имбирь, Кориандр", heart: "Лаванда, Роза, Фрезия, Фиалка, Орхидея, Жасмин, Ландыш", base: "Ветивер, Мох, Кедр, Пачули, Амбра, Мускус, Шафран" },

  // CHOPARD
  { id: 43, brand: "Chopard", name: "Vetiver d'Haiti au The Vert", gender: "Для него", type: "Древесный", top: "Зеленый чай, Амбра", heart: "Ветивер, Кедр", base: "Древесные ноты, Мускус" },

  // DOLCE & GABBANA
  { id: 44, brand: "Dolce & Gabbana", name: "Imperatrice", gender: "Для неё", type: "Цветочный", top: "Арбуз, Клубника", heart: "Розовый пион, Дамасская роза, Магнолия, Цикламен", base: "Мускус, Древесные ноты, Сандал" },

  // ESCENTRIC MOLECULES
  { id: 45, brand: "Escentric Molecules", name: "Molecule 01 + Black Tea", gender: "Унисекс", type: "Свежий", top: "Черный чай", heart: "Iso E Super", base: "Iso E Super" },
  { id: 46, brand: "Escentric Molecules", name: "Molecule 01 + Mandarin", gender: "Унисекс", type: "Цитрусовый", top: "Мандарин", heart: "Iso E Super", base: "Iso E Super" },
  { id: 47, brand: "Escentric Molecules", name: "Black Edition", gender: "Унисекс", type: "Пряный", top: "Розовый перец, Лайм", heart: "Iso E Super, Ладан", base: "Древесные ноты" },
  { id: 48, brand: "Escentric Molecules", name: "Escentric 01", gender: "Унисекс", type: "Свежий", top: "Лимон, Розовый перец", heart: "Iso E Super, Ирис", base: "Iso E Super" },
  { id: 49, brand: "Escentric Molecules", name: "Escentric 02", gender: "Унисекс", type: "Цветочный", top: "Мандарин", heart: "Iso E Super, Ambroxan, Ирис, Жасмин", base: "Ambroxan" },

  // ESSENTIAL PARFUMS
  { id: 50, brand: "Essential Parfums", name: "Bois Imperial", gender: "Унисекс", type: "Древесный", top: "Базилик, Грейпфрут, Сычуаньский перец", heart: "Ветивер, Акигалавуд", base: "Амбра, Пачули" },

  // EX NIHILO
  { id: 51, brand: "Ex Nihilo", name: "Blue Talisman", gender: "Унисекс", type: "Цветочный", top: "Бергамот, Имбирь, Мандарин, Груша", heart: "Флердоранж, Джордживуд", base: "Акигалавуд, Мускус, Амбра" },
  { id: 52, brand: "Ex Nihilo", name: "Fleur Narcotique", gender: "Для неё", type: "Цветочный", top: "Личи, Бергамот, Персик", heart: "Пион, Цветок апельсина, Жасмин", base: "Мускус, Мох, Древесные ноты" },
  { id: 53, brand: "Ex Nihilo", name: "Lust In Paradise", gender: "Для неё", type: "Цветочный", top: "Розовый перец", heart: "Пион, Личи", base: "Мускус, Белый кедр, Амбра" },
  { id: 54, brand: "Ex Nihilo", name: "Sweet Morphine", gender: "Для неё", type: "Цветочный", top: "Сирень, Бергамот", heart: "Абсолют мимозы, Ирис, Роза", base: "Гелиотроп, Бурбонская ваниль, Ветивер, Пачули" },

  // FRANCK BOCLET
  { id: 55, brand: "Franck Boclet", name: "Cocaine", gender: "Унисекс", type: "Цветочный", top: "Карамель, Табак, Красные ягоды, Горький апельсин", heart: "Тубероза, Лилия, Орхидея", base: "Масло монои, Ваниль, Пачули" },

  // GUERLAIN
  { id: 56, brand: "Guerlain", name: "Aqua Allegoria Mandarine Basilic", gender: "Для неё", type: "Цитрусовый", top: "Клементин, Горький апельсин", heart: "Мандарин, Базилик, Ромашка", base: "Сандал, Амбра" },

  // GIORGIO ARMANI
  { id: 57, brand: "Giorgio Armani", name: "Acqua Di Gio", gender: "Для него", type: "Свежий", top: "Лайм, Лимон, Бергамот, Апельсин, Нероли", heart: "Морские ноты, Жасмин, Персик, Гиацинт", base: "Белый мускус, Кедр, Дубовый мох, Пачули, Амбра" },
  { id: 58, brand: "Giorgio Armani", name: "My Way", gender: "Для неё", type: "Цветочный", top: "Цветок апельсина, Бергамот", heart: "Тубероза, Индийский жасмин", base: "Мадагаскарская ваниль, Белый мускус, Вирджинский кедр" },
  { id: 59, brand: "Giorgio Armani", name: "Si", gender: "Для неё", type: "Цветочный", top: "Лист черной смородины", heart: "Майская роза, Фрезия", base: "Ваниль, Пачули, Древесные ноты, Ambroxan" },

  // GUCCI
  { id: 60, brand: "Gucci", name: "Flora", gender: "Для неё", type: "Цветочный", top: "Пион, Цитрусы, Мандарин", heart: "Османтус, Роза", base: "Сандал, Пачули, Розовый перец" },
  { id: 61, brand: "Gucci", name: "Flora Jasmin", gender: "Для неё", type: "Цветочный", top: "Итальянский мандарин, Бергамот, Черный перец", heart: "Жасмин, Жасмин Самбак, Магнолия, Дамасская роза", base: "Бензоин, Австралийский сандал, Пачули" },

  // GIVENCHY
  { id: 62, brand: "Givenchy", name: "L'Interdit", gender: "Для неё", type: "Цветочный", top: "Груша, Бергамот", heart: "Тубероза, Цветок апельсина, Жасмин Самбак", base: "Пачули, Ваниль, Ambroxan, Ветивер" },

  // HERMES
  { id: 63, brand: "Hermès", name: "Terre D'Hermes", gender: "Для него", type: "Древесный", top: "Апельсин, Бензоин, Ветивер", heart: "Грейпфрут, Кедр", base: "Пачули, Пеларгония, Перец" },

  // HFC
  { id: 64, brand: "HFC", name: "Devil's Intrigue", gender: "Унисекс", type: "Восточный", top: "Белый чай, Османтус", heart: "Сандал, Цветок апельсина", base: "Ваниль, Кашмеран, Древесные ноты" },

  // INITIO
  { id: 65, brand: "Initio", name: "Absolute Aphrodisiac", gender: "Унисекс", type: "Восточный", top: "Белые цветы", heart: "Амбра, Ваниль", base: "Кастореум, Кожа, Мускус" },
  { id: 66, brand: "Initio", name: "Oud For Greatness", gender: "Унисекс", type: "Восточный", top: "Шафран, Мускатный орех, Лаванда", heart: "Уд", base: "Пачули, Мускус" },
  { id: 67, brand: "Initio", name: "Psychedelic Love", gender: "Унисекс", type: "Цветочный", top: "Иланг-иланг, Бергамот", heart: "Гелиотроп, Болгарская роза", base: "Мирра, Сандал" },
  { id: 68, brand: "Initio", name: "Side Effect", gender: "Унисекс", type: "Гурманский", top: "Ваниль, Табак", heart: "Ром", base: "Корица" },
  { id: 69, brand: "Initio", name: "Oud For Happiness", gender: "Унисекс", type: "Восточный", top: "Бергамот, Имбирь", heart: "Лакричник, Уд, Кедр", base: "Ваниль, Мускус, Травы" },
  { id: 70, brand: "Initio", name: "Musk Therapy", gender: "Унисекс", type: "Мускусный", top: "Бергамот, Мандарин, Черная смородина", heart: "Магнолия, Белый сандал", base: "Белый и розовый мускус" },
  { id: 71, brand: "Initio", name: "Narcotic Delight", gender: "Унисекс", type: "Восточный", top: "Вишня, Розовый перец, Черный перец", heart: "Коньяк, Роза", base: "Табак, Ваниль, Кедр, Бобы тонка, Пачули" },

  // JO MALONE
  { id: 72, brand: "Jo Malone", name: "Wood Sage & Sea Salt", gender: "Унисекс", type: "Свежий", top: "Грейпфрут, Шалфей", heart: "Амбретта, Морские водоросли, Соль", base: "Амбра" },
  { id: 73, brand: "Jo Malone", name: "Wild Bluebell", gender: "Для неё", type: "Цветочный", top: "Колокольчик, Гвоздика, Роса, Зеленые листья", heart: "Персик, Хурма", base: "Мускус, Пудровые ноты" },
  { id: 74, brand: "Jo Malone", name: "Blackberry & Bay", gender: "Унисекс", type: "Фруктово-древесный", top: "Грейпфрут, Цветочные ноты", heart: "Ежевика, Лавр", base: "Белый кедр, Ветивер" },
  { id: 75, brand: "Jo Malone", name: "Myrrh & Tonka", gender: "Унисекс", type: "Восточный", top: "Лаванда", heart: "Мирра", base: "Бобы тонка, Ваниль, Миндаль" },
  { id: 76, brand: "Jo Malone", name: "Dark Amber & Ginger Lily", gender: "Унисекс", type: "Восточный", top: "Имбирь, Черный кардамон, Розовый перец", heart: "Водяная лилия, Орхидея, Жасмин, Роза", base: "Сандал, Черная амбра, Пачули, Кожа" },
  { id: 77, brand: "Jo Malone", name: "Rose Water & Vanilla", gender: "Для неё", type: "Гурманский", top: "Нероли, Петитрейн", heart: "Лукум", base: "Ваниль, Пачули, Мускус" },

  // JULIETTE HAS A GUN
  { id: 78, brand: "Juliette Has A Gun", name: "NOT A PERFUME", gender: "Унисекс", type: "Мускусный", top: "Ambroxan", heart: "Cetalox", base: "Ambroxan, Cetalox" },

  // KAJAL
  { id: 79, brand: "Kajal", name: "Almaz", gender: "Для неё", type: "Цветочный", top: "Черная смородина, Калабрийский бергамот, Лимон, Мандарин", heart: "Малина, Турецкая роза, Корень ириса, Гелиотроп", base: "Тростниковый сахар, Мадагаскарская ваниль, Бобы тонка, Сандал, Мускус, Амбра" },
  { id: 80, brand: "Kajal", name: "Dahab", gender: "Унисекс", type: "Восточный", top: "Ананас, Красные ягоды, Яблоко, Кардамон, Кориандр", heart: "Болгарская роза, Турецкая роза, Магнолия, Жасмин самбак", base: "Мускус, Ваниль, Амбра, Кашемировое дерево, Кедр, Мох" },
  { id: 81, brand: "Kajal", name: "Lamar", gender: "Для неё", type: "Цветочный", top: "Фрезия, Перец, Яблоко", heart: "Гелиотроп, Фиалка, Жасмин, Гибискус, Роза", base: "Замша, Сандал, Кедр, Ладан, Лабданум" },

  // LACOSTE
  { id: 82, brand: "Lacoste", name: "Pour Femme", gender: "Для неё", type: "Цветочный", top: "Груша, Смородиновые почки, Розовый перец, Апельсин, Бергамот", heart: "Ирис, Тубероза, Иланг-иланг, Цветок апельсина, Жасмин Самбак", base: "Взбитые сливки, Лесной орех" },

  // LANCOME
  { id: 83, brand: "Lancôme", name: "La Vie Est Belle", gender: "Для неё", type: "Восточный", top: "Кедр, Уд", heart: "Шалфей, Лаванда, Розмарин", base: "Пачули, Ветивер" },

  // LATTAFA
  { id: 84, brand: "Lattafa", name: "Sheikh Al Shuyukh", gender: "Для него", type: "Древесный", top: "Кедр, Уд", heart: "Шалфей, Лаванда, Розмарин", base: "Пачули, Ветивер" },

  // LOUIS VUITTON
  { id: 85, brand: "Louis Vuitton", name: "Afternoon Swim", gender: "Унисекс", type: "Цитрусовый", top: "Апельсин, Бергамот, Мандарин", heart: "Апельсин", base: "Мандарин" },
  { id: 86, brand: "Louis Vuitton", name: "Spell On You", gender: "Для неё", type: "Цветочный", top: "Фиалка, Тосканский ирис, Зеленые ноты", heart: "Роза, Тосканский ирис, Китайский жасмин", base: "Персик, Белый мускус, Акация" },
  { id: 87, brand: "Louis Vuitton", name: "On The Beach", gender: "Унисекс", type: "Свежий", top: "Юзу, Нероли", heart: "Розмарин, Чабрец, Песок, Розовый перец", base: "Кипарис" },
  { id: 88, brand: "Louis Vuitton", name: "L'Immensite", gender: "Для него", type: "Свежий", top: "Грейпфрут, Имбирь, Бергамот", heart: "Водные ноты, Розмарин, Шалфей, Герань", base: "Амброксан, Амбра, Лабданум" },

  // LE LABO
  { id: 89, brand: "Le Labo", name: "Another 13", gender: "Унисекс", type: "Мускусный", top: "Груша, Яблоко, Цитрусы", heart: "Амбретта, Мох, Жасмин", base: "Изо Е супер, Цеталокс, Белые мускусы" },

  // MAISON FRANCIS KURKDJIAN
  { id: 90, brand: "Maison Francis Kurkdjian", name: "Baccarat Rouge 540 Extrait", gender: "Унисекс", type: "Восточный", top: "Горький миндаль, Шафран", heart: "Кедр, Египетский жасмин", base: "Мускус, Серая амбра, Древесные ноты" },
  { id: 91, brand: "Maison Francis Kurkdjian", name: "Baccarat Rouge 540", gender: "Унисекс", type: "Восточный", top: "Шафран, Жасмин", heart: "Amberwood, Серая амбра", base: "Еловая смола, Кедр" },
  { id: 92, brand: "Maison Francis Kurkdjian", name: "Gentle Fluidity Silver", gender: "Унисекс", type: "Древесный", top: "Мускатный орех, Ягоды можжевельника", heart: "Кориандр", base: "Амбра, Ваниль, Мускус" },

  // MARC-BARROIS
  { id: 93, brand: "Marc-Barrois", name: "Encelade", gender: "Унисекс", type: "Древесный", top: "Итальянский мандарин, Лист фиалки", heart: "Бессмертник, Китайский османтус, Шафран", base: "Замша, Akigalawood, Минеральные ноты" },
  { id: 94, brand: "Marc-Barrois", name: "Ganymede", gender: "Унисекс", type: "Древесный", top: "Итальянский мандарин, Лист фиалки", heart: "Бессмертник, Китайский османтус, Шафран", base: "Замша, Akigalawood, Минеральные ноты" },

  // MANCERA
  { id: 95, brand: "Mancera", name: "Roses Vanille", gender: "Для неё", type: "Цветочный", top: "Итальянский лимон", heart: "Турецкая роза", base: "Ваниль, Белый мускус, Кедр" },

  // MEMO PARIS
  { id: 96, brand: "Memo Paris", name: "Kedu", gender: "Для неё", type: "Цветочный", top: "Грейпфрут, Нероли, Мандарин", heart: "Мате, Фрезия, Роза, Пион", base: "Кунжут, Белый мускус, Мох" },
  { id: 97, brand: "Memo Paris", name: "Irish Leather", gender: "Унисекс", type: "Кожаный", top: "Кожа", heart: "Амбра, Ягоды можжевельника", base: "Бобы тонка, Мате" },
  { id: 98, brand: "Memo Paris", name: "Italian Leather", gender: "Унисекс", type: "Кожаный", top: "Кожа, Ваниль, Лист томата", heart: "Корень ириса, Шалфей мускатный, Ладан", base: "Бензоин, Кожа, Мускус" },
  { id: 99, brand: "Memo Paris", name: "Marfa", gender: "Для неё", type: "Цветочный", top: "Цветок апельсина, Мандарин", heart: "Тубероза, Иланг-иланг", base: "Ваниль, Сандал, Белый мускус, Кедр" },

  // MONTALE
  { id: 100, brand: "Montale", name: "Chocolate Greedy", gender: "Унисекс", type: "Гурманский", top: "Кофе, Какао", heart: "Бобы тонка, Горький апельсин", base: "Ваниль, Сухофрукты" },

  // NASOMATTO
  { id: 101, brand: "Nasomatto", name: "Black Afgano", gender: "Унисекс", type: "Восточный", top: "Конопля, Зеленые ноты", heart: "Смолы, Табак, Кофе", base: "Уд, Ладан" },

  // NEJMA
  { id: 102, brand: "Nejma 7", name: "Nejma", gender: "Унисекс", type: "Цитрусово-цветочный", top: "Бергамот, Мандарин, Розовый грейпфрут", heart: "Кокос, Нероли, Какао", base: "Белый мускус, Пачули" },

  // NISHANE
  { id: 103, brand: "Nishane", name: "Hacivat", gender: "Унисекс", type: "Фруктово-древесный", top: "Ананас, Грейпфрут, Бергамот", heart: "Белый кедр, Жасмин, Пачули", base: "Дубовый мох, Древесные ноты" },
  { id: 104, brand: "Nishane", name: "Wulong Cha", gender: "Унисекс", type: "Свежий", top: "Бергамот, Апельсин, Мандарин", heart: "Чай улун, Мускатный орех", base: "Инжир, Мускус" },

  // ORTO PARISI
  { id: 105, brand: "Orto Parisi", name: "Megamare", gender: "Унисекс", type: "Свежий", top: "Морские водоросли", heart: "Имбирь", base: "Амбра, Морские ноты" },

  // ORMONDE JAYNE
  { id: 106, brand: "Ormonde Jayne", name: "Montabaco", gender: "Унисекс", type: "Древесный", top: "Кардамон, Можжевельник, Бергамот, Апельсин", heart: "Чай, Магнолия, Роза, Фиалка", base: "Лист табака, Замша, Серая амбра, Сандал, Бобы тонка" },

  // PACO RABANNE
  { id: 107, brand: "Paco Rabanne", name: "Invictus", gender: "Для него", type: "Свежий", top: "Морские ноты, Грейпфрут, Мандарин", heart: "Лавр, Жасмин", base: "Серая амбра, Гаяк, Дубовый мох, Пачули" },
  { id: 108, brand: "Paco Rabanne", name: "One Million", gender: "Для него", type: "Пряный", top: "Красный мандарин, Грейпфрут, Мята", heart: "Корица, Роза, Пряности", base: "Амбра, Кожа, Древесные ноты" },

  // PARFUMERIE ATELIER
  { id: 109, brand: "Parfumerie Atelier", name: "Desert Silence", gender: "Унисекс", type: "Восточный", top: "Перец, Ежевика", heart: "Пачули, Роза, Нагармота", base: "Бензоин, Сандал, Ваниль" },

  // PARFUMS DE MARLY
  { id: 110, brand: "Parfums de Marly", name: "Delina", gender: "Для неё", type: "Цветочный", top: "Личи, Ревень, Бергамот, Мускатный орех", heart: "Турецкая роза, Пион, Мускус, Ваниль", base: "Кашмеран, Кедр, Ветивер, Ладан" },
  { id: 111, brand: "Parfums de Marly", name: "Layton", gender: "Для него", type: "Цветочный", top: "Яблоко, Лаванда, Мандарин, Бергамот", heart: "Герань, Фиалка, Жасмин", base: "Ваниль, Кардамон, Сандал, Перец, Пачули" },
  { id: 112, brand: "Parfums de Marly", name: "Delina La Rosee", gender: "Для неё", type: "Цветочный", top: "Бергамот, Груша, Личи", heart: "Пион, Турецкая роза, Водные ноты", base: "Белый мускус, Ветивер, Древесные ноты" },
  { id: 113, brand: "Parfums de Marly", name: "Pegasus", gender: "Для него", type: "Восточный", top: "Гелиотроп, Кумин, Бергамот", heart: "Горький миндаль, Лаванда, Жасмин", base: "Ваниль, Сандал, Амбра" },
  { id: 114, brand: "Parfums de Marly", name: "Percival", gender: "Для него", type: "Свежий", top: "Лаванда, Мандарин, Бергамот, Герань", heart: "Фиалка, Кориандр, Жасмин, Корица", base: "Ambroxan, Amberwood, Мускус, Clearwood" },

  // PARLE MOI DE PARFUM
  { id: 115, brand: "Parle Moi de Parfum", name: "Mile High 38", gender: "Унисекс", type: "Гурманский", top: "Ананас", heart: "Бессмертник", base: "Бобы тонка, Пачули" },

  // PUREDISTANCE
  { id: 116, brand: "Puredistance", name: "White № 06", gender: "Унисекс", type: "Цветочный", top: "Бергамот, Роза", heart: "Бобы тонка, Корень ириса, Сандаловое дерево", base: "Ветивер, Мускус, Пачули" },

  // RICHARD
  { id: 117, brand: "Richard", name: "White Chocolate", gender: "Для неё", type: "Гурманский", top: "Мандарин, Мускатный орех", heart: "Белый шоколад, Ваниль", base: "Цветок миндаля, Цветок вишни, Мимоза" },

  // ROJA DOVE
  { id: 118, brand: "Roja Dove", name: "Elysium Intense", gender: "Для него", type: "Свежий", top: "Ревень, Грейпфрут, Бергамот, Лайм, Лаванда", heart: "Черная смородина, Цветок апельсина, Ландыш, Тубероза, Жасмин", base: "Ветивер, Мускус, Сухая древесина, Кедр, Ваниль, Серая амбра, Кожа" },
  { id: 119, brand: "Roja Dove", name: "Elysium", gender: "Для него", type: "Свежий", top: "Грейпфрут, Лимон, Бергамот, Лайм, Чабрец", heart: "Ветивер, Черная смородина, Яблоко, Кедр, Роза, Жасмин, Ландыш", base: "Серая амбра, Ваниль, Бензоин, Кожа, Лабданум" },
  { id: 120, brand: "Roja Dove", name: "Oligarch", gender: "Для него", type: "Восточный", top: "Лимон, Бергамот, Лайм, Лаванда, Чабрец", heart: "Яблоко, Цветок апельсина, Черная смородина, Жасмин, Лилия, Кокос", base: "Береза, Кедр, Кожа, Дубовый мох, Пачули, Мате, Бобы тонка, Мускус, Ваниль, Амбра" },

  // ROSENDO MATEU
  { id: 121, brand: "Rosendo Mateu", name: "No 5", gender: "Унисекс", type: "Цветочный", top: "Экзотические цветы, Специи", heart: "Гвоздика, Ландыш", base: "Амбра, Ваниль, Мускус" },

  // REPLICA (MAISON MARGIELA)
  { id: 122, brand: "Replica", name: "Under The Lemon Tree", gender: "Унисекс", type: "Цитрусовый", top: "Лайм, Петитрейн, Кардамон", heart: "Зеленый чай, Матэ, Кориандр", base: "Белый мускус, Кедр, Роза" },

  // SHAIK
  { id: 123, brand: "Shaik", name: "Classic Opulent 77", gender: "Для него", type: "Восточный", top: "Лаванда, Бергамот, Лимон, Базилик", heart: "Яблоко, Корица, Гвоздика, Герань", base: "Ваниль, Мускус, Пачули, Лабданум, Дубовый мох, Кедр" },
  { id: 124, brand: "Shaik", name: "Sochi Onyx", gender: "Для него", type: "Древесный", top: "Японский кипарис, Бергамот", heart: "Пачули", base: "Амбра" },

  // SOSPIRO
  { id: 125, brand: "Sospiro", name: "Laylati", gender: "Унисекс", type: "Восточный", top: "Зеленые ноты", heart: "Вирджинский кедр, Пачули", base: "Табак, Мускус, Ваниль" },
  { id: 126, brand: "Sospiro", name: "Accento", gender: "Для неё", type: "Цветочный", top: "Ананас, Гиацинт", heart: "Розовый перец, Ирис, Жасмин", base: "Мускус, Амбра, Ветивер, Пачули, Ваниль" },
  { id: 127, brand: "Sospiro", name: "Erba Pura", gender: "Унисекс", type: "Цитрусовый", top: "Апельсин, Бергамот, Лимон", heart: "Фруктовые ноты", base: "Белый мускус, Амбра, Мадагаскарская ваниль" },

  // THOMAS KOSMALA
  { id: 128, brand: "Thomas Kosmala", name: "No 4 Apres L'Amour", gender: "Унисекс", type: "Восточный", top: "Цедра лимона, Лист горького апельсина", heart: "Ароматные специи", base: "Мускус, Амбра, Древесные ноты" },

  // TIZIANA TERENZI
  { id: 129, brand: "Tiziana Terenzi", name: "Al Contrario", gender: "Унисекс", type: "Гурманский", top: "Какао, Солод, Эбеновое дерево", heart: "Ваниль, Бобы тонка, Орхидея", base: "Сахарный тростник, Сандал, Лесной орех, Бензоин" },
  { id: 130, brand: "Tiziana Terenzi", name: "Andromeda", gender: "Для неё", type: "Цветочный", top: "Иланг-иланг, Водяной жасмин, Бергамот", heart: "Персик, Лилия, Белый гелиотроп, Дамасская роза", base: "Кашемировое дерево, Кокос, Амбра, Бобы тонка, Ваниль" },
  { id: 131, brand: "Tiziana Terenzi", name: "Cassiopea", gender: "Для неё", type: "Цветочный", top: "Маракуйя, Лист черной смородины, Лимон, Папоротник", heart: "Чайная роза, Гвоздика, Ландыш", base: "Бобы тонка, Мускус, Сандал" },
  { id: 132, brand: "Tiziana Terenzi", name: "Gumin", gender: "Унисекс", type: "Восточный", top: "Мандарин, Ананас, Апельсин, Бергамот", heart: "Озон, Фиалка, Амбра, Жасмин, Роза", base: "Сандал, Мускус, Береза, Уд" },
  { id: 133, brand: "Tiziana Terenzi", name: "Kirke", gender: "Для неё", type: "Фруктово-цветочный", top: "Маракуйя, Персик, Груша, Малина, Лист черной смородины", heart: "Ландыш", base: "Мускус, Ваниль, Сандал, Пачули, Гелиотроп" },

  // TOM FORD
  { id: 134, brand: "Tom Ford", name: "Cherry Smoke", gender: "Унисекс", type: "Восточный", top: "Вишня, Шафран", heart: "Кожа, Оливка, Китайский османтус, Абрикос", base: "Дым, Древесные ноты, Нагармота" },
  { id: 135, brand: "Tom Ford", name: "Black Orchid", gender: "Унисекс", type: "Восточный", top: "Трюфель, Гардения, Черная смородина, Иланг-иланг, Бергамот, Мандарин", heart: "Орхидея, Специи, Гардения, Лотос", base: "Мексиканский шоколад, Пачули, Ваниль, Ладан, Амбра, Сандал" },
  { id: 136, brand: "Tom Ford", name: "F*cking Fabulous", gender: "Унисекс", type: "Кожаный", top: "Мускатный шалфей, Лаванда", heart: "Горький миндаль, Кожа, Корень ириса, Ваниль", base: "Кожа, Бобы тонка, Кашмеран, Амбра" },
  { id: 137, brand: "Tom Ford", name: "Lost Cherry", gender: "Унисекс", type: "Восточный", top: "Вишня, Горький миндаль, Ликер", heart: "Вишня, Слива, Турецкая роза, Жасмин Самбак", base: "Бобы тонка, Ваниль, Бензоин, Корица, Сандал, Кедр" },
  { id: 138, brand: "Tom Ford", name: "Noir Extreme", gender: "Для него", type: "Восточный", top: "Шафран", heart: "Черная роза, Трюфель", base: "Пачули, Ваниль, Уд, Дубовый мох" },
  { id: 139, brand: "Tom Ford", name: "Tobacco Vanille", gender: "Унисекс", type: "Гурманский", top: "Лист табака, Пряности", heart: "Ваниль, Какао, Бобы тонка, Цветок табака", base: "Сухофрукты, Древесные ноты" },
  { id: 140, brand: "Tom Ford", name: "Mandarino di Amalfi", gender: "Унисекс", type: "Цитрусовый", top: "Лимон, Грейпфрут, Мята, Базилик, Черная смородина", heart: "Цветок апельсина, Жасмин, Шисо, Черный перец", base: "Мускус, Ветивер, Амбра" },
  { id: 141, brand: "Tom Ford", name: "Ombré Leather", gender: "Унисекс", type: "Кожаный", top: "Кардамон", heart: "Кожа, Жасмин Самбак", base: "Амбра, Мох, Пачули" },
  { id: 142, brand: "Tom Ford", name: "Bitter Peach", gender: "Унисекс", type: "Гурманский", top: "Персик, Красный апельсин, Кардамон, Гелиотроп", heart: "Ром, Коньяк, Жасмин", base: "Пачули, Сандал, Ваниль, Бобы тонка, Лабданум, Ветивер" },
  { id: 143, brand: "Tom Ford", name: "Soleil Blanc", gender: "Для неё", type: "Цветочный", top: "Бергамот, Кардамон, Фисташки", heart: "Жасмин, Тубероза, Иланг-иланг", base: "Амбра, Бензоин, Бобы тонка, Кокос" },
  { id: 144, brand: "Tom Ford", name: "Tuscan Leather", gender: "Унисекс", type: "Кожаный", top: "Малина, Шафран, Чабрец", heart: "Олибанум, Жасмин", base: "Кожа, Замша, Древесные ноты, Амбра" },
  { id: 145, brand: "Tom Ford", name: "Oud Wood", gender: "Унисекс", type: "Восточный", top: "Бобы тонка, Ваниль, Уд", heart: "Ветивер, Сандал, Перец", base: "Амбра" },
  { id: 146, brand: "Tom Ford", name: "Vanilla Sex", gender: "Унисекс", type: "Гурманский", top: "Горький миндаль", heart: "Ваниль, Цветочные ноты", base: "Абсолют ванили, Бобы тонка, Сандал" },

  // VERTUS
  { id: 147, brand: "Vertus", name: "Narcos'is", gender: "Унисекс", type: "Восточный", top: "Мандарин, Кардамон, Кофе, Ревень", heart: "Манго, Янтарь, Имбирь", base: "Персик, Ветивер, Амбра" },

  // VERSACE
  { id: 148, brand: "Versace", name: "Bright Crystal", gender: "Для неё", type: "Цветочный", top: "Юзу, Гранат, Лёд", heart: "Пион, Лотос, Магнолия", base: "Мускус, Махагони, Амбра" },

  // VICTORIA'S SECRET
  { id: 149, brand: "Victoria's Secret", name: "Eau So Sexy", gender: "Для неё", type: "Фруктово-цветочный", top: "Бергамот", heart: "Яблоко", base: "Взбитые сливки" },
  { id: 150, brand: "Victoria's Secret", name: "Bombshell", gender: "Для неё", type: "Цветочный", top: "Маракуйя", heart: "Пион", base: "Ванильная орхидея" },
  { id: 151, brand: "Victoria's Secret", name: "Scandalous", gender: "Для неё", type: "Гурманский", top: "Малина", heart: "Пион", base: "Пралине" },
  { id: 152, brand: "Victoria's Secret", name: "Bombshell In Paradise", gender: "Для неё", type: "Цветочный", top: "Инжир", heart: "Страстоцвет", base: "Кипарис" },
  { id: 153, brand: "Victoria's Secret", name: "Love Spell", gender: "Для неё", type: "Цветочный", top: "Персик, Цветок вишни, Красное яблоко", heart: "Сирень, Жасмин, Ландыш", base: "Тамаринд, Мускус, Светлое дерево" },

  // VILHELM PARFUMERIE
  { id: 154, brand: "Vilhelm Parfumerie", name: "Mango Skin", gender: "Для неё", type: "Фруктово-цветочный", top: "Манго, Апельсин, Фиалка", heart: "Франжипани, Цветок манго, Иланг-иланг", base: "Черная смородина, Красное вино, Мускус" },

  // ZARKOPERFUME
  { id: 155, brand: "Zarkoperfume", name: "Pink Molecule 09", gender: "Для неё", type: "Цветочный", top: "Абрикос, Черная бузина, Черная орхидея, Шампанское", heart: "Абрикос, Орхидея, Черная бузина", base: "Черное дерево, Махагони, Взбитые сливки" },

  // YSL
  { id: 156, brand: "Yves Saint Laurent", name: "Black Opium", gender: "Для неё", type: "Восточный", top: "Груша, Розовый перец, Цветок апельсина", heart: "Кофе, Жасмин, Горький миндаль", base: "Ваниль, Пачули, Кедр, Кашемировое дерево" },
  { id: 157, brand: "Yves Saint Laurent", name: "Libre", gender: "Для неё", type: "Цветочный", top: "Лаванда, Мандарин, Черная смородина", heart: "Лаванда, Цветок апельсина, Жасмин", base: "Мадагаскарская ваниль, Мускус, Кедр, Серая амбра" },
  { id: 158, brand: "Yves Saint Laurent", name: "Myslf", gender: "Для него", type: "Свежий", top: "Калабрийский бергамот", heart: "Тунисский апельсиновый цвет", base: "Ambrofix, Пачули" },

  // ZADIG & VOLTAIRE
  { id: 159, brand: "Zadig & Voltaire", name: "This Is Her", gender: "Для неё", type: "Гурманский", top: "Розовый перец, Цветок шелкового дерева, Жасмин самбак", heart: "Взбитые сливки, Ваниль, Каштан", base: "Сандал, Кашемировое дерево" },

  // ZIELINSKI & ROZEN
  { id: 160, brand: "Zielinski & Rozen", name: "Black Pepper & Amber, Neroli", gender: "Унисекс", type: "Пряный", top: "Черный перец", heart: "Амбра, Нероли", base: "Амбра" },
  { id: 161, brand: "Zielinski & Rozen", name: "Vanilla Blend", gender: "Унисекс", type: "Гурманский", top: "Ваниль", heart: "Ваниль", base: "Ваниль" },
  { id: 162, brand: "Zielinski & Rozen", name: "Vetiver & Lemon, Bergamot", gender: "Унисекс", type: "Свежий", top: "Ветивер", heart: "Лимон", base: "Бергамот" },
];

export const brands = [...new Set(fragrances.map((f) => f.brand))].sort();
export const types = [...new Set(fragrances.map((f) => f.type))].sort();
export const genders: Gender[] = ["Для него", "Для неё", "Унисекс"];

export const prices = [
  { vol: "10 мл", price: "1 780 ₽" },
  { vol: "15 мл", price: "2 250 ₽" },
  { vol: "20 мл", price: "3 240 ₽" },
  { vol: "30 мл", price: "4 180 ₽" },
];
