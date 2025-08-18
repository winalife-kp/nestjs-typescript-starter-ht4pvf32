// https://developer.bolt.eu/delivery/main/#tag/Order-integration-Partner-Webhooks/operation/post-sendNewOrder

import { ChannelOrderInterface } from "src/types/channel";

export const CHANNEL_ORDER: ChannelOrderInterface = {
  restaurant_id: 'GX02137Uso',
  order_id: 253537830,
  order_reference_id: 'NUKZ8',
  order_type: 'delivery',
  created_ts: 1755471319,
  created_datetime: '2025-08-18T00:55:19.000+02:00',
  due_ts: 1755472114,
  due_datetime: '2025-08-18T01:08:34.000+02:00',
  customer: {
    user_id: '9b090628-fe6a-4d1e-9678-283cabbcad4c',
    partial_name: 'Volodymyr S.',
    partial_phone: '********4584',
    phone: '+48800454584',
    address_info: {},
  },
  items: [
    {
      name: 'Baklava',
      sku: '9813965e-05bc-4c1a-ba3e-59615ad2a553__94d2a941-4010-4a77-b710-d43c006d0090',
      qty: 1,
      unit_item_price: { value: 10.8, currency: 'pln', discount_percent: 40, original_value: 18 },
      options: [],
      total_item_price: { value: 10.8, currency: 'pln', discount_percent: 40, original_value: 18 },
    },
    {
      name: 'Rollo Kebab Samo Mięso Tortilla',
      sku: '8216f661-32f0-4467-a357-81a5ab715e76__9e8cf6a8-8fc7-4f57-a48d-125dc757d593',
      qty: 1,
      unit_item_price: { value: 27.6, currency: 'pln', discount_percent: 40, original_value: 46 },
      options: [
        {
          name: 'Mały',
          sku: '25dca716-f4e0-4513-868b-2157dc125241',
          qty: 1,
          unit_item_price: { value: 0, currency: 'pln' },
          total_item_price: { value: 0, currency: 'pln' },
        },
        {
          name: 'Sos Łagodny',
          sku: 'fe368fde-e250-4ea1-880e-33aa9fbf2ad5',
          qty: 1,
          unit_item_price: { value: 0, currency: 'pln' },
          total_item_price: { value: 0, currency: 'pln' },
        },
        {
          name: 'Wołowina',
          sku: '436f8e1c-750a-46d4-bab9-82ca6822dcb9',
          qty: 1,
          unit_item_price: { value: 0, currency: 'pln' },
          total_item_price: { value: 0, currency: 'pln' },
        },
        {
          name: 'Ser',
          sku: 'b919d30c-0b6d-4950-a152-f2d7f7441edd',
          qty: 1,
          unit_item_price: { value: 3, currency: 'pln', discount_percent: 40, original_value: 5 },
          total_item_price: { value: 3, currency: 'pln', discount_percent: 40, original_value: 5 },
        },
        {
          name: 'Opakowanie Jednorazowe',
          sku: 'fc6098da-e597-4982-b913-a77384a4ada8',
          qty: 1,
          unit_item_price: { value: 2.4, currency: 'pln', discount_percent: 40, original_value: 4 },
          total_item_price: { value: 2.4, currency: 'pln', discount_percent: 40, original_value: 4 },
        },
      ],
      total_item_price: { value: 33, currency: 'pln', discount_percent: 40, original_value: 55 },
    },
  ],
  total_order_price: { value: 43.8, currency: 'pln', discount_percent: 40, original_value: 73 },
};
