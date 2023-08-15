import "./logo.styles.scss";
import { Link, Outlet } from "react-router-dom";

const Logo = () =>{
    return(
        <>
         <div className="logo-wrapper">
            <Link to="/">
            <img src="https://assets.website-files.com/6421535f7e4d7a97b8e59310/642202bc301400fda11d1343_tretton37%20Logo%20(2).webp" alt="tretton37 company logo" />
            </Link>
        </div>
        <Outlet />
        </>
       
    )
}

export default Logo;