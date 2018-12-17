import { Observable } from 'rxjs';

export interface IWidgetItem {
  img: string;
  address: string;
  phone:  number;
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
  img: 'http://',
address: '',
phone:  124,
weather: {
  title: 'my title',
  icon: 'http://',
  water: 20,
  temperature: 31
},
social_info: {
  title: '',
  img: 'http://',
  followers: 10,
  following: 20,
},
type: 'hotel'
}];

export const widgetItems$: Observable<IWidgetItem[]> = Observable.of(widgetItems);
