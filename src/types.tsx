import RootReducer from './rootReducer';
import {
  cart,
  cartItem,
  lineItems,
  menu,
  slotsInfo,
  stall,
} from './data/testData';

export type RootState = ReturnType<typeof RootReducer>;
export type HistoryType = ReturnType<typeof Object>;

export type IStall = typeof stall;
export interface IMapStall extends IStall {
  active: boolean;
}
export type ICart = typeof cart;
export type ILineItems = typeof lineItems;
export type ILineItem = typeof lineItems[0];
export type ICartItem = typeof cartItem;
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

export type IMenu = typeof menu;

export interface IDynamicSettings {
  requestedEta: number;
  requestedDynamicFee: IPrice;
}

export interface IVariation {
  name: string;
  price: IPrice;
  _id: string;
  status?: string;
  pointOfSaleInfo?: IPos;
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

export type ISlotsInfo = typeof slotsInfo;

export interface IModifier {
  name: string;
  price: IPrice;
}

export type IOrderStatus =
  | 'SCHEDULED'
  | 'RECEIVED'
  | 'PREPARING'
  | 'READY'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'COMPLETED_PR';

export interface IUserInfo {
  phoneNumber: string;
}

export type IFulFillmentInfo = {
  type: string;
  customer: IUserInfo;
};

export type IOrderUpdateType = 'STATUS_CHANGE' | 'NOTIFY_CUSTOMER';

export type IOrderItem = {
  name: string;
  quantity: number;
  totalMoney: IPrice;
  selectedVariation: IVariation;
};

export type IUpdate = {
  timestamp: number;
  type: IOrderUpdateType;
  newStatus: IOrderStatus;
  oldStatus: IOrderStatus;
};

export type IInvoice = {
  surgeFee?: IPrice;
  vendorOrderAheadFee?: IPrice;
  serviceFee?: IPrice;

  /* Fee below this are part of DB schema */
  appFee?: IPrice;
  subTotal: IPrice;
  tip: IPrice;
  tax: IPrice;
  discount: IPrice;
  total: IPrice;
};

export interface IOrder {
  _id: string;
  status: IOrderStatus;
  fulfillmentInfo: IFulFillmentInfo;
  invoice: IInvoice;
  lineItems: Array<IOrderItem>;
  updates: Array<IUpdate>;
  paymentMethod?: string;
  creationTimestamp: number;
  receiptUrl: string;
  pickupTime: string;
  pickupLocation?: string;
}

export interface ICreateOrderEventHandlerParam {
  source: string;
  paymentMethod: string;
}
