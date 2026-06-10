export interface Bike {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string;
  in_stock: boolean;
  stock_quantity: number;
  delivery_time_days: number;
  gps: boolean;
  specifications: {
    electric_motor: string;
    top_speed: string;
    speed_details: string;
    tracker: string;
    integrated_gps: boolean;
    material: string;
    material_details: string;
  };
  technical_sheet: {
    weight: string;
    height: string;
    width: string;
    depth: string;
    gears: number;
    wheel_size: number;
  };
}
