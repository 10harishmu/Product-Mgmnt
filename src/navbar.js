import'./css/navbar.css';
import navlogo from "./images_folder/logo.jpg";
import {Link} from "react-router-dom" 

const Navbar = () => {
    return ( 
        <section className="navbar" >
            <div className="logo">
            <img src={navlogo}alt="" />
            </div>
              
            <div className="Links">
            <Link style={{textDecoration: 'none'}} to ="/"><h2>Home</h2></Link>
            <Link style={{textDecoration: 'none'}} to ="/favourites"><h2>Products/Cart</h2></Link>
            <Link style={{textDecoration: 'none'}} to ="/help"><h2>Contact Us</h2></Link>
            <Link style={{textDecoration: 'none'}} to ="/add_favs"><h2>Add Product to Cart</h2></Link>
          
             </div>
           </section>
           
        
           );
        }
        export default Navbar;