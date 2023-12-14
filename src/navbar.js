import { Link } from "react-router-dom";
const Navbar=()=>{

    return <div className="nav">
        <h2 className="name">STNUP MEETS</h2>
        <ul className="ul">
            <Link className="nav-items" to="/"><li>ALL MEETS</li></Link>
            <Link className="nav-items" to="/mymeet"><li>MY MEETS</li></Link>
            <Link className="nav-items" to="/addmeet"><li>ADD MEET</li></Link>
           
        </ul>
    </div>
  }
export default Navbar;  