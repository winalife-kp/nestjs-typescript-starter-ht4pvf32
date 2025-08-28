export interface WoltWebhookBody {
  id: string;
  type: string;
  order: {
    id: number;
    restaurant_id: string;
  };
  created_at: string;
}

export interface WoltOrder {
  /**
   * Your restaurant id
   */
  restaurant_id: string;

  /**
   * Order ID (e.g. 6934759)
   * This will be used by you to call us on accept/reject/ready for pickup webhooks.
   */
  order_id: number;

  /**
   *  Order type (takeaway, delivery, own delivery)
   */
  order_type: 'delivery' | 'pickup' | 'own_delivery';

  /**
   * Timestamp when the order needs to be ready for pickup:
   * - pickup_datetime: ISO datetime in restaurant's timezone
   */
  pickup_datetime: string;

  /**
   * Customer info
   */
  customer: ChannelUserInfoInterface;

  /**
   * Ordered products
   */
  items: ChannelItemInterface[];

  /**
   * The cost the client is paying for food only
   */
  total_order_price: ChannelPriceInterface;
}


export interface ChannelPriceInterface {
  value: number;
  currency: string;
  discount_percent?: number;
  original_value?: number;
}


export interface ChannelUserInfoInterface {
  /**
   * Unique user identifier.
   */
  user_id: string;

  /**
   * Firstname + initial of lastname (e.g. "John D.")
   */
  partial_name?: string;

  /**
   * Last 4 digits of phone number (e.g. "********6086")
   */
  partial_phone: string;

  /**
   * Optional user details.
   */
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;

  /**
   * VAT tax code mentioned by the eater
   */
  vat_code?: string;
}

export interface ChannelItemInterface {
  /**
   * Name of the product
   */
  name: string;

  /**
   * Product SKU (stock keeping unit) - you provide this value at menu push
   */
  sku: string | null;

  /**
   * Quantity ordered
   */
  qty: number;

  /**
   * Unit price for a single bare item
   */
  unit_item_price: ChannelPriceInterface;

  /**
   * Options for the item.
   * NOTE: if qty > 1, these options apply for EVERY item
   */
  options: ChannelOptionInterface[];

  /**
   * Total price, includes quantity and options.
   *
   * total_item_price = qty * (unit_price + total_price_of_item_options)
   *                  = qty * (unit_price + qty_option_1 * unit_price_option_1 +
   *                                        qty_option_2 * unit_price_option_2 +
   *                                        ...)
   */
  total_item_price: ChannelPriceInterface;

  /**
   * User note for this item.
   */
  user_note?: string;
}

export interface ChannelOptionInterface {
  /**
   * Option name
   */
  name: string;

  /**
   * Option SKU (stock keeping unit) - you provide this value at menu push
   */
  sku: string | null;

  /**
   * Option quantity
   */
  qty: number;

  /**
   * Price for a single unit
   */
  unit_item_price: ChannelPriceInterface;

  /**
   * Price according to quantity = qty * unit_item_price
   */
  total_item_price: ChannelPriceInterface;
}



