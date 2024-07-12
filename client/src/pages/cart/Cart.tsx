import { LuSearch, LuUser2 } from 'react-icons/lu'
import { FaRegHeart, FaStar, FaUser } from 'react-icons/fa'
import { IoIosArrowDown, IoLogoPinterest, IoMdHeartEmpty } from 'react-icons/io'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/reducers/productReducer'
import { FaCartFlatbed } from 'react-icons/fa6'
import { MdCurrencyExchange } from 'react-icons/md'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import Footer from '../footer/Footer'
import { useEffect } from 'react'
import './cart.scss'
export default function Cart() {
    const data:any = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProduct())
    },[])
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
  return (
    <div>
    <div className='header'>
        <div className='headerTop'>
        <div className='title'><IoLogoPinterest/>Pinyin</div>
        <div className='inpSearch'>
            <input type="text" className='inp' placeholder='Tìm kiếm sản phẩm'/>
            <LuSearch className='iconSearch'/>
        </div>
        <div className='acc'>
        <div className='accoutdiv'>
            <LuUser2  className='iconAcount'/>
            <div className='clomAcount'>
            <div>Đăng nhập/Đăng ký</div>
            <div className='account'>Tài khoảng của tôi <IoIosArrowDown /></div>
            </div>
        </div>
        </div>

        <div className='cartDiv'>
            <div className='cart'>
                <div className='cartNumber'>0</div>
                <TbShoppingBagPlus className='iconCart'/>
            </div>
            <div className='cartP'>Giỏ hàng</div>
        </div>
        <FaRegHeart className='heart'/>
        </div>
        
        <div className='headerBottom'>
            <ul className='menu'>
                <li>Sản Phẩm <IoIosArrowDown /></li>
                <li>Bộ Sưu Tập <IoIosArrowDown /></li>
                <li>Khuyến Mãi <IoIosArrowDown /></li>
                <li>Dịch Vụ <IoIosArrowDown /></li>
                <li>Tin tức</li>
                <li>About us</li>
                <li>Showroom</li>
            </ul>
        </div>
    </div>
    {/* Cart */}
        <div>
            <div>Giỏ hàng của bạn</div>
        <div>
            <ul>

            </ul>
        </div>
        <div>
            <div>
                <div>Tổng sản phẩm: </div>
                <div>Tổng tiền</div>
            </div>
            <button>Thanh toán</button>
        </div>
    </div>
 {/* Cart */}
        <div className='listRightCen'>
        <ul className='listRight'>
            <li className='listRightItem'>
            <FaCartFlatbed className='listRightIcon'/>
            <div>Giao hàng và lắp đặt</div>
            <div>Miễn phí</div>
            </li>
            <li className='listRightItem'>
            <MdCurrencyExchange className='listRightIcon'/>
            <div>Đổi trả 1 - 1</div>
            <div>Miễn phí</div>
            </li>
            <li className='listRightItem'>
            <IoShieldCheckmarkOutline className='listRightIcon'/>
            <div>Giao hàng và lắp đặt</div>
            <div>Miễn phí</div>
            </li>
            <li className='listRightItem'>
            <FiPhoneCall className='listRightIcon'/>
            <div>Tư vấn thiết kế</div>
            <div>Miễn phí</div>
            </li>
        </ul>
        </div>
        <Footer></Footer>
    </div>
  )
}
