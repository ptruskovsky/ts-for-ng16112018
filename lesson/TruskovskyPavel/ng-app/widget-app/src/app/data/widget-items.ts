import { Observable, of } from 'rxjs';

export interface IWidgetItem {
  img: string;
  address: string;
  phone:  number;
  shortDescription: string;
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
  type: string;
}

export const widgetItems: IWidgetItem[] = [{
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4Bq5AtQ_QLmONI3BobqtOHGF1FpimmWwk3bNu67yL7OqVruEug',
    address: 'г. Паланга',
    phone:  375256902500,
    shortDescription: '<p>Полный сервис и</p><p>сопровождение по маршрутам</p>',
    weather: {
      title: 'Отличная погода',
      icon: 'http://',
      water: 20,
      temperature: 31
    },
    social_info: {
      title: '',
      img: 'http://',
      followers: 1000,
      following: 2506,
    },
    type: 'fishing'
  }, {
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Здание_санатория_«Орджоникидзе»_%28Сочи%2C_курортный_пр.%29102.jpg/271px-Здание_санатория_«Орджоникидзе»_%28Сочи%2C_курортный_пр.%29102.jpg',
  address: 'г. Сочи',
  phone:  375335782623,
  shortDescription: '<p>Удивительный и невероятный</p><p>яркий и запоминающися</p>',
  weather: {
  title: 'my title',
    icon: 'http://',
    water: 25,
    temperature: 33
},
social_info: {
  title: '',
    img: 'http://',
    followers: 780,
    following: 1520,
},
type: 'apartments'
},
  {
  img: 'https://avatars.mds.yandex.net/get-pdb/49816/aa6fdb0c-ca9c-4753-a643-fac0a7e4e0d8/orig',
  address: 'г. Хургада',
  phone:  375292603405,
  shortDescription: '<p>Неповторимая красота</p><p>Красного моря</p>',
  weather: {
    title: 'my title',
    icon: 'http://',
    water: 29,
    temperature: 38
  },
  social_info: {
    title: '',
    img: 'http://',
    followers: 900,
    following: 2100,
  },
  type: 'resort'
}, {
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Larnaca_01-2017_img14_Finikoudes.jpg/290px-Larnaca_01-2017_img14_Finikoudes.jpg',
  address: 'г. Ларнака',
  phone:  375292562332,
  shortDescription: '<p>Нежнейшие лучи солнца и</p><p>белоснежные пляжи</p>',
  weather: {
    title: 'my title',
    icon: 'http://',
    water: 25,
    temperature: 29
  },
  social_info: {
    title: '',
    img: 'http://',
    followers: 10,
    following: 20,
  },
  type: 'resort'
}, {
  img: 'https://euroroaming.ru/wp-content/uploads/2017/06/Stanbul-avatar.jpg',
  address: 'г. Стамбул',
  phone:  375292603405,
  shortDescription: '<p>Неповторимый и единственный</p><p>город Стамбул</p>',
  weather: {
    title: 'my title',
    icon: 'http://',
    water: 19,
    temperature: 25
  },
  social_info: {
    title: '',
    img: 'http://',
    followers: 10,
    following: 20,
  },
  type: 'apartments'
}];

export const widgetItems$: Observable<IWidgetItem[]> = of(widgetItems);
