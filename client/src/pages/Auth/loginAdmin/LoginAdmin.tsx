import axios from 'axios'
import { useState } from 'react'
import { IoLockClosed, IoLogoPinterest } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import './loginAdmin.scss'
export default function LoginAdmin() {
    const [warningEmail, setWarningEmail] = useState<boolean>(true);
    const [warningPass, setWarningPass] = useState<boolean>(true);
    const [admin, setAdmin] = useState({
        email: "",
        pass: "",
        confirmLogin: false
    })

    const dispatch = useDispatch()

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdmin((preEmail: any) => ({
            ...preEmail,
            email: e.target.value
        }))
        { admin.email.length > -1 ? setWarningEmail(true) : setWarningEmail(false) }
    }
    const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdmin((prePas: any) => ({
            ...prePas,
            pass: e.target.value
        }))
        { admin.pass.length > -1 ? setWarningPass(true) : setWarningPass(false) }
    }
    
    const clickSubmint = async () => {
        // { admin.email ? setWarningEmail(true) : setWarningEmail(false) };
        // { admin.pass ? setWarningPass(true) : setWarningPass(false) };
        // if (admin.email && admin.pass) {
            // dispatch(findAdmin(admin))
        // }
        const result = await axios.get(`http://localhost:8080/users?email=${admin.email.trim()}`)
        const infoadmin = result.data[0]

        // check
        let check = true

        if (infoadmin && check) {
            localStorage.setItem("admin_login", JSON.stringify(infoadmin))
            // naigate("/admin")
        } else {
            // alert("thong tin ko hop le")
        } 
    }
    return (
        <div className='backgroudLoginAdmin'>
            <div className='titleLogin'><IoLogoPinterest />Đăng nhập quản lý</div>
            <div className='formLoginn'>
                <div className='errorLogin'>Email hoặc mật khẩu không đúng vui lòng thử lại</div>
                <div className='deginInp'>
                    <MdEmail className='iconInp' />
                    <input className='inpLogin' type="email" placeholder='Email' onChange={handleChangeEmail} />
                    <div className={warningEmail ? "error" : "errorBlock"}>Email không được để trống</div>
                </div>
                <div className='deginInp'>
                    <IoLockClosed className='iconInp' />
                    <input className='inpLogin' type="password" placeholder='Mật khẩu' onChange={handleChangePass} />
                    <div className={warningPass ? "error" : "errorBlock"}>Mật khẩu không được để trống</div>
                </div>

                <div className='divBtnLogin'>
                    <button className='btnLogin' onClick={clickSubmint}>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}
