import { Link } from "react-router-dom"
import "../layout/header.css"
const HeaderPage = () => {
    return (
        <>
            <ul>
                <li><Link class="active" to="/">Home</Link></li>
                <li><Link to="/users">User</Link></li>
                <li><Link to="/products">Product</Link></li>
                
            </ul>
        </>
    )
}
export default HeaderPage
