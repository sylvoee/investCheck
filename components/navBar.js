import Link from "next/link";

const Navbar = () => {
    return ( 
        <>
        
        <nav className="navbar navbar-expand-lg p-3">
  <div className="container-fluid">
    <Link className="navbar-brand" href = "/">firstNextApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/contact" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="">Action</Link></li>
            <li><Link className="dropdown-item" href="">Another action</Link></li>
          
            <li><Link className="dropdown-item" href="">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
     );
}
 
export default Navbar;