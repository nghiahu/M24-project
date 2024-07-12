export interface User{
    id?:string|number;
    username:string;
    email:string;
    fullname:string;
    status:boolean;
    password:string;
    role:boolean|undefined;
    avatar:string;
    phone:string;
    address:string;
    created_at:string;
    updated_at:string;
}
export interface Category{
    category_id:number;
    category_name:string;
    description:string;
    status:boolean;
    subcategory:Subcategory[]
}
export interface Subcategory{
    id:number;
    name:string;
    description:string;
    status:boolean;
    products:Product[]
}
export interface Product{
    id:number;
    product_name:string;
    description:string;
    unit_price:number;
    stock_quantity:number;
    image:string;
    status:number;
    created_at:string;
    updated_at:string;
    category:number;
    sold:number
}
export interface Order{
    order_id:number;
    serial_number:string;
    user_id:number;
    order_at:string;
    total_price:number;
    status:number;
    note:string;
    order_details:Order_detail[];
    receive_name:string;
    receive_address:string;
    receive_phone:number;
    created_at:string;
    updated_at:string;
}
export interface Order_detail{
    order_detail_id:number;
    product_id:string;
    name:string;
    unit_price:number;
    order_quantity:number;
}
