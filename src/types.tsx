import { History } from 'history';
import RootReducer from './rootReducer';
import { checkoutstate, stall } from './data/testData';

export type RootState = ReturnType<typeof RootReducer>;
export type HistoryType = ReturnType<typeof Object>;

export type IStall = typeof stall;
export type IInvoice = typeof checkoutstate.invoice;
type AutocompletePrediction = google.maps.places.AutocompletePrediction;

export interface IPos {
  type: string;
  squareInfo: Record<string, string>;
}

export interface ILocation {
  lat: number | undefined;
  lng: number | undefined;
  place: google.maps.places.PlaceResult;
}

export interface IPrice {
  amount: number;
  currency: string;
}
export interface IVariation {
  name: string;
  price: IPrice;
  _id: string;
  status: string;
  pointOfSaleInfo: IPos;
}
export interface IItemDetail {
  name: string;
  description: string;
  variations: IVariation[];
  categories: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modifier: Record<any, any>[];
  status: string;
  _id: string;
  applicableTaxKeys: string[];
  pointOfSaleInfo: IPos;
  imagePaths?: string[];
}

export interface IModifier {
  name: string;
  price: IPrice;
}
