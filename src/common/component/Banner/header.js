
import './Banner.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const Gotologin = () => {
        navigate('/news')
    }
    const isLoggedIn = localStorage.getItem('token')
    const handlelogOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }



    return (
        <div className="banner_nemu" >
            <div>
                <Link to='/news'>
                    <a href="" style={{ fontSize: '23' }}>VTI-ecommer</a>
                </Link>

            </div>
            <div>
                <button onClick={Gotologin}>LogIN</button>
                {
                    isLoggedIn &&
                    <button onClick={handlelogOut}>LogOut</button>
                }
            </div>
        </div>
    )
}
export default Header

