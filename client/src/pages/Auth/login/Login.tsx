import './login.scss'
import { MdEmail } from 'react-icons/md'
import { IoLockClosed, IoLogoPinterest} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginNoma } from '../../../store/reducers/userReducer'
export default function Login() {
  const [emailWarning,setEmailWarning] = useState<boolean>(true);
  const [passWarning,setPassWarning] = useState<boolean>(true);
  const [loginUser,setLoginUser] = useState({
    email:"",
    password:""
  })
  const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginUser(preEmail=>({
      ...preEmail,
      email:e.target.value
    }))
    {loginUser.email.length>-1?setEmailWarning(true):setEmailWarning(false)}
  }
  const handleChangePass=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginUser(prePass=>({
      ...prePass,
      password:e.target.value
    }))
    {loginUser.password.length>-1?setPassWarning(true):setPassWarning(false)}
  }
  const dispatch=useDispatch()
  const login=()=>{
    if(loginUser.email && loginUser.password){
      dispatch(loginNoma(loginUser))
    }else{
      {loginUser.email?setEmailWarning(true):setEmailWarning(false)}
      {loginUser.password?setPassWarning(true):setPassWarning(false)}
    }
  }
  return (
    <div className='backgroud'>
        <div className='titleLogin'><IoLogoPinterest/>Đăng nhập</div>
      <div className='formLoginn'>
        <div className='deginInp'>
        <div className='errorLogin'>Email hoặc mật khẩu không đúng vui lòng thử lại</div>
              <MdEmail className='iconInp'/>
              <input className='inpLogin' type="email" placeholder='Email' onChange={handleChangeEmail}/>          
              <div className={emailWarning? "error" : "errorWarn"}>Email không được để trống</div>
          </div>
        <div className='deginInp'>
              <IoLockClosed className='iconInp'/>
              <input className='inpLogin' type="password" placeholder='Mật khẩu' onChange={handleChangePass}/>
              <div className={passWarning? "error" : "errorWarn"}>Mật khẩu không được để trống</div>
          </div>
          <div className='remember'>
            <input type="checkbox" />Ghi nhớ đăng nhập
          </div>
          <hr className='hr'/>
          <div className='navigation'>Chưa có tài khoản!
            <Link to="/register" className='link'>Đăng ký</Link>
          </div>
          <div className='nav'>Quên mật khẩu!
            <Link to="/register" className='link'>Khôi phục mật khẩu</Link>
          </div>
          <div className='divBtnLogin'>
          <button className='btnLogin' onClick={login}>Đăng nhập</button>
          </div>
      </div>
    </div>
  )
}
