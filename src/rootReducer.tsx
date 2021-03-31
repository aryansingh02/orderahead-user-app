import { AnyAction, combineReducers } from 'redux';
import EventReducer from './features/event/EventSlice';
import CartReducer from './features/cart/CartSlice';
import { RootState } from './types';

export const rootReducer = combineReducers({
  event: EventReducer,
  cart: CartReducer
});

// here userInfo in state is not reset because we want to preserve payment method data, authentication token over the refreshes
export const resettableRootReducer = (state: RootState, action: AnyAction) =>
  rootReducer(state, action);

export default rootReducer;
