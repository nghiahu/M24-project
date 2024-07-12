import React, { useEffect } from 'react'
import { MdAdd } from 'react-icons/md'
import './adminProduct.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getAllProduct } from '../../../store/reducers/productReducer';
import { Product } from '../../../interface';
export default function AdminProduct() {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    const data:any = useSelector(state => state);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProduct())
    },[])    
  return (
    <div className='adProduct'>
      <div className='adProductTop'>
      <div className='addNewProductad'>
        <MdAdd />
        <>Thêm sản phẩm</>
      </div>
      <div className='sortInpProduct'>
        <div className='titleSortPro'>Sắp xếp:</div>
        <select className='selectPro'>
          <option value="id">ID</option>
          <option value="name">Tên</option>
        </select>
        </div>
        </div>
<div className='fromProduct'>
      <table className='tableProduct'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Ngày tạo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {data.productReducer.products.map((product:Product,index:number)=>{
            return <tr key={product.id}>
                <td>{index+1}</td>
                <td>{product.product_name}</td>
                <td>{product.status==1?"Có sẵn" : 
                (product.status==2? "Bán hết" : 
                (product.status==3? "Đang xem xét" : "Đặt hàng"))}</td>
                <td>{product.category}</td>
                <td>{VND.format(product.unit_price)}</td>
                <td>{product.created_at}</td>
                <td className='actionProduct'>
                    <button className='btnViewPro btnProduct'>View</button>
                    <button className='btnEditPro btnProduct'>Edit</button>
                    <button className='btnDelPro btnProduct'>Delete</button>
                </td>
            </tr>   
         })}
        </tbody>
    </table>
    </div>
    </div>
  )
}
