import { useState } from 'react'
import axios from 'axios'
import './admin.css'
import authService from '../../common/api/authService'
import { useNavigate } from 'react-router-dom'
function Admin() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    const Changeusername = (e) => {
        setData({
            ...data,
            username: e.target.value
        })
    }
    const Changepassword = (e) => {
        setData({
            ...data,
            password: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const userdata = {
        //     username: data.username,
        //     password: data.password
        // };
        // axios.post('http://contabo.foxcode.site:8082/api/v1/auth/login', userdata )
        // const username = data.username
        // const password = data.password
        const {username, password} = data
        authService.login(username, password)
            .then(response => {
                console.log(response.data)
                console.log(response.data.accessToken)
                
                localStorage.setItem('token', response.data.accessToken)
                navigate('/contact')
            })
            .catch(error => {
                console.log(error)
            })
        setData({
            username: "",
            password: ""
        })

    }

    return (
        <>
            <div className="Admin_product">
                <h3>VTI ECOMMERCE ADMIN</h3>
                <form onSubmit={handleSubmit}>
                    <input placeholder="nhập vào username" name='username' onChange={Changeusername}>
                    </input><br></br>
                    <input placeholder="Nhập vào password" name='password' onChange={Changepassword}>
                    </input><br></br>
                    <button type='submit'>Login</button>
                </form>

            </div>

        </>
    )
}
export default Admin