import { Link } from "react-router-dom";



const handleSearch = ()=>{
  console.log("search btton is clicked")
}
const navStyle = {
    backgroundColor : "white",

}

export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top p-4" style={navStyle}>
  <div className="container">
    <Link to={"/"}><img src="src\assets\sasoty_logo.jpg" height="50px" width="auto"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to={"/"} style={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fs-5" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false"
          style={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Software</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
            <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5" to={"/"} style={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>how it works</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 me-4" to={"/"} style={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Resources</Link>
        </li>
      </ul>
      <form className="d-flex me-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
      </form>
      <button
  className="btn ms-5 p-3 gradient-button"
  type="submit">
  Contact us
</button>

    </div>
  </div>
</nav>
        </>
    );
}