import { Link } from "react-router-dom";
import "./navbar.css";

let Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark giveHeighttoIt">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Shopping Cart</Link>
                </div>
            </nav>

        </>
    );
}

export default Navbar;