import { Link, NavLink } from "react-router-dom"
import "../layout/header.css"
const HeaderPage = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/users">User</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>

            </ul>
        </>
    )
}
export default HeaderPage
