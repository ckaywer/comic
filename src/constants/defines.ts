export type ProductDefine =
{
  age_category: string;
  attribute_type: string;
  attribute_type_expires_at: string;
  attribute_type_remaining_seconds: number;
  comipo_workno: string;
  discount: boolean;
  discount_expires_at: string;
  display_name: string;
  expires_at: string;
  id: string;
  original_price: number;
  published_at: string;
  required_coin: number;
  thumbnail: string;
  viewed: boolean;
  viewed_datetime: string;
  volume: number;
}

export type UnitItemDefine =
{
  comipo_original: boolean;
  description: string;
  exsist_wait_free_product: boolean;
  free_product_count: number;
  id: number;
  name: string;
  synthetic_voice_reading: boolean;
  thumbnail: string;
  type_name: string;
}

export type SeriesDefine =
{
  charge_complete_time: string;
  comipo_original: boolean;
  creators_and_authors: [any];
  description: string;
  exsist_wait_free_product: boolean;
  favorite: boolean;
  free_product_count: number;
  genres: [any];
  id: number;
  label_name: string;
  last_updated_at: string;
  name: string;
  remaining_seconds_to_complete_charge: number;
  required_seconds_to_complete_charge: number;
  synthetic_voice_reading: boolean;
  thumbnail: string;
  total_likes: number;
  type_name: string;
  user_setting_notification: number;
  user_setting_read_later: boolean;
  viewed: boolean;
}

export type MissionDefine =
{
  background_image_path: string;
  expires_at: string;
  id: number;
  published_at: string;s
  reward_items: {
    amount: 200;
    category: "free_coin";
  };
  status: "already_participate";
  tasks: [{
    achieved_value: number;
    id: number;
    name: string;
    progress_value: number;
    reward_items:{
      amount: number;
      category: "free_coin"
    };
    status: "not_achieved";
    tap_action:{
      action_param: any
      action_path: string;
      action_type: "in_app_transitions" | "webview" | "external_browser"
    }
  }];
  title_image_path: string;
  type: "each"
}

