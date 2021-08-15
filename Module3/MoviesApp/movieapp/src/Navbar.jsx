import { Link } from "react-router-dom";
// Link is a component of "react-router-dom"
// Link is a anchor Component of "react-router-dom" 
// agar ham routing use kar rhe hai and hame hyperlinks create karne hai to ham anchor tag use nhi karenge instead we will replace them by Link tags

// Link tag href attribute nhi leta , instead of that it take "to" as attribute 
let Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">MoviesRental</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/customer">Customers</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/rentals">Rentals</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/login" tabindex="-1">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;