import './product.css'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const logount = useNavigate()
    const handleLogoutss = () => {
        localStorage.removeItem("token");
        logount("/");
    }
    return (
        <div className="banner">
            <h3 className="banner_item">
                <a href='' >VTI ADMIN</a>
                <button onClick={handleLogoutss}> LogOut</button>
            </h3>

        </div>
    )
}
export default Banner