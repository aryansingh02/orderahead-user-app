import RequestHandler from './RequestHandler';
import { IOrder } from './types';

/**
 * Wrapper class for accessing Sleek APIs.
 */
class API {
  static async getOrder(orderId: string) {
    const response = await RequestHandler.get(`order?id=${orderId}`);
    if (response && response.ok) {
      return response.data as IOrder;
    }
    return null;
  }
}

export default API;
