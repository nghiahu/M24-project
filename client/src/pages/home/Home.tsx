import React, { useEffect } from 'react'
import './home.scss'
import { LuSearch, LuUser2 } from 'react-icons/lu'
import { FaRegHeart, FaStar, FaUser } from 'react-icons/fa'
import { IoIosArrowDown, IoLogoPinterest, IoMdHeartEmpty } from 'react-icons/io'
import { TbShoppingBagPlus } from 'react-icons/tb'
import Carousels from '../carousels/Carousels'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/reducers/productReducer'
import { Product } from '../../interface'
import { FaCartFlatbed } from 'react-icons/fa6'
import { MdCurrencyExchange } from 'react-icons/md'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import Footer from '../footer/Footer'
export default function Home() {
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
    <div className='Carousels'>
        <Carousels></Carousels>
    </div>

    <div className='categoryNavigationIndex'>
        <div className='categoryNavigation'>
            <h3 className='titleCateNav'>Không gian sống với pinyin</h3>

            <div className='navFrame'>
                <div className='leftNavFrame'>
                    <div className='leftNavFrameItem'>
                        <img className='navFrameO' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView1_large.jpg?v=596 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView1.jpg?v=596" alt="" />
                    </div>
                    <div className='leftNavFrameItem'>
                        <img className='navFrameO' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView2_large.jpg?v=596 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView2.jpg?v=596" alt="" />
                    </div>
                </div>
                <div className='RightNavFrame'>
                    <div className='RightNavFrameTop'>
                        <img className='navFrameTR' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView3_large.jpg?v=596 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView3.jpg?v=596" alt="" />
                    </div>
                    <div className='RightNavFrameBot'>
                        <div className='RNavFBotItem'>
                            <img className='navFrameF' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView4_large.jpg?v=596 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView4.jpg?v=596" alt="" />
                        </div>
                        <div className='RNavFBotItem'>
                            <img className='navFrameF' src="//theme.hstatic.net/200000065946/1001187274/14/imgaView5_large.jpg?v=596 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView5.jpg?v=596" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className='DlistProduct'>
            <div className='DlistProductTop'>
                <div className='titleCate'>Sản phẩm các loại</div>
                <div className='SeeMore'>Xem thêm</div>
            </div>

            <div className='listProduct'>
                {data.productReducer.products.map((product:Product,index:number)=>{
                    return  <>
                    <div className='product'>
                        <img className='productImgRender' src={product.image} alt="" />
                        <div className='productInfoRender'>
                            <div>{product.product_name}</div>
                            <div className='informationProduct'>
                                <div style={{color:"orangered"}}>{VND.format(product.unit_price)}</div>
                                <div className='starPro'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                            </div>
                            <div className='informationProduct'>
                                <div>Đã bán {product.sold}</div>
                                <div><IoMdHeartEmpty className='iconHearPro'/></div>
                            </div>
                            <button className='btnInfoProduct addBtn'>Thêm vào giỏ hàng</button>
                            <button  className='btnInfoProduct BuyNowBtn'>Mua ngay</button>
                        </div>
                    </div>
                    </>
                })}
            </div>
        </div>
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
